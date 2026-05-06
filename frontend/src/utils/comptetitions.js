const competitions = [
  {
    id: 1,
    title: "AI Innovation Summit 2026",
    category: "Artificial Intelligence",
    description:
      "Bangun solusi AI yang membantu tim belajar, berkolaborasi, dan mengambil keputusan dengan lebih cepat.",
    image:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80",
    status: "Terbuka",
    accentColor: "#2563eb",
    participants: "4.520 Peserta",
    price: "Rp 500.000.000",
    deadline: "15 Mei 2026",
    startDate: "1 Juni 2026",
    tags: ["Artificial Intelligence"],

    timelines: [
      {
        date: "1 April 2026",
        title: "Pembukaan Pendaftaran",
      },
      {
        date: "15 Mei 2026",
        title: "Deadline Pendaftaran",
      },
      {
        date: "1 Juni 2026",
        title: "Kompetisi Dimulai",
      },
    ],

    requirements: [
      "Berusia minimal 18 tahun",
      "Memiliki pengetahuan dasar Machine Learning",
      "Maksimal 5 anggota tim",
    ],

    prizes: [
      {
        title: "Juara 1",
        price: "Rp 300.000.000",
        description:
          "Sertifikat + mentoring eksklusif.",
      },
    ],

    rules: [
      "Karya wajib orisinal.",
      "Keputusan juri bersifat mutlak.",
    ],

    faqs: [
      {
        question: "Apakah kompetisi gratis?",
        answer:
          "Ya, kompetisi ini gratis.",
      },
    ],
  },

  {
    id: 2,
    title: "Web Development Challenge",
    category: "Web Development",
    description:
      "Rancang aplikasi web responsif modern dengan UX yang optimal.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=80",
    status: "Terbuka",
    accentColor: "#0891b2",
    participants: "3.280 Peserta",
    price: "Rp 300.000.000",
    deadline: "20 Mei 2026",
    startDate: "5 Juni 2026",
    tags: ["Web Development"],

    timelines: [
      {
        date: "10 April 2026",
        title: "Pendaftaran Dibuka",
      },
    ],

    requirements: [
      "Menguasai React atau Vue",
      "Aplikasi wajib responsive",
    ],

    prizes: [
      {
        title: "Juara 1",
        price: "Rp 180.000.000",
        description:
          "Sertifikat + internship.",
      },
    ],

    rules: [
      "Source code wajib dikumpulkan.",
    ],

    faqs: [
      {
        question: "Boleh pakai framework?",
        answer:
          "Ya, diperbolehkan.",
      },
    ],
  },

  {
    id: 3,
    title: "Mobile App Hackathon",
    category: "Mobile Development",
    description:
      "Bangun aplikasi mobile inovatif dalam waktu 48 jam.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80",
    status: "Terbuka",
    accentColor: "#7c3aed",
    participants: "2.150 Peserta",
    price: "Rp 200.000.000",
    deadline: "25 Mei 2026",
    startDate: "10 Juni 2026",
    tags: ["Mobile Development"],

    timelines: [
      {
        date: "15 April 2026",
        title: "Registrasi Dibuka",
      },
    ],

    requirements: [
      "Menguasai Flutter atau Kotlin",
      "Maksimal 4 anggota",
    ],

    prizes: [
      {
        title: "Juara 1",
        price: "Rp 120.000.000",
        description:
          "Pendanaan startup + sertifikat.",
      },
    ],

    rules: [
      "Aplikasi harus original.",
    ],

    faqs: [
      {
        question: "Apakah hybrid app diperbolehkan?",
        answer:
          "Ya, Flutter dan React Native diperbolehkan.",
      },
    ],
  },

  {
    id: 4,
    title: "Cyber Security CTF 2026",
    category: "Cybersecurity",
    description:
      "Uji kemampuan keamanan siber melalui tantangan Capture The Flag.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80",
    status: "Terbuka",
    accentColor: "#059669",
    participants: "980 Peserta",
    price: "Rp 100.000.000",
    deadline: "5 Juni 2026",
    startDate: "20 Juni 2026",
    tags: ["Cybersecurity"],

    timelines: [
      {
        date: "1 Mei 2026",
        title: "Pendaftaran",
      },
    ],

    requirements: [
      "Memahami dasar networking",
      "Memiliki laptop pribadi",
    ],

    prizes: [
      {
        title: "Juara 1",
        price: "Rp 70.000.000",
        description:
          "Voucher sertifikasi keamanan.",
      },
    ],

    rules: [
      "Tidak boleh menyerang sistem luar.",
    ],

    faqs: [
      {
        question: "Apakah beginner boleh ikut?",
        answer:
          "Ya, tersedia kategori beginner.",
      },
    ],
  },

  {
    id: 5,
    title: "Data Analytics Challenge",
    category: "Data Science",
    description:
      "Analisis dataset nyata dan temukan insight yang berdampak.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    status: "Terbuka",
    accentColor: "#d97706",
    participants: "2.430 Peserta",
    price: "Rp 250.000.000",
    deadline: "10 Juni 2026",
    startDate: "25 Juni 2026",
    tags: ["Data Science"],

    timelines: [
      {
        date: "5 Mei 2026",
        title: "Registrasi",
      },
    ],

    requirements: [
      "Menguasai Python dasar",
      "Memahami data visualization",
    ],

    prizes: [
      {
        title: "Juara 1",
        price: "Rp 150.000.000",
        description:
          "Kesempatan magang data analyst.",
      },
    ],

    rules: [
      "Dataset tidak boleh dibagikan keluar.",
    ],

    faqs: [
      {
        question: "Apakah wajib machine learning?",
        answer:
          "Tidak wajib, tetapi disarankan.",
      },
    ],
  },

  {
    id: 6,
    title: "UI/UX Design Sprint",
    category: "UI/UX Design",
    description:
      "Desain pengalaman pengguna modern untuk aplikasi digital masa depan.",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&q=80",
    status: "Terbuka",
    accentColor: "#db2777",
    participants: "1.890 Peserta",
    price: "Rp 150.000.000",
    deadline: "30 Mei 2026",
    startDate: "15 Juni 2026",
    tags: ["UI/UX Design"],

    timelines: [
      {
        date: "20 April 2026",
        title: "Open Registration",
      },
    ],

    requirements: [
      "Menguasai Figma",
      "Portofolio design diperlukan",
    ],

    prizes: [
      {
        title: "Juara 1",
        price: "Rp 100.000.000",
        description:
          "Mentoring bersama senior designer.",
      },
    ],

    rules: [
      "Design harus original.",
    ],

    faqs: [
      {
        question: "Apakah boleh tim?",
        answer:
          "Ya, maksimal 3 orang.",
      },
    ],
  },
];

export default function getCompetitions() {
  return [...competitions];
}