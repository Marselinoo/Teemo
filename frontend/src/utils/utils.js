export const dummyPosts = [
  {
    _id: "1",
    user: {
      name: "Raisa Pratama",
      role: "Product Designer",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    text: `Hai tim! Saya baru sajasadk asdenyelesaikan desain fitur baru untuk dashboard analitik. Silakan beri masukan.`,
    likes: 18,
    commentsCount: 4,
    likedByUser: false,
    createdAt: "2026-05-01T08:30:00.000Z",
  },
  {
    _id: "2",
    user: {
      name: "Dewa Santoso",
      role: "Frontend Developer",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    text: `Sudah upload artikel baru tentang React 19 hooks dan optimasi rendering. Cek di blog internal ya!`,
    likes: 24,
    commentsCount: 7,
    likedByUser: false,
    createdAt: "2026-05-02T11:15:00.000Z",
  },
  {
    _id: "3",
    user: {
      name: "Maya Kusuma",
      role: "UI/UX Researcher",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
    text: `Hasil survei pengguna untuk flow checkout sudah selesai. Saya sudah tambahkan rekomendasi perbaikan.`,
    likes: 32,
    commentsCount: 10,
    likedByUser: false,
    createdAt: "2026-05-02T14:40:00.000Z",
  },
  {
    _id: "4",
    user: {
      name: "Agus Wijaya",
      role: "Backend Engineer",
      avatar: "https://i.pravatar.cc/150?img=4",
    },
    text: `API baru untuk notifikasi real-time sudah siap diuji. Mohon review endpoint /notifications.`,
    likes: 15,
    commentsCount: 3,
    likedByUser: false,
    createdAt: "2026-05-03T09:00:00.000Z",
  },
  {
    _id: "5",
    user: {
      name: "Nina Sari",
      role: "Community Manager",
      avatar: "https://i.pravatar.cc/150?img=5",
    },
    text: `Reminder: besok jam 10 ada sesi sprint review. Jangan lupa update status di Trello.`,
    likes: 27,
    commentsCount: 5,
    likedByUser: false,
    createdAt: "2026-05-03T12:20:00.000Z",
  },
];

export function getDummyPosts() {
  return [...dummyPosts];
}