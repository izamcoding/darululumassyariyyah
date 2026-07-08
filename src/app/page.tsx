"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("beranda");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll
      const sections = ["beranda", "tentang", "program", "galeri", "kontak", "pendaftaran"];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? "bg-white/98 backdrop-blur-md shadow-lg py-2 border-gray-200/50" 
          : "bg-white/95 backdrop-blur-sm shadow-md py-0 border-transparent"
      }`}>
        <div className="max-w-7xl mx-auto pl-6 pr-4 sm:pl-10 sm:pr-8 lg:pl-16 lg:pr-12">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <a href="#beranda" className="flex items-center gap-2 sm:gap-3 group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#1a5632] to-[#2d8a52] rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <span className="text-white font-bold text-base sm:text-xl">DU</span>
              </div>
              <div>
                <h1 className="font-bold text-[#1a5632] text-sm sm:text-lg leading-tight group-hover:text-[#2d8a52] transition-colors">Darul Ulum</h1>
                <p className="text-[10px] sm:text-xs text-[#c9a94f] font-medium">Assyar&apos;iyyah</p>
              </div>
            </a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-1">
              {[
                { id: "beranda", label: "Beranda" },
                { id: "tentang", label: "Tentang" },
                { id: "program", label: "Program" },
                { id: "galeri", label: "Galeri" },
                { id: "kontak", label: "Kontak" },
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeSection === item.id
                      ? "bg-[#1a5632] text-white shadow-sm"
                      : "text-gray-600 hover:text-[#1a5632] hover:bg-gray-100"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#pendaftaran"
                className="bg-[#1a5632] text-white px-6 py-2.5 rounded-full hover:bg-[#2d8a52] transition-all duration-200 shadow-md hover:shadow-lg text-sm font-semibold ml-2 hover:scale-105"
              >
                Daftar Sekarang
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-[#1a5632] p-2 hover:bg-gray-100 rounded-xl transition-all duration-200 active:scale-95"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? "max-h-96 opacity-100 translate-y-0" 
            : "max-h-0 opacity-0 -translate-y-2"
        } overflow-hidden`}>
          <div className="bg-white border-t border-gray-100 px-6 py-4 space-y-2 shadow-lg">
            {[
              { id: "beranda", label: "Beranda" },
              { id: "tentang", label: "Tentang" },
              { id: "program", label: "Program" },
              { id: "galeri", label: "Galeri" },
              { id: "kontak", label: "Kontak" },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={closeMenu}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeSection === item.id
                    ? "bg-[#1a5632] text-white shadow-sm"
                    : "text-gray-600 hover:text-[#1a5632] hover:bg-gray-50"
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#pendaftaran"
              onClick={closeMenu}
              className="block bg-[#1a5632] text-white px-4 py-3 rounded-xl hover:bg-[#2d8a52] transition-all duration-200 text-center text-sm font-semibold mt-2 active:scale-98"
            >
              Daftar Sekarang
            </a>
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
          {/* Geometric Pattern */}
          <div className="absolute top-1/4 right-1/4 w-24 h-24 border border-[#c9a94f]/20 rotate-45"></div>
          <div className="absolute bottom-1/3 left-1/3 w-20 h-20 border border-[#c9a94f]/15 rotate-12"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white animate-fade-in">
              <div className="inline-block bg-[#c9a94f]/20 text-[#c9a94f] px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-[#c9a94f]/30">
                ✨ Pesantren Unggulan di Ungaran Timur
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Pondok Pesantren
                <span className="block text-[#c9a94f] mt-2">Darul Ulum</span>
                <span className="block text-3xl md:text-4xl lg:text-5xl mt-1">Assyar&apos;iyyah</span>
              </h1>
              <p className="text-lg lg:text-xl text-white/90 mb-8 leading-relaxed max-w-lg">
                Mencetak generasi qur&apos;ani yang berakhlak mulia, berilmu, dan beramal shaleh di jalan Allah SWT.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#pendaftaran" className="bg-[#c9a94f] text-[#1a5632] px-8 py-4 rounded-full font-semibold hover:bg-[#d4b85a] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Daftar Santri Baru
                </a>
                <a href="#tentang" className="border-2 border-white/80 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                  Pelajari Lebih Lanjut
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
                <div>
                  <div className="text-3xl font-bold text-[#c9a94f]">500+</div>
                  <div className="text-white/80 text-sm mt-1">Santri Aktif</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#c9a94f]">25+</div>
                  <div className="text-white/80 text-sm mt-1">Tahun Berdiri</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#c9a94f]">50+</div>
                  <div className="text-white/80 text-sm mt-1">Ustadz/Ustadzah</div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block relative animate-float">
              <div className="relative w-full h-[420px] bg-white/10 rounded-3xl backdrop-blur-sm p-8 border border-white/20">
                <div className="absolute inset-4 bg-gradient-to-br from-[#c9a94f]/20 to-[#1a5632]/20 rounded-2xl flex items-center justify-center overflow-hidden">
                  {/* Decorative Islamic Pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-4 left-4 w-32 h-32 border-2 border-[#c9a94f] rounded-full"></div>
                    <div className="absolute bottom-4 right-4 w-24 h-24 border-2 border-[#c9a94f] rotate-45"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-[#c9a94f] rounded-full"></div>
                  </div>
                  <div className="relative text-center text-white z-10">
                    <div className="w-24 h-24 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                      <span className="text-5xl">🕌</span>
                    </div>
                    <p className="text-xl font-bold">Masjid Darul Ulum</p>
                    <p className="text-sm text-white/70 mt-2">Pusat Kegiatan Ibadah</p>
                    <div className="flex justify-center gap-2 mt-4">
                      <span className="w-2 h-2 bg-[#c9a94f] rounded-full"></span>
                      <span className="w-2 h-2 bg-[#c9a94f] rounded-full"></span>
                      <span className="w-2 h-2 bg-[#c9a94f] rounded-full"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-white/60">Scroll</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#c9a94f] font-medium text-sm uppercase tracking-wider">Tentang Kami</span>
            <h2 className="text-4xl font-bold text-[#1a5632] mt-3 mb-4">Profil Pesantren</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#c9a94f] to-[#1a5632] mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              Pondok Pesantren Darul Ulum Assyar&apos;iyyah berkomitmen mencetak generasi muslim yang unggul dalam ilmu agama dan pengetahuan umum.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="bg-gradient-to-br from-[#1a5632] to-[#2d8a52] rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#c9a94f]/20 rounded-xl flex items-center justify-center">
                    <span className="text-xl">🎯</span>
                  </div>
                  <h3 className="text-2xl font-bold">Visi</h3>
                </div>
                <p className="text-white/90 leading-relaxed">
                  Mewujudkan pesantren yang unggul dalam ilmu agama, iptek, dan berakhlakul karimah, sehingga mampu mencetak generasi muslim yang bertakwa, cerdas, dan berdaya saing tinggi.
                </p>
                <div className="w-16 h-1 bg-[#c9a94f] mt-6 rounded-full"></div>
              </div>

              <div className="mt-8 bg-gradient-to-br from-[#f8f6f0] to-white rounded-3xl p-8 border border-gray-100 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-[#1a5632]/10 rounded-xl flex items-center justify-center">
                    <span className="text-xl">🚀</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#1a5632]">Misi</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Menyelenggarakan pendidikan Islam yang berkualitas dan terjangkau",
                    "Mengembangkan potensi santri dalam bidang akademik dan non-akademik",
                    "Membentuk karakter islami yang kuat dan berakhlak mulia",
                    "Menyiapkan kader ulama dan mubaligh untuk dakwah Islam",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-[#c9a94f] rounded-full flex items-center justify-center text-white text-xs mt-0.5 flex-shrink-0 shadow-sm">✓</span>
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-5">
              {[
                { icon: "📖", title: "Pendidikan Al-Qur'an", desc: "Hafalan Al-Qur'an 30 Juz dengan metode Tahfidz yang terbukti efektif" },
                { icon: "📚", title: "Kurikulum Nasional", desc: "Integrasikan kurikulum pendidikan nasional dengan kurikulum pesantren" },
                { icon: "🌍", title: "Bahasa Arab & Inggris", desc: "Pembelajaran bahasa asing untuk komunikasi global dan dakwah internasional" },
                { icon: "💪", title: "Ekstrakurikuler", desc: "Berbagai kegiatan seperti bela diri, seni kaligrafi, dan kegiatan positif lainnya" },
              ].map((item, index) => (
                <div key={index} className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-[#1a5632]/20 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#1a5632]/10 to-[#2d8a52]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">{item.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1a5632] text-lg mb-2">{item.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="program" className="py-24 bg-[#f8f6f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#c9a94f] font-medium text-sm uppercase tracking-wider">Program Unggulan</span>
            <h2 className="text-4xl font-bold text-[#1a5632] mt-3 mb-4">Program Pendidikan</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#c9a94f] to-[#1a5632] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "📖", title: "Tahfidz Al-Qur&apos;an", desc: "Program hafalan Al-Qur&apos;an dengan bimbingan ustadz berpengalaman.", items: ["Target 30 Juz dalam 4 tahun", "Metode talaqqi & musyafahah", "Evaluasi berkala"], color: "from-[#1a5632] to-[#2d8a52]" },
              { icon: "🎓", title: "Madrasah Tsanawiyah", desc: "Pendidikan menengah dengan kurikulum Kemenag terintegrasi.", items: ["Kurikulum nasional + Diniyah", "Ekskul Bahasa Arab & Inggris", "Bimbingan belajar intensif"], color: "from-[#c9a94f] to-[#d4b85a]" },
              { icon: "🏫", title: "Madrasah Aliyah", desc: "Pendidikan lanjutan dengan fokus persiapan masuk PTN.", items: ["Program persiapan UTBK & SNBT", "Konsentrasi IPS/IPA", "Bimbingan karir & motivasi"], color: "from-[#1a5632] to-[#2d8a52]" },
              { icon: "📚", title: "Kuliah Kependidikan", desc: "Program pendidikan tinggi dengan gelar S.Pd.", items: ["Prodi Pendidikan Agama Islam", "Prodi Hukum Keluarga Islam", "Kerjasama dengan PTNU"], color: "from-[#c9a94f] to-[#d4b85a]" },
              { icon: "🌙", title: "Pesantren Kilat", desc: "Program intensif selama liburan sekolah.", items: ["Pesantren Ramadan 30 hari", "Pesantren Qurban", "Program akhir tahun"], color: "from-[#1a5632] to-[#2d8a52]" },
              { icon: "💻", title: "Kursus Komputer", desc: "Pelatihan teknologi informasi untuk santri.", items: ["Microsoft Office", "Desain Grafis", "Pemrograman Dasar"], color: "from-[#c9a94f] to-[#d4b85a]" },
            ].map((program, index) => (
              <div key={index} className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-transparent hover:border-[#1a5632]/10">
                <div className={`w-16 h-16 bg-gradient-to-br ${program.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                  <span className="text-3xl">{program.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-[#1a5632] mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{program.desc}</p>
                <ul className="text-sm text-gray-500 space-y-2.5">
                  {program.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#c9a94f] rounded-full flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeri" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#c9a94f] font-medium text-sm uppercase tracking-wider">Galeri</span>
            <h2 className="text-4xl font-bold text-[#1a5632] mt-3 mb-4">Kegiatan Kami</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#c9a94f] to-[#1a5632] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {[
              { title: "Sholat Berjamaah", icon: "🕌", gradient: "from-[#1a5632] to-[#2d8a52]" },
              { title: "Tahfidz Al-Qur&apos;an", icon: "📖", gradient: "from-[#2d8a52] to-[#1a5632]" },
              { title: "Pengajian Kitab", icon: "📚", gradient: "from-[#1a5632] to-[#0d3d1f]" },
              { title: "Outbond Santri", icon: "🏔️", gradient: "from-[#2d8a52] to-[#1a5632]" },
              { title: "Lomba Kaligrafi", icon: "🎨", gradient: "from-[#1a5632] to-[#2d8a52]" },
              { title: "Wisuda Santri", icon: "🎓", gradient: "from-[#2d8a52] to-[#1a5632]" },
              { title: "Peringatan 17 Agustus", icon: "🇮🇩", gradient: "from-[#1a5632] to-[#0d3d1f]" },
              { title: "Bakti Sosial", icon: "🤝", gradient: "from-[#2d8a52] to-[#1a5632]" },
            ].map((item, index) => (
              <div key={index} className="group relative aspect-square bg-gradient-to-br rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`}>
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 left-4 w-16 h-16 border border-white rounded-full"></div>
                    <div className="absolute bottom-4 right-4 w-12 h-12 border border-white rotate-45"></div>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl group-hover:scale-125 transition-transform duration-300 drop-shadow-lg">{item.icon}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-white font-semibold text-sm">{item.title}</p>
                    <p className="text-white/70 text-xs mt-1">Klik untuk detail</p>
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
            <span className="text-[#c9a94f] font-medium text-sm uppercase tracking-wider">Kontak</span>
            <h2 className="text-4xl font-bold text-[#1a5632] mt-3 mb-4">Hubungi Kami</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#c9a94f] to-[#1a5632] mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-5">
              {[
                { icon: "📍", title: "Lokasi", desc: "Desa Leyangan, Ungaran Timur\nKabupaten Semarang, Jawa Tengah", color: "bg-[#1a5632]" },
                { icon: "📱", title: "Telepon / WhatsApp", desc: "0812-3456-7890\n0856-7890-1234", color: "bg-[#c9a94f]" },
                { icon: "✉️", title: "Email", desc: "info@darululum-assyariyyah.sch.id\npendaftaran@darululum-assyariyyah.sch.id", color: "bg-[#1a5632]" },
                { icon: "🌐", title: "Media Sosial", desc: "Ikuti kami di media sosial", color: "bg-[#c9a94f]", isSocial: true },
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-md`}>
                      <span className="text-xl">{item.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-[#1a5632] mb-1">{item.title}</h4>
                      {item.isSocial ? (
                        <div className="flex gap-3 mt-3">
                          {/* Facebook */}
                          <a href="#" className="w-10 h-10 bg-[#1a5632] rounded-full flex items-center justify-center text-white hover:bg-[#2d8a52] transition-colors shadow-sm hover:shadow-md">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                          </a>
                          {/* Instagram */}
                          <a href="#" className="w-10 h-10 bg-[#1a5632] rounded-full flex items-center justify-center text-white hover:bg-[#2d8a52] transition-colors shadow-sm hover:shadow-md">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                            </svg>
                          </a>
                          {/* YouTube */}
                          <a href="#" className="w-10 h-10 bg-[#1a5632] rounded-full flex items-center justify-center text-white hover:bg-[#2d8a52] transition-colors shadow-sm hover:shadow-md">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                            </svg>
                          </a>
                        </div>
                      ) : (
                        <p className="text-gray-600 whitespace-pre-line">{item.desc}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#1a5632]/10 rounded-xl flex items-center justify-center">
                  <span className="text-xl">✉️</span>
                </div>
                <h3 className="text-2xl font-bold text-[#1a5632]">Kirim Pesan</h3>
              </div>
              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1a5632] focus:ring-2 focus:ring-[#1a5632]/20 outline-none transition-all duration-200 bg-gray-50 focus:bg-white" placeholder="Masukkan nama lengkap" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1a5632] focus:ring-2 focus:ring-[#1a5632]/20 outline-none transition-all duration-200 bg-gray-50 focus:bg-white" placeholder="Masukkan email" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subjek</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1a5632] focus:ring-2 focus:ring-[#1a5632]/20 outline-none transition-all duration-200 bg-gray-50 focus:bg-white">
                    <option>Informasi Pendaftaran</option>
                    <option>Pertanyaan Umum</option>
                    <option>Kerjasama</option>
                    <option>Lainnya</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Pesan</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1a5632] focus:ring-2 focus:ring-[#1a5632]/20 outline-none transition-all duration-200 resize-none bg-gray-50 focus:bg-white" placeholder="Tulis pesan Anda..."></textarea>
                </div>
                <button type="submit" className="w-full bg-[#1a5632] text-white py-4 rounded-xl font-semibold hover:bg-[#2d8a52] transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                  <span>Kirim Pesan</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
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
          <div className="inline-block bg-[#c9a94f]/20 text-[#c9a94f] px-5 py-2.5 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-[#c9a94f]/30">
            🎓 Penerimaan Santri Baru 2024/2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Bergabunglah Bersama Kami
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Wujudkan impian putra-putri Anda untuk menjadi generasi qur&apos;ani yang berakhlak mulia dan berilmu tinggi.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { icon: "📋", title: "Syarat Pendaftaran", desc: "Fotokopi Ijazah, Akta Kelahiran, SKL, Surat Kesehatan" },
              { icon: "📅", title: "Jadwal Pendaftaran", desc: "1 Januari - 30 Juni 2025 atau sampai kuota terpenuhi" },
              { icon: "💰", title: "Biaya Pendidikan", desc: "Terjangkau dengan sistem beasiswa bagi santri berprestasi" },
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white border border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h4 className="font-bold mb-2 text-lg">{item.title}</h4>
                <p className="text-sm text-white/80 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a href="#kontak" className="bg-[#c9a94f] text-[#1a5632] px-8 py-4 rounded-full font-semibold hover:bg-[#d4b85a] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2">
              <span>Daftar Sekarang</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a href="https://wa.me/6281234567890" className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30 flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>Hubungi via WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0d3d1f] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-[#c9a94f] rounded-full flex items-center justify-center shadow-md">
                  <span className="text-[#1a5632] font-bold text-xl">DU</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Darul Ulum Assyar&apos;iyyah</h3>
                  <p className="text-[#c9a94f] text-sm">Pondok Pesantren Unggulan</p>
                </div>
              </div>
              <p className="text-white/70 mb-5 max-w-md leading-relaxed">
                Mendidik generasi muslim yang berakhlak mulia, berilmu, dan beramal shaleh sejak tahun 1999.
              </p>
              <div className="flex gap-3">
                {/* Facebook */}
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#c9a94f] cursor-pointer transition-all duration-300 hover:scale-110">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                {/* Instagram */}
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#c9a94f] cursor-pointer transition-all duration-300 hover:scale-110">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
                {/* YouTube */}
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#c9a94f] cursor-pointer transition-all duration-300 hover:scale-110">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-bold text-lg mb-5">Tautan Cepat</h4>
              <ul className="space-y-3 text-white/70">
                {[
                  { label: "Beranda", href: "#beranda" },
                  { label: "Tentang Kami", href: "#tentang" },
                  { label: "Program", href: "#program" },
                  { label: "Galeri", href: "#galeri" },
                  { label: "Pendaftaran", href: "#pendaftaran" },
                ].map((item, index) => (
                  <li key={index}>
                    <a href={item.href} className="hover:text-[#c9a94f] transition-colors duration-200 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#c9a94f] rounded-full"></span>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-lg mb-5">Kontak Kami</h4>
              <ul className="space-y-4 text-white/70 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-base mt-0.5">📍</span>
                  <span>Desa Leyangan, Ungaran Timur, Kab. Semarang</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-base mt-0.5">📱</span>
                  <span>0812-3456-7890</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-base mt-0.5">✉️</span>
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

      {/* Back to Top Button */}
      <a
        href="#beranda"
        className="fixed bottom-6 right-6 w-12 h-12 bg-[#1a5632] text-white rounded-full shadow-lg hover:bg-[#2d8a52] transition-all duration-300 hover:scale-110 flex items-center justify-center z-40"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </a>
    </main>
  );
}
