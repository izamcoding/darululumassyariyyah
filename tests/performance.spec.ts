import { test, expect } from "@playwright/test";

test.describe("Performance Tests", () => {
  test("harus memuat halaman dalam 3 detik", async ({ page }) => {
    const startTime = Date.now();
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    const loadTime = Date.now() - startTime;

    console.log(`Page load time: ${loadTime}ms`);
    expect(loadTime).toBeLessThan(3000);
  });

  test("harus memiliki First Contentful Paint yang baik", async ({ page }) => {
    await page.goto("/");

    const fcp = await page.evaluate(() => {
      return new Promise((resolve) => {
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          if (entries.length > 0) {
            resolve(entries[0].startTime);
          }
        }).observe({ type: "paint", buffered: true });
      });
    });

    console.log(`FCP: ${fcp}ms`);
    expect(fcp).toBeLessThan(2000);
  });

  test("harus memiliki Largest Contentful Paint yang baik", async ({ page }) => {
    await page.goto("/");

    const lcp = await page.evaluate(() => {
      return new Promise((resolve) => {
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          if (entries.length > 0) {
            resolve(entries[entries.length - 1].startTime);
          }
        }).observe({ type: "largest-contentful-paint", buffered: true });
      });
    });

    console.log(`LCP: ${lcp}ms`);
    expect(lcp).toBeLessThan(4000);
  });

  test("tidak boleh ada console errors", async ({ page }) => {
    const errors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") {
        errors.push(msg.text());
      }
    });

    await page.goto("/");
    await page.waitForLoadState("networkidle");

    if (errors.length > 0) {
      console.log("Console errors found:", errors);
    }
    expect(errors.length).toBe(0);
  });

  test("tidak boleh ada failed network requests", async ({ page }) => {
    const failedRequests: string[] = [];
    page.on("requestfailed", (request) => {
      failedRequests.push(`${request.url()}: ${request.failure()?.errorText}`);
    });

    await page.goto("/");
    await page.waitForLoadState("networkidle");

    if (failedRequests.length > 0) {
      console.log("Failed requests:", failedRequests);
    }
    expect(failedRequests.length).toBe(0);
  });

  test("scroll harus smooth tanpa jank", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    // Simulate scroll
    const startTime = Date.now();
    await page.evaluate(() => {
      return new Promise<void>((resolve) => {
        let scrollTop = 0;
        const interval = setInterval(() => {
          scrollTop += 100;
          window.scrollTo(0, scrollTop);
          if (scrollTop >= 5000) {
            clearInterval(interval);
            resolve();
          }
        }, 16); // ~60fps
      });
    });
    const scrollTime = Date.now() - startTime;

    console.log(`Scroll time: ${scrollTime}ms`);
    expect(scrollTime).toBeLessThan(5000);
  });
});
