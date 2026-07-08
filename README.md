# Pondok Pesantren Darul Ulum Assyar'iyyah

Website resmi Pondok Pesantren Darul Ulum Assyar'iyyah yang terletak di Desa Leyangan, Ungaran Timur, Kabupaten Semarang, Jawa Tengah.

## 🎯 Fitur Website

- **Beranda** - Hero section dengan informasi utama pesantren
- **Tentang** - Profil, Visi, dan Misi pesantren
- **Program** - Program-program unggulan pendidikan
- **Galeri** - Galeri kegiatan santri dan pondok
- **Kontak** - Informasi kontak dan form pesan
- **Pendaftaran** - Info pendaftaran santri baru

## 🚀 Tech Stack

- **Framework**: Next.js 16 dengan App Router
- **Styling**: Tailwind CSS
- **Bahasa**: TypeScript
- **Deployment**: Vercel

## 📦 Instalasi

```bash
# Clone repository
git clone https://github.com/your-username/pondok-web.git

# Masuk ke direktori
cd pondok-web

# Install dependencies
npm install

# Jalankan development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) untuk melihat website.

## 🌐 Deploy ke Vercel

### Cara 1: Via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login ke Vercel
vercel login

# Deploy
vercel
```

### Cara 2: Via GitHub

1. Push repository ke GitHub
2. Login ke [vercel.com](https://vercel.com)
3. Klik "New Project"
4. Import repository dari GitHub
5. Klik "Deploy"

### Cara 3: Via Drag & Drop

1. Login ke [vercel.com](https://vercel.com)
2. Klik "New Project" → "Import Third-Party Git Repository"
3. Atau gunakan [vercel.com/new](https://vercel.com/new)
4. Drag & drop folder project

## ⚙️ Konfigurasi

### Ganti Informasi Kontak

Edit file `src/app/page.tsx` dan cari bagian kontak untuk mengganti:
- Nomor telepon/WhatsApp
- Alamat email
- Link media sosial

### Ganti Warna Tema

Edit file `src/app/globals.css` untuk mengganti warna tema:
```css
:root {
  --primary: #1a5632;    /* Warna utama (hijau) */
  --primary-light: #2d8a52;
  --secondary: #c9a94f;  /* Warna aksen (emas) */
  --background: #f8f6f0;
  --text: #1a1a1a;
}
```

### Ganti Nama Domain

1. Buka dashboard Vercel
2. Pilih project → Settings → Domains
3. Tambahkan custom domain

## 📱 Responsive Design

Website ini sudah responsive dan dapat diakses dengan baik di:
- Desktop
- Tablet
- Mobile

## 📝 Catatan

- Website ini menggunakan static export (tidak perlu backend)
- Semua gambar menggunakan emoji placeholder, bisa diganti dengan gambar asli
- Form kontak perlu diintegrasikan dengan backend atau service seperti Formspree

## 📄 License

© 2024 Pondok Pesantren Darul Ulum Assyar'iyyah. All Rights Reserved.
