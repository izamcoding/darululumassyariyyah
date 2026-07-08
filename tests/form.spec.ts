import { test, expect } from "@playwright/test";

test.describe("Form Kontak", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    // Scroll ke section kontak
    await page.locator("#kontak").scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
  });

  test("harus bisa mengisi form", async ({ page }) => {
    // Isi nama
    const namaInput = page.locator('input[placeholder="Masukkan nama lengkap"]');
    await namaInput.fill("Ahmad Fauzi");
    await expect(namaInput).toHaveValue("Ahmad Fauzi");

    // Isi email
    const emailInput = page.locator('input[placeholder="Masukkan email"]');
    await emailInput.fill("ahmad@example.com");
    await expect(emailInput).toHaveValue("ahmad@example.com");

    // Pilih subjek
    const select = page.locator("select");
    await select.selectOption("Informasi Pendaftaran");
    await expect(select).toHaveValue("Informasi Pendaftaran");

    // Isi pesan
    const pesanInput = page.locator('textarea[placeholder="Tulis pesan Anda..."]');
    await pesanInput.fill("Saya ingin bertanya tentang pendaftaran santri baru.");
    await expect(pesanInput).toHaveValue(
      "Saya ingin bertanya tentang pendaftaran santri baru."
    );
  });

  test("harus bisa submit form", async ({ page }) => {
    // Isi form
    await page.locator('input[placeholder="Masukkan nama lengkap"]').fill("Ahmad Fauzi");
    await page.locator('input[placeholder="Masukkan email"]').fill("ahmad@example.com");
    await page.locator('textarea[placeholder="Tulis pesan Anda..."]').fill("Test pesan");

    // Klik submit
    await page.locator('button:has-text("Kirim Pesan")').click();

    // Form tidak boleh error
    // Note: Karena form belum ada backend, kita hanya cek tidak ada error
    await page.waitForTimeout(500);
  });

  test("harus menampilkan placeholder yang benar", async ({ page }) => {
    await expect(
      page.locator('input[placeholder="Masukkan nama lengkap"]')
    ).toBeVisible();
    await expect(
      page.locator('input[placeholder="Masukkan email"]')
    ).toBeVisible();
    await expect(
      page.locator('textarea[placeholder="Tulis pesan Anda..."]')
    ).toBeVisible();
  });

  test("harus menampilkan opsi subjek", async ({ page }) => {
    const select = page.locator("select");
    const options = select.locator("option");
    await expect(options).toHaveCount(4);

    // Cek opsi yang tersedia
    await expect(options.nth(0)).toHaveText("Informasi Pendaftaran");
    await expect(options.nth(1)).toHaveText("Pertanyaan Umum");
    await expect(options.nth(2)).toHaveText("Kerjasama");
    await expect(options.nth(3)).toHaveText("Lainnya");
  });

  test("input email harus bertipe email", async ({ page }) => {
    const emailInput = page.locator('input[placeholder="Masukkan email"]');
    await expect(emailInput).toHaveAttribute("type", "email");
  });
});
