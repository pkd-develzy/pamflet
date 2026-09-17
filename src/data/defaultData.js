export const DEFAULT_POSTER_DATA = {
  // Wilayah & Kop
  inputNamaDesa: 'KALISALAK',
  inputKecamatan: 'MARGASARI',
  inputKabupaten: 'TEGAL',
  inputProvinsi: 'JAWA TENGAH',
  inputPeriode: '2026 - 2032',
  inputTahun: '2026',
  
  // Banner Hari-H & Info Pemilihan
  inputHariTanggal: 'FEBRUARI 2027',
  inputWaktuTPS: 'Pukul 07.00 WIB - SELESAI',
  inputTempatTPS: 'Lapangan Desa Kalisalak',
  inputHotline: '0878-3018-8452 / 0857-8635-5600',
  inputWebsiteUrl: 'https://kalisalak-tegal.desa.id/pilkades',
  
  // Posko Sekretariat & Informasi (Editable & Multiline)
  poskoAlamat: 'Alamat Sekretariat: Balai Desa KALISALAK, Kec. MARGASARI, Kab. TEGAL.',
  poskoSyarat: 'Syarat Mencoblos: Membawa Surat Undangan (C6) & e-KTP / KK Asli.',
  poskoKontak: 'KONTAK PERSON:\n0878-3018-8452\n0857-8635-5600',
  poskoSpacing: 8,
  
  // Panitia Penandatangan
  inputPelindung: 'Bupati Tegal / Camat Margasari',
  inputPenanggungJawab: 'Ketua BPD Desa Kalisalak',
  inputKetuaPanitia: 'Khasanudin, S.Pd.SD',
  inputSekretaris: 'Mashady, M.H.',
  inputBendahara: 'Ali Nurhakim, S.Pd',
  inputSeksiDaftar: 'M. Lu’lu Khulaluddin, S.F.U',
  inputSeksiJaring: 'Hero Budiadi',
  inputSeksiSaring: 'Urip',
  inputSeksiHitung: 'Wihadi',
  inputSeksiAman: 'Topik Santoso',
  inputSeksiLengkap: 'Mohamad Khumaidi, S.Pd.I',
  inputTglPenetapan: 'November 2026',
  inputLokasiPenetapan: 'Kalisalak',
  inputNomorSurat: '141.1 / 01 / PAN.PILKADES / 2026',

  // Logos & Images
  logoPemdaUrl: '/images/logo_kabupaten_tegal.png',
  logoPilkadesUrl: '/images/logo_pilkades_kalisalak.png',
  stempelPanitiaUrl: '/images/stempel_panitia_kalisalak_transparan.png',
  qrCodeUrl: '/images/qrcode_website_pilkades.png',
  qrWa1Url: '/images/qr_wa_0878_navy.png',
  qrWa2Url: '/images/qr_wa_0857_navy.png',

  // Stempel Settings
  stampVisible: true,
  stampScale: 0.95,
  stampPosition: { x: 35, y: -20 },

  // 4 Jadwal Blocks Data (Matching Official Poster in Screenshot)
  tahapanPencalonan: [
    {
      no: '1',
      kegiatan: {
        title: 'Pengumuman Pendaftaran kepada Masyarakat',
        sublist: [
          'a. Dibukanya pendaftaran bakal calon Kepala Desa',
          'b. Syarat-syarat bakal calon Kepala Desa',
          'c. Tempat & waktu pendaftaran',
          'd. Tahapan/jadwal proses Pilkades',
          'e. Ketentuan jika pelamar 0, 1, atau > 5 orang'
        ]
      },
      waktu: 'November 2026'
    },
    { no: '2', kegiatan: 'Pendaftaran & Penerimaan Berkas Bakal Calon', waktu: 'November 2026' },
    { no: '3', kegiatan: 'Perpanjangan Pendaftaran (jika diperlukan)', waktu: 'November – Desember 2026' },
    { no: '4', kegiatan: 'Perpanjangan Pendaftaran II (jika tidak ada pendaftar)', waktu: 'Desember 2026' },
    { no: '5', kegiatan: 'Verifikasi & Validasi Berkas Persyaratan', waktu: 'Desember 2026 – Januari 2027' },
    { no: '6', kegiatan: 'Seleksi Tambahan (jika diperlukan)', waktu: 'Januari 2027' },
    { no: '7', kegiatan: 'Musyawarah Panitia & BPD (jika diperlukan)', waktu: 'Januari 2027' },
    { no: '8', kegiatan: 'Penetapan Bakal Calon menjadi Calon Kades', waktu: 'Januari 2027' },
    { no: '9', kegiatan: 'Pengumuman Calon Kades Berhak Ikut Pilkades', waktu: 'Januari 2027' },
    { no: '10', kegiatan: 'Pengumuman / Undangan Pemilih oleh Panitia', waktu: 'Januari 2027' }
  ],

  tahapanPendataan: [
    { no: '1', kegiatan: 'Pendataan Penduduk Desa (Daftar Pemilih)', waktu: 'Desember 2026' },
    { no: '2', kegiatan: 'Penetapan Daftar Pemilih Sementara (DPS)', waktu: 'Desember 2026' },
    { no: '3', kegiatan: 'Pengumuman DPS kepada Masyarakat', waktu: 'Desember 2026' },
    { no: '4', kegiatan: 'Validasi & Perbaikan DPS (DPT tambahan/DPTb)', waktu: 'Desember 2026' },
    { no: '5', kegiatan: 'Penyusunan DPT tambahan', waktu: 'Desember 2026' },
    { no: '6', kegiatan: 'Pengumuman DPT tambahan kepada Masyarakat', waktu: 'Desember 2026' },
    { no: '7', kegiatan: 'Penetapan Daftar Pemilih Tetap (DPT)', waktu: 'Desember 2026' },
    { no: '8', kegiatan: 'Pengumuman DPT di Setiap RT / RW', waktu: 'Desember 2026' }
  ],

  tahapanKampanye: [
    { no: '1', kegiatan: 'Pengundian Nomor Urut Calon Kades', waktu: 'Januari 2027' },
    { no: '2', kegiatan: 'Pelaksanaan Kampanye Calon Kades', waktu: 'Januari 2027' },
    { no: '3', kegiatan: 'Masa Tenang (Steril Alat Peraga & Kampanye)', waktu: 'Januari – Februari 2027' }
  ],

  tahapanPemungutan: [
    { no: '1', kegiatan: 'Pemungutan & Perhitungan Suara di TPS', waktu: 'Februari 2027' },
    { no: '2', kegiatan: 'Penetapan Calon Kades Terpilih', waktu: 'Februari 2027' }
  ],

  // 13 Langkah Pemungutan Suara
  alurSteps: [
    { no: 1, title: 'Tiba di TPS', desc: 'Pemilih hadir di TPS pukul 07.00 - 13.00 WIB membawa KTP-el & Formulir Model C6' },
    { no: 2, title: 'Meja Pendaftaran', desc: 'Menyerahkan surat undangan Model C6 dan KTP-el kepada petugas KPPS 4 & 5' },
    { no: 3, title: 'Cek Status DPT', desc: 'Petugas mencocokkan nama di buku DPT dan memberi tanda hadir' },
    { no: 4, title: 'Menunggu Antrean', desc: 'Duduk di kursi antrean yang disediakan dengan tertib dan tenang' },
    { no: 5, title: 'Panggilan KPPS', desc: 'Menerima surat suara yang telah ditandatangani Ketua KPPS di hadapan saksi' },
    { no: 6, title: 'Cek Surat Suara', desc: 'Buka dan periksa surat suara. Bila rusak/cacat, minta ganti baru (maks 1x)' },
    { no: 7, title: 'Bilik Suara (Coblos)', desc: 'Coblos 1 kali pada foto/nama/nomor urut calon menggunakan paku yang disediakan' },
    { no: 8, title: 'Lipat Surat Suara', desc: 'Lipat kembali surat suara sesuai garis lipatan awal secara rapi' },
    { no: 9, title: 'Kotak Suara', desc: 'Masukkan surat suara ke dalam kotak suara disaksikan oleh petugas KPPS 6' },
    { no: 10, title: 'Pencelupan Tinta', desc: 'Celupkan salah satu jari tangan hingga mengenai kuku ke botol tinta khusus' },
    { no: 11, title: 'Pintu Keluar', desc: 'Meninggalkan area TPS melalui pintu keluar yang telah ditentukan' },
    { no: 12, title: 'Daftar Pemilih Khusus', desc: 'Warga setempat belum terdaftar DPT dapat memilih pk. 12.00-13.00 WIB dg KTP' },
    { no: 13, title: 'Pelayanan Ramah', desc: 'Lansia, disabilitas & ibu hamil mendapat prioritas pelayanan dan pendampingan' }
  ]
};

// Exact layout matching the user's reference image
export const INITIAL_LAYOUT = {
  leftColumn: ['blockPencalonan', 'blockPendataan'],
  rightColumn: ['blockKampanye', 'blockPemungutan', 'blockQR']
};

export const INITIAL_SCALES = {
  blockPencalonan: 1.0,
  blockPemungutan: 1.0,
  blockPendataan: 1.0,
  blockKampanye: 1.0,
  blockQR: 1.0
};

export const INITIAL_HEIGHT_WEIGHTS = {
  blockPencalonan: 1.35,
  blockPendataan: 1.0,
  blockKampanye: 0.65,
  blockPemungutan: 0.55,
  blockQR: 1.35
};
