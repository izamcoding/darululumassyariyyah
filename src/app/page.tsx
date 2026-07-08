import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#1a5632] to-[#2d8a52] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">DU</span>
              </div>
              <div>
                <h1 className="font-bold text-[#1a5632] text-lg leading-tight">Darul Ulum</h1>
                <p className="text-xs text-[#c9a94f]">Assyar'iyyah</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#beranda" className="text-[#1a5632] hover:text-[#2d8a52] font-medium transition">Beranda</a>
              <a href="#tentang" className="text-gray-600 hover:text-[#1a5632] transition">Tentang</a>
              <a href="#program" className="text-gray-600 hover:text-[#1a5632] transition">Program</a>
              <a href="#galeri" className="text-gray-600 hover:text-[#1a5632] transition">Galeri</a>
              <a href="#kontak" className="text-gray-600 hover:text-[#1a5632] transition">Kontak</a>
              <a href="#pendaftaran" className="bg-[#1a5632] text-white px-6 py-2 rounded-full hover:bg-[#2d8a52] transition">Daftar Sekarang</a>
            </div>
            <button className="md:hidden text-[#1a5632]">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="beranda" className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a5632] via-[#2d8a52] to-[#1a5632]">
          <div className="absolute inset-0 islamic-pattern opacity-30"></div>
          {/* Decorative Elements */}
          <div className="absolute top-20 left-10 w-32 h-32 border-2 border-[#c9a94f]/30 rounded-full"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 border-2 border-[#c9a94f]/20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#c9a94f]/10 rounded-full"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white animate-fade-in">
              <div className="inline-block bg-[#c9a94f]/20 text-[#c9a94f] px-4 py-2 rounded-full text-sm font-medium mb-6">
                ✨ Pesantren Unggulan di Ungaran Timur
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Pondok Pesantren
                <span className="block text-[#c9a94f]">Darul Ulum</span>
                <span className="block text-3xl md:text-4xl">Assyar'iyyah</span>
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Mencetak generasi qur&apos;ani yang berakhlak mulia, berilmu, dan beramal shaleh di jalan Allah SWT.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#pendaftaran" className="bg-[#c9a94f] text-[#1a5632] px-8 py-4 rounded-full font-semibold hover:bg-[#d4b85a] transition transform hover:scale-105 shadow-lg">
                  Daftar Santri Baru
                </a>
                <a href="#tentang" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#1a5632] transition">
                  Pelajari Lebih Lanjut
                </a>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
                <div>
                  <div className="text-3xl font-bold text-[#c9a94f]">500+</div>
                  <div className="text-white/80 text-sm">Santri Aktif</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#c9a94f]">25+</div>
                  <div className="text-white/80 text-sm">Tahun Berdiri</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#c9a94f]">50+</div>
                  <div className="text-white/80 text-sm">Ustadz/Ustadzah</div>
                </div>
              </div>
            </div>
            
            <div className="hidden lg:block relative animate-float">
              <div className="relative w-full h-96 bg-white/10 rounded-3xl backdrop-blur-sm p-8">
                <div className="absolute inset-4 bg-gradient-to-br from-[#c9a94f]/20 to-[#1a5632]/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">🕌</div>
                    <p className="text-lg font-medium">Masjid Darul Ulum</p>
                    <p className="text-sm text-white/70">Pusat Kegiatan Ibadah</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#c9a94f] font-medium">Tentang Kami</span>
            <h2 className="text-4xl font-bold text-[#1a5632] mt-2 mb-4">Profil Pesantren</h2>
            <div className="w-24 h-1 bg-[#c9a94f] mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="bg-gradient-to-br from-[#1a5632] to-[#2d8a52] rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Visi</h3>
                <p className="text-white/90 leading-relaxed mb-6">
                  Mewujudkan pesantren yang unggul dalam ilmu agama, iptek, dan berakhlakul karimah, sehingga mampu mencetak generasi muslim yang bertakwa, cerdas, dan berdaya saing tinggi.
                </p>
                <div className="w-16 h-1 bg-[#c9a94f]"></div>
              </div>
              
              <div className="mt-8 bg-[#f8f6f0] rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-[#1a5632] mb-4">Misi</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-[#c9a94f] rounded-full flex items-center justify-center text-white text-sm mt-0.5">✓</span>
                    <span className="text-gray-700">Menyelenggarakan pendidikan Islam yang berkualitas dan terjangkau</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-[#c9a94f] rounded-full flex items-center justify-center text-white text-sm mt-0.5">✓</span>
                    <span className="text-gray-700">Mengembangkan potensi santri dalam bidang akademik dan non-akademik</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-[#c9a94f] rounded-full flex items-center justify-center text-white text-sm mt-0.5">✓</span>
                    <span className="text-gray-700">Membentuk karakter islami yang kuat dan berakhlak mulia</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-[#c9a94f] rounded-full flex items-center justify-center text-white text-sm mt-0.5">✓</span>
                    <span className="text-gray-700">Menyiapkan kader ulama dan mubaligh untuk dakwah Islam</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-[#1a5632]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📖</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1a5632] text-lg mb-2">Pendidikan Al-Qur&apos;an</h4>
                    <p className="text-gray-600">Hafalan Al-Qur&apos;an 30 Juz dengan metode Tahfidz yang terbukti efektif</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-[#c9a94f]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📚</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1a5632] text-lg mb-2">Kurikulum Nasional</h4>
                    <p className="text-gray-600">Integrasikan kurikulum pendidikan nasional dengan kurikulum pesantren</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-[#1a5632]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🌍</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1a5632] text-lg mb-2">Bahasa Arab & Inggris</h4>
                    <p className="text-gray-600">Pembelajaran bahasa asing untuk komunikasi global dan dakwah internasional</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-[#c9a94f]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">💪</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1a5632] text-lg mb-2">Ekstrakurikuler</h4>
                    <p className="text-gray-600">Berbagai kegiatan seperti bela diri, seni kaligrafi, dan kegiatan positif lainnya</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="program" className="py-24 bg-[#f8f6f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#c9a94f] font-medium">Program Unggulan</span>
            <h2 className="text-4xl font-bold text-[#1a5632] mt-2 mb-4">Program Pendidikan</h2>
            <div className="w-24 h-1 bg-[#c9a94f] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Program 1 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1a5632] to-[#2d8a52] rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">📖</span>
              </div>
              <h3 className="text-xl font-bold text-[#1a5632] mb-3">Tahfidz Al-Qur&apos;an</h3>
              <p className="text-gray-600 mb-4">Program hafalan Al-Qur&apos;an dengan bimbingan ustadz berpengalaman dan metode yang terbukti.</p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Target 30 Juz dalam 4 tahun</li>
                <li>• Metode talaqqi & musyafahah</li>
                <li>• Evaluasi berkala setiap semester</li>
              </ul>
            </div>
            
            {/* Program 2 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#c9a94f] to-[#d4b85a] rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">🎓</span>
              </div>
              <h3 className="text-xl font-bold text-[#1a5632] mb-3">Madrasah Tsanawiyah</h3>
              <p className="text-gray-600 mb-4">Pendidikan menengah dengan kurikulum Kemenag yang diintegrasikan dengan pesantren.</p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Kurikulumnasional + Diniyah</li>
                <li>• Ekskul Bahasa Arab & Inggris</li>
                <li>• Bimbingan belajar intensif</li>
              </ul>
            </div>
            
            {/* Program 3 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1a5632] to-[#2d8a52] rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">🏫</span>
              </div>
              <h3 className="text-xl font-bold text-[#1a5632] mb-3">Madrasah Aliyah</h3>
              <p className="text-gray-600 mb-4">Pendidikan lanjutan tingkat atas dengan fokus persiapan masuk Perguruan Tinggi Negeri.</p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Program persiapan UTBK & SNBT</li>
                <li>• Konsentrasi IPS/IPA</li>
                <li>• Bimbingan karir & motivasi</li>
              </ul>
            </div>
            
            {/* Program 4 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#c9a94f] to-[#d4b85a] rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">📚</span>
              </div>
              <h3 className="text-xl font-bold text-[#1a5632] mb-3">Kuliah Kependidikan</h3>
              <p className="text-gray-600 mb-4">Program pendidikan tinggi dengan gelar S.Pd dalam berbagai disiplin ilmu keislaman.</p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Prodi Pendidikan Agama Islam</li>
                <li>• Prodi Hukum Keluarga Islam</li>
                <li>• Kerjasama dengan PTNU</li>
              </ul>
            </div>
            
            {/* Program 5 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1a5632] to-[#2d8a52] rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">🌙</span>
              </div>
              <h3 className="text-xl font-bold text-[#1a5632] mb-3">Pesantren Kilat</h3>
              <p className="text-gray-600 mb-4">Program intensif selama liburan sekolah untuk memperkuat ilmu agama.</p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Pesantren Ramadan 30 hari</li>
                <li>• Pesantren Qurban</li>
                <li>• Program akhir tahun</li>
              </ul>
            </div>
            
            {/* Program 6 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#c9a94f] to-[#d4b85a] rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">💻</span>
              </div>
              <h3 className="text-xl font-bold text-[#1a5632] mb-3">Kursus Komputer</h3>
              <p className="text-gray-600 mb-4">Pelatihan teknologi informasi untuk santri dan masyarakat umum.</p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Microsoft Office</li>
                <li>• Desain Grafis</li>
                <li>• Pemrograman Dasar</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeri" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#c9a94f] font-medium">Galeri</span>
            <h2 className="text-4xl font-bold text-[#1a5632] mt-2 mb-4">Kegiatan Kami</h2>
            <div className="w-24 h-1 bg-[#c9a94f] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { id: 1, title: "Sholat Berjamaah", icon: "🕌" },
              { id: 2, title: "Tahfidz Al-Qur'an", icon: "📖" },
              { id: 3, title: "Pengajian Kitab", icon: "📚" },
              { id: 4, title: "Outbond Santri", icon: "🏔️" },
              { id: 5, title: "Lomba Kaligrafi", icon: "🎨" },
              { id: 6, title: "Wisuda Santri", icon: "🎓" },
              { id: 7, title: "Peringatan 17 Agustus", icon: "🇮🇩" },
              { id: 8, title: "Bakti Sosial", icon: "🤝" },
            ].map((item) => (
              <div key={item.id} className="group relative aspect-square bg-gradient-to-br from-[#1a5632] to-[#2d8a52] rounded-2xl overflow-hidden cursor-pointer">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl group-hover:scale-110 transition">{item.icon}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-medium">{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="py-24 bg-[#f8f6f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#c9a94f] font-medium">Kontak</span>
            <h2 className="text-4xl font-bold text-[#1a5632] mt-2 mb-4">Hubungi Kami</h2>
            <div className="w-24 h-1 bg-[#c9a94f] mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1a5632] rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1a5632] mb-1">Lokasi</h4>
                    <p className="text-gray-600">Desa Leyangan, Ungaran Timur<br />Kabupaten Semarang, Jawa Tengah</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#c9a94f] rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📱</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1a5632] mb-1">Telepon / WhatsApp</h4>
                    <p className="text-gray-600">0812-3456-7890<br />0856-7890-1234</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1a5632] rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">✉️</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1a5632] mb-1">Email</h4>
                    <p className="text-gray-600">info@darululum-assyariyyah.sch.id<br />pendaftaran@darululum-assyariyyah.sch.id</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#c9a94f] rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🌐</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1a5632] mb-1">Media Sosial</h4>
                    <div className="flex gap-3 mt-2">
                      <span className="w-10 h-10 bg-[#1a5632] rounded-full flex items-center justify-center text-white hover:bg-[#2d8a52] cursor-pointer">f</span>
                      <span className="w-10 h-10 bg-[#1a5632] rounded-full flex items-center justify-center text-white hover:bg-[#2d8a52] cursor-pointer">ig</span>
                      <span className="w-10 h-10 bg-[#1a5632] rounded-full flex items-center justify-center text-white hover:bg-[#2d8a52] cursor-pointer">yt</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[#1a5632] mb-6">Kirim Pesan</h3>
              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1a5632] focus:ring-2 focus:ring-[#1a5632]/20 outline-none transition" placeholder="Masukkan nama lengkap" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1a5632] focus:ring-2 focus:ring-[#1a5632]/20 outline-none transition" placeholder="Masukkan email" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subjek</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1a5632] focus:ring-2 focus:ring-[#1a5632]/20 outline-none transition">
                    <option>Informasi Pendaftaran</option>
                    <option>Pertanyaan Umum</option>
                    <option>Kerjasama</option>
                    <option>Lainnya</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Pesan</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1a5632] focus:ring-2 focus:ring-[#1a5632]/20 outline-none transition resize-none" placeholder="Tulis pesan Anda..."></textarea>
                </div>
                <button type="submit" className="w-full bg-[#1a5632] text-white py-4 rounded-xl font-semibold hover:bg-[#2d8a52] transition">
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="pendaftaran" className="py-24 bg-gradient-to-br from-[#1a5632] via-[#2d8a52] to-[#1a5632] relative overflow-hidden">
        <div className="absolute inset-0 islamic-pattern opacity-20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#c9a94f]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#c9a94f]/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-[#c9a94f]/20 text-[#c9a94f] px-4 py-2 rounded-full text-sm font-medium mb-6">
            🎓 Penerimaan Santri Baru 2024/2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Bergabunglah Bersama Kami
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Wujudkan impian putra-putri Anda untuk menjadi generasi qur&apos;ani yang berakhlak mulia dan berilmu tinggi.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white">
              <div className="text-3xl mb-3">📋</div>
              <h4 className="font-bold mb-2">Syarat Pendaftaran</h4>
              <p className="text-sm text-white/80">Fotokopi Ijazah, Akta Kelahiran, SKL, Surat Kesehatan</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white">
              <div className="text-3xl mb-3">📅</div>
              <h4 className="font-bold mb-2">Jadwal Pendaftaran</h4>
              <p className="text-sm text-white/80">1 Januari - 30 Juni 2025<br />atau sampai kuota terpenuhi</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white">
              <div className="text-3xl mb-3">💰</div>
              <h4 className="font-bold mb-2">Biaya Pendidikan</h4>
              <p className="text-sm text-white/80">Terjangkau dengan sistem beasiswa bagi santri berprestasi</p>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#kontak" className="bg-[#c9a94f] text-[#1a5632] px-8 py-4 rounded-full font-semibold hover:bg-[#d4b85a] transition transform hover:scale-105 shadow-lg">
              Daftar Sekarang
            </a>
            <a href="https://wa.me/6281234567890" className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition border border-white/30">
              📱 Hubungi via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0d3d1f] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#c9a94f] rounded-full flex items-center justify-center">
                  <span className="text-[#1a5632] font-bold text-xl">DU</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Darul Ulum Assyar&apos;iyyah</h3>
                  <p className="text-[#c9a94f] text-sm">Pondok Pesantren Unggulan</p>
                </div>
              </div>
              <p className="text-white/70 mb-4 max-w-md">
                Mendidik generasi muslim yang berakhlak mulia, berilmu, dan beramal shaleh sejak tahun 1999.
              </p>
              <div className="flex gap-3">
                <span className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#c9a94f] cursor-pointer transition">f</span>
                <span className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#c9a94f] cursor-pointer transition">ig</span>
                <span className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#c9a94f] cursor-pointer transition">yt</span>
              </div>
            </div>
            
            {/* Links */}
            <div>
              <h4 className="font-bold text-lg mb-4">Tautan Cepat</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#beranda" className="hover:text-[#c9a94f] transition">Beranda</a></li>
                <li><a href="#tentang" className="hover:text-[#c9a94f] transition">Tentang Kami</a></li>
                <li><a href="#program" className="hover:text-[#c9a94f] transition">Program</a></li>
                <li><a href="#galeri" className="hover:text-[#c9a94f] transition">Galeri</a></li>
                <li><a href="#pendaftaran" className="hover:text-[#c9a94f] transition">Pendaftaran</a></li>
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h4 className="font-bold text-lg mb-4">Kontak Kami</h4>
              <ul className="space-y-3 text-white/70 text-sm">
                <li className="flex items-start gap-2">
                  <span>📍</span>
                  <span>Desa Leyangan, Ungaran Timur, Kab. Semarang</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>📱</span>
                  <span>0812-3456-7890</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>✉️</span>
                  <span>info@darululum.sch.id</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 text-center text-white/60 text-sm">
            <p>© 2024 Pondok Pesantren Darul Ulum Assyar&apos;iyyah. Semua Hak Dilindungi.</p>
            <p className="mt-2">Desa Leyangan, Ungaran Timur, Kabupaten Semarang, Jawa Tengah</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
