import { test, expect } from "@playwright/test";

test.describe("Website Pondok Pesantren Darul Ulum Assyar'iyyah", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test.describe("Navbar", () => {
    test("harus menampilkan logo dan nama pondok", async ({ page }) => {
      const logo = page.locator('a[href="#beranda"]').first();
      await expect(logo).toBeVisible();
      await expect(logo).toContainText("Darul Ulum");
      await expect(logo).toContainText("Assyar");
    });

    test("harus menampilkan menu navigasi di desktop", async ({ page }) => {
      const nav = page.locator("nav");
      await expect(nav).toBeVisible();

      // Check menu items using first() to get desktop menu
      await expect(nav.locator('a:has-text("Beranda")').first()).toBeVisible();
      await expect(nav.locator('a:has-text("Tentang")').first()).toBeVisible();
      await expect(nav.locator('a:has-text("Program")').first()).toBeVisible();
      await expect(nav.locator('a:has-text("Galeri")').first()).toBeVisible();
      await expect(nav.locator('a:has-text("Kontak")').first()).toBeVisible();

      // Check CTA button
      await expect(nav.locator('a:has-text("Daftar Sekarang")').first()).toBeVisible();
    });

    test("harus highlight menu aktif saat scroll", async ({ page }) => {
      // Scroll ke section Tentang
      await page.locator("#tentang").scrollIntoViewIfNeeded();
      await page.waitForTimeout(500);

      // Cek apakah menu Tentang aktif (memiliki background hijau)
      const tentangMenu = page.locator('nav a:has-text("Tentang")').first();
      const className = await tentangMenu.getAttribute("class");
      expect(className).toContain("bg-[#1a5632]");
    });

    test("harus menampilkan shadow saat scroll", async ({ page }) => {
      // Scroll ke bawah
      await page.evaluate(() => window.scrollTo(0, 100));
      await page.waitForTimeout(500);

      const nav = page.locator("nav");
      const className = await nav.getAttribute("class");
      expect(className).toContain("shadow-lg");
    });
  });

  test.describe("Hero Section", () => {
    test("harus menampilkan judul utama", async ({ page }) => {
      const hero = page.locator("#beranda");
      await expect(hero).toBeVisible();
      await expect(hero).toContainText("Pondok Pesantren");
      await expect(hero).toContainText("Darul Ulum");
      await expect(hero).toContainText("Assyar");
    });

    test("harus menampilkan deskripsi", async ({ page }) => {
      await expect(page.locator("text=generasi").first()).toBeVisible();
    });

    test("harus menampilkan statistik", async ({ page }) => {
      await expect(page.locator("text=500+").first()).toBeVisible();
      await expect(page.locator("text=Santri Aktif").first()).toBeVisible();
      await expect(page.locator("text=25+").first()).toBeVisible();
      await expect(page.locator("text=Tahun Berdiri").first()).toBeVisible();
      await expect(page.locator("text=50+").first()).toBeVisible();
      await expect(page.getByText("Ustadz/Ustadzah")).toBeVisible();
    });

    test("harus menampilkan tombol CTA", async ({ page }) => {
      await expect(page.locator('text="Daftar Santri Baru"')).toBeVisible();
      await expect(page.locator('text="Pelajari Lebih Lanjut"')).toBeVisible();
    });

    test("harus menampilkan scroll indicator", async ({ page }) => {
      await expect(page.locator("text=Scroll")).toBeVisible();
    });
  });

  test.describe("About Section", () => {
    test("harus menampilkan visi", async ({ page }) => {
      const tentang = page.locator("#tentang");
      await expect(tentang).toContainText("Visi");
      await expect(tentang).toContainText("Mewujudkan pesantren yang unggul");
    });

    test("harus menampilkan misi", async ({ page }) => {
      const tentang = page.locator("#tentang");
      await expect(tentang).toContainText("Misi");
      await expect(tentang).toContainText("Menyelenggarakan pendidikan Islam");
    });

    test("harus menampilkan fitur unggulan", async ({ page }) => {
      const tentang = page.locator("#tentang");
      await expect(tentang).toContainText("Pendidikan Al-Qur");
      await expect(tentang).toContainText("Kurikulum Nasional");
      await expect(tentang).toContainText("Bahasa Arab");
      await expect(tentang).toContainText("Ekstrakurikuler");
    });
  });

  test.describe("Program Section", () => {
    test("harus menampilkan semua program", async ({ page }) => {
      await page.locator("#program").scrollIntoViewIfNeeded();
      await page.waitForTimeout(500);

      const program = page.locator("#program");
      await expect(program).toContainText("Tahfidz");
      await expect(program).toContainText("Madrasah Tsanawiyah");
      await expect(program).toContainText("Madrasah Aliyah");
      await expect(program).toContainText("Kuliah Kependidikan");
      await expect(program).toContainText("Pesantren Kilat");
      await expect(program).toContainText("Kursus Komputer");
    });

    test("harus menampilkan detail program", async ({ page }) => {
      await page.locator("#program").scrollIntoViewIfNeeded();
      await page.waitForTimeout(500);

      const program = page.locator("#program");
      await expect(program).toContainText("Target 30 Juz");
      await expect(program).toContainText("Kurikulum nasional");
    });
  });

  test.describe("Gallery Section", () => {
    test("harus menampilkan 8 item galeri", async ({ page }) => {
      await page.locator("#galeri").scrollIntoViewIfNeeded();
      await page.waitForTimeout(500);

      const galeri = page.locator("#galeri");
      const items = galeri.locator(".group");
      await expect(items).toHaveCount(8);
    });

    test("harus menampilkan judul galeri", async ({ page }) => {
      await page.locator("#galeri").scrollIntoViewIfNeeded();
      await page.waitForTimeout(500);

      const galeri = page.locator("#galeri");
      await expect(galeri).toContainText("Sholat Berjamaah");
      await expect(galeri).toContainText("Tahfidz");
      await expect(galeri).toContainText("Wisuda Santri");
    });
  });

  test.describe("Contact Section", () => {
    test("harus menampilkan informasi kontak", async ({ page }) => {
      await page.locator("#kontak").scrollIntoViewIfNeeded();
      await page.waitForTimeout(500);

      const kontak = page.locator("#kontak");
      await expect(kontak).toContainText("Desa Leyangan");
      await expect(kontak).toContainText("Ungaran Timur");
      await expect(kontak).toContainText("0812-3456-7890");
      await expect(kontak).toContainText("info@darululum-assyariyyah.sch.id");
    });

    test("harus menampilkan form kontak", async ({ page }) => {
      await page.locator("#kontak").scrollIntoViewIfNeeded();
      await page.waitForTimeout(500);

      const kontak = page.locator("#kontak");
      await expect(kontak.locator('input[placeholder="Masukkan nama lengkap"]')).toBeVisible();
      await expect(kontak.locator('input[placeholder="Masukkan email"]')).toBeVisible();
      await expect(kontak.locator("select")).toBeVisible();
      await expect(kontak.locator('textarea[placeholder="Tulis pesan Anda..."]')).toBeVisible();
      await expect(kontak.locator('button:has-text("Kirim Pesan")')).toBeVisible();
    });

    test("harus menampilkan ikon sosial media", async ({ page }) => {
      await page.locator("#kontak").scrollIntoViewIfNeeded();
      await page.waitForTimeout(500);

      const kontak = page.locator("#kontak");
      // SVG icons for social media
      const svgIcons = kontak.locator("svg");
      const count = await svgIcons.count();
      expect(count).toBeGreaterThanOrEqual(3);
    });
  });

  test.describe("Registration Section", () => {
    test("harus menampilkan informasi pendaftaran", async ({ page }) => {
      await page.locator("#pendaftaran").scrollIntoViewIfNeeded();
      await page.waitForTimeout(500);

      const daftar = page.locator("#pendaftaran");
      await expect(daftar).toContainText("Penerimaan Santri Baru");
      await expect(daftar).toContainText("Bergabunglah Bersama Kami");
      await expect(daftar).toContainText("Syarat Pendaftaran");
      await expect(daftar).toContainText("Jadwal Pendaftaran");
      await expect(daftar).toContainText("Biaya Pendidikan");
    });

    test("harus menampilkan tombol daftar dan WhatsApp", async ({ page }) => {
      await page.locator("#pendaftaran").scrollIntoViewIfNeeded();
      await page.waitForTimeout(500);

      const daftar = page.locator("#pendaftaran");
      await expect(daftar.locator('a:has-text("Daftar Sekarang")')).toBeVisible();
      await expect(daftar.locator('a:has-text("WhatsApp")')).toBeVisible();
    });
  });

  test.describe("Footer", () => {
    test("harus menampilkan informasi pondok", async ({ page }) => {
      const footer = page.locator("footer");
      await expect(footer).toContainText("Darul Ulum");
      await expect(footer).toContainText("Pondok Pesantren Unggulan");
    });

    test("harus menampilkan tautan cepat", async ({ page }) => {
      const footer = page.locator("footer");
      await expect(footer).toContainText("Tautan Cepat");
      await expect(footer.locator('a:has-text("Beranda")')).toBeVisible();
      await expect(footer.locator('a:has-text("Tentang Kami")')).toBeVisible();
      await expect(footer.locator('a:has-text("Program")')).toBeVisible();
    });

    test("harus menampilkan copyright", async ({ page }) => {
      const footer = page.locator("footer");
      await expect(footer).toContainText("2024 Pondok Pesantren Darul Ulum");
    });
  });

  test.describe("Navigation Links", () => {
    test("klik Beranda harus scroll ke hero", async ({ page }) => {
      // Scroll ke bawah dulu
      await page.evaluate(() => window.scrollTo(0, 1000));
      await page.waitForTimeout(300);

      // Klik Beranda (desktop menu - first)
      await page.locator('nav a:has-text("Beranda")').first().click();
      await page.waitForTimeout(1000);

      // Cek posisi scroll
      const scrollY = await page.evaluate(() => window.scrollY);
      expect(scrollY).toBeLessThan(200);
    });

    test("klik Tentang harus scroll ke about section", async ({ page }) => {
      await page.locator('nav a:has-text("Tentang")').first().click();
      await page.waitForTimeout(1000);

      const tentangVisible = await page.locator("#tentang").isVisible();
      expect(tentangVisible).toBeTruthy();
    });

    test("klik Program harus scroll ke program section", async ({ page }) => {
      await page.locator('nav a:has-text("Program")').first().click();
      await page.waitForTimeout(1000);

      const programVisible = await page.locator("#program").isVisible();
      expect(programVisible).toBeTruthy();
    });
  });

  test.describe("Mobile Menu", () => {
    test.use({ viewport: { width: 375, height: 812 } });

    test("harus menampilkan hamburger button di mobile", async ({ page }) => {
      const menuButton = page.locator('button[aria-label="Toggle menu"]');
      await expect(menuButton).toBeVisible();
    });

    test("harus membuka menu saat klik hamburger", async ({ page }) => {
      const menuButton = page.locator('button[aria-label="Toggle menu"]');
      await menuButton.click();
      await page.waitForTimeout(300);

      // Check menu items visible (mobile menu - last items)
      await expect(page.locator('nav a:has-text("Beranda")').last()).toBeVisible();
      await expect(page.locator('nav a:has-text("Tentang")').last()).toBeVisible();
      await expect(page.locator('nav a:has-text("Daftar Sekarang")').last()).toBeVisible();
    });

    test("harus menutup menu saat klik link", async ({ page }) => {
      // Buka menu
      await page.locator('button[aria-label="Toggle menu"]').click();
      await page.waitForTimeout(300);

      // Klik link
      await page.locator('nav a:has-text("Beranda")').last().click();
      await page.waitForTimeout(500);

      // Menu harus tertutup (max-height 0)
      const mobileMenu = page.locator(".overflow-hidden").first();
      const className = await mobileMenu.getAttribute("class");
      expect(className).toContain("max-h-0");
    });
  });

  test.describe("Back to Top Button", () => {
    test("harus menampilkan tombol back to top saat scroll", async ({ page }) => {
      // Scroll ke bawah
      await page.evaluate(() => window.scrollTo(0, 2000));
      await page.waitForTimeout(500);

      const backToTop = page.locator('a[href="#beranda"]').last();
      await expect(backToTop).toBeVisible();
    });

    test("klik back to top harus scroll ke atas", async ({ page }) => {
      // Scroll ke bawah
      await page.evaluate(() => window.scrollTo(0, 2000));
      await page.waitForTimeout(500);

      // Klik back to top
      await page.locator('a[href="#beranda"]').last().click();
      await page.waitForTimeout(1000);

      const scrollY = await page.evaluate(() => window.scrollY);
      expect(scrollY).toBeLessThan(200);
    });
  });

  test.describe("Accessibility", () => {
    test("harus memiliki title yang benar", async ({ page }) => {
      await expect(page).toHaveTitle(/Pondok Pesantren Darul Ulum/);
    });

    test("harus memiliki lang attribute", async ({ page }) => {
      const html = page.locator("html");
      await expect(html).toHaveAttribute("lang", "id");
    });

    test("harus memiliki meta description", async ({ page }) => {
      const metaDesc = page.locator('meta[name="description"]');
      await expect(metaDesc).toHaveAttribute("content", /Mendidik generasi/);
    });

    test("semua gambar harus punya alt text", async ({ page }) => {
      const images = page.locator("img");
      const count = await images.count();

      for (let i = 0; i < count; i++) {
        const img = images.nth(i);
        await expect(img).toHaveAttribute("alt");
        const alt = await img.getAttribute("alt");
        expect(alt?.length).toBeGreaterThan(0);
      }
    });
  });
});
