import slider_1 from "../assets/SliderIMG/slide-1.jpg";
import slider_2 from "../assets/SliderIMG/slider-2.jpg";
import slider_3 from "../assets/SliderIMG/slider-3.jpg";
import slider_4 from "../assets/SliderIMG/download (35).jpg";
import slider_5 from "../assets/SliderIMG/download (36).jpg";
import menuIcon_1 from "../assets/menuIMG/menu-icon-1.jpg";
import menuIcon_2 from "../assets/menuIMG/menu-icon-2.png";
import menuIcon_3 from "../assets/menuIMG/menu-icon-3.jpg";
import social1 from "../assets/footerIMG/Vector.jpg";
import social2 from "../assets/footerIMG/social2.png";
import social3 from "../assets/footerIMG/social3.jpg";
import social4 from "../assets/footerIMG/social4.jpg";
import social5 from "../assets/footerIMG/social5.jpg";

export const dataSlider = [
  {
    img: slider_1,
  },
  {
    img: slider_2,
  },
  {
    img: slider_3,
  },
  // {
  //   img:slider_4
  // },
  // {
  //   img:slider_5
  // },
];

export const dataMenu = [
  {
    img: menuIcon_1,
    title: "Panjar Biaya Perkara",
    link: "panjar",
  },
  {
    img: menuIcon_2,
    title: "Syarat Berperkara",
    link: "syarat-berperkara",
  },
  {
    img: menuIcon_3,
    title: "Chat Online",
    link: "panjar",
  },
];

export const dataVideo = [
  {
    link: "https://www.youtube.com/embed/1tPpbaT3nvE",
  },
  {
    link: "https://www.youtube.com/embed/1tPpbaT3nvE",
  },
  {
    link: "https://www.youtube.com/embed/1tPpbaT3nvE",
  },
  {
    link: "https://www.youtube.com/embed/1tPpbaT3nvE",
  },
];

export const dataFooter = [
  { img: social1 },
  { img: social2 },
  { img: social3 },
  { img: social4 },
  { img: social5 },
];

export const dataKecamatan = [
  {
    id: 0,
    radius: 1,
    kecamatan: "Sumedang Utara",
  },

  {
    id: 1,
    radius: 2,
    kecamatan: "Paseh",
  },
  {
    id: 2,
    radius: 4,
    kecamatan: "Tomo",
  },
  {
    id: 3,
    radius: 4,
    kecamatan: "Ganeas",
  },
  {
    id: 4,
    radius: 1,
    kecamatan: "Sumedang Utara",
  },
  {
    id: 5,
    radius: 2,
    kecamatan: "Conggeang",
  },
  {
    id: 6,
    radius: 4,
    kecamatan: "Surian",
  },
  {
    id: 7,
    radius: 2,
    kecamatan: "Tanjung Kerta",
  },
  {
    id: 8,
    radius: 2,
    kecamatan: "Cimalaka",
  },
  {
    id: 9,
    radius: 4,
    kecamatan: "Buah Dua",
  },
  {
    id: 10,
    radius: 4,
    kecamatan: "Tanjung Medar",
  },
  {
    radius: 4,
    kecamatan: "Tanjung Sari",
  },
  {
    id: 11,
    radius: 3,
    kecamatan: "Situraja",
  },
];

export const dataHarga = [
  {
    radius: 1,
    pendaftaran: 30000,
    proses: 75000,
    panggilanPenggugat: 100000,
    panggilanTergugat: 100000,
    redaksi: 10000,
    materai: 10000,
  },
  {
    radius: 2,
    pendaftaran: 30000,
    proses: 75000,
    panggilanPenggugat: 150000,
    panggilanTergugat: 100000,
    redaksi: 10000,
    materai: 10000,
  },
  {
    radius: 3,
    pendaftaran: 30000,
    proses: 75000,
    panggilanPenggugat: 175000,
    panggilanTergugat: 100000,
    redaksi: 10000,
    materai: 10000,
  },
  {
    radius: 4,
    pendaftaran: 30000,
    proses: 75000,
    panggilanPenggugat: 200000,
    panggilanTergugat: 100000,
    redaksi: 10000,
    materai: 10000,
  },
];

