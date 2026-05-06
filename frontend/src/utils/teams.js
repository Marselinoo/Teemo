export const teams = [
  {
    id: 1,
    name: "CodeMasters",
    description: "Tim web development berpengalaman dengan fokus pada React dan Node.js",
    members: [
      "Ahmad Riyadi",
      "Siti Nurhaliza",
      "Budi Santoso",
    ],
    maxMembers: 5,
    wins: 2,
    competitions: 5,
    category: "web",
  },
  {
    id: 2,
    name: "AI Innovators",
    description: "Spesialisasi dalam machine learning dan artificial intelligence",
    members: [
      "Rina Wijaya",
      "Doni Hermawan",
    ],
    maxMembers: 5,
    wins: 1,
    competitions: 3,
    category: "ai",
  },
  {
    id: 3,
    name: "UI/UX Squad",
    description: "Tim kreatif yang fokus pada desain user interface dan pengalaman pengguna",
    members: [
      "Clara Putri",
      "Fajar Nugroho",
      "Intan Permata",
      "Reza Saputra",
    ],
    maxMembers: 5,
    wins: 3,
    competitions: 6,
    category: "uiux",
  },
  {
    id: 4,
    name: "Mobile Warriors",
    description: "Developer mobile apps menggunakan Flutter dan React Native",
    members: [
      "Yoga Pratama",
      "Dewi Lestari",
    ],
    maxMembers: 5,
    wins: 0,
    competitions: 2,
    category: "mobile",
  },
];

export function getTeams() {
  return [...teams];
}