export const dataSyarat = [
  {
    id: 1,
    syarat: "Ahli Waris",
    title_1: "SYARAT PENGAJUAN PERMOHONAN PENETAPAN AHLI WARIS",
    syarat_list: [
      "Membuat Surat Permohonan (disertai softcopy berformat file .rtf jika dibuat diluar POSBAKUM PA Sumber).",
      "Fotokopi KTP Para Pemohon 1 lembar",
      "Fotokopi Kartu Keluarga Para Pemohon lembar",
      "Fotokopi Akte Lahir Para Pemohon 1 lembar",
      "Fotokopi Buku Nikah / Akta Cerai Pewaris lembar",
      "Fotokopi Kartu Keluarga Pewaris 1 lembar",
      "Fotokopi Surat Kematian Pewaris 1 lembar",
      "Fotokopi Surat Keterangan Ahli Waris dari kelurahan/desa diketahui kecamatan 1 lembar",
      "Bagan Silsilah Keluarga 1 Lembar",
      "Fotokopi Kartu Identitas Pensiun (Kalau Ada)",
      "Fotokopi Buku Tabungan Bank / Fotokopi Sertifikat Tanah atau Rumah 1 lembar",
      "Fotokopi Akta/Surat Keterangan Kematian",
      "Membayar panjar biaya perkara.",
    ],
    catatan: [
      "Persyaratan asli dibawa saat persidangan.",
      "Persyaratan alat bukti dileges (diberi materai Rp. 10.000,- dan dicap POS)",
    ],
  },
  {
    id: 0,
    syarat: "cerai-talak",
    title_1: "SYARAT PENGAJUAN GUGATAN TALAK (DIAJUKAN SUAMI)",
    syarat_list: [
      "Membuat Surat permohonan (disertai softcopy berformat file .rtf jika dibuat diluar POSBAKUM PA Sumber).",
      "Asli Buku Nikah / Duplikat Kutipan Akta Nikah.",
      "Fotokopi Buku Nikah/ Duplikat (diberi materi dan cap POS).",
      "Fotokopi KTP Pemohon (diberi materi dan cap POS).",
      "Surat Domisili dari Kelurahan apabila sudah pindah dari alamat sesuai KTP",
      "Surat Keterangan Ghoib dari Desa/Kelurahan apabila Termohon tidak diketahui alamatnya di dalam atau di luar wilayah Negara Kesatuan Republik Indonesia.",
      "Surat Ijin Atasan (bagi PNS / TNI / POLRI)",
      "Membayar panjar biaya perkara.",
    ],
    title_2:
      "SYARAT TAMBAHAN UNTUK PENGAJUAN PRODEO / BERPERKARA SECARA CUMA-CUMA",
    syarat_list2: [
      " Asli Surat Keterangan Tidak Mampu dari Kelurahan/Desa yang diketahui oleh Camat",
      "Fotokopi Kartu Keluarga Miskin (KKM)/ Kartu Masyarakat Jaminan Kesehatan (JAMKESMAS) /Kartu Beras Miskin (RASKIN)/Kartu Program Keluraga Harapan (PKH)/Kartu Bantuan Langsung Tunai (BLT) Kartu Perlindungan Sosial (KPS) 1 Lembar",
    ],
    catatan: [
      "Persyaratan asli dibawa saat persidangan.",
      "Persyaratan alat bukti dileges (diberi materai Rp. 10.000,- dan dicap POS)",
    ],
  },
  {
    id: 0,
    syarat: "cerai-talak",
    title_1: "SYARAT PENGAJUAN GUGATAN TALAK (DIAJUKAN SUAMI)",
    syarat_list: [
      "Membuat Surat permohonan (disertai softcopy berformat file .rtf jika dibuat diluar POSBAKUM PA Sumber).",
      "Asli Buku Nikah / Duplikat Kutipan Akta Nikah.",
      "Fotokopi Buku Nikah/ Duplikat (diberi materi dan cap POS).",
      "Fotokopi KTP Pemohon (diberi materi dan cap POS).",
      "Surat Domisili dari Kelurahan apabila sudah pindah dari alamat sesuai KTP",
      "Surat Keterangan Ghoib dari Desa/Kelurahan apabila Termohon tidak diketahui alamatnya di dalam atau di luar wilayah Negara Kesatuan Republik Indonesia.",
      "Surat Ijin Atasan (bagi PNS / TNI / POLRI)",
      "Membayar panjar biaya perkara.",
    ],
    title_2:
      "SYARAT TAMBAHAN UNTUK PENGAJUAN PRODEO / BERPERKARA SECARA CUMA-CUMA",
    syarat_list2: [
      " Asli Surat Keterangan Tidak Mampu dari Kelurahan/Desa yang diketahui oleh Camat",
      "Fotokopi Kartu Keluarga Miskin (KKM)/ Kartu Masyarakat Jaminan Kesehatan (JAMKESMAS) /Kartu Beras Miskin (RASKIN)/Kartu Program Keluraga Harapan (PKH)/Kartu Bantuan Langsung Tunai (BLT) Kartu Perlindungan Sosial (KPS) 1 Lembar",
    ],
    catatan: [
      "Persyaratan asli dibawa saat persidangan.",
      "Persyaratan alat bukti dileges (diberi materai Rp. 10.000,- dan dicap POS)",
    ],
  },
];
