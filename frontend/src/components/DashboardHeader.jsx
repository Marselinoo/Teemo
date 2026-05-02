function DashboardHeader({ name = "User" }) {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-indigo-500 text-white py-20 text-center relative">
      
      {/* Content */}
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-2xl md:text-3xl font-bold">
          Selamat datang kembali, {name}! 👋
        </h1>

        <p className="mt-3 text-white/80">
          Berikut adalah ringkasan progres dan aktivitas Anda hari ini.
        </p>
      </div>

      {/* Bottom blur effect (optional biar smooth ke section bawah) */}
      {/* <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-b from-transparent to-gray-100"></div> */}
    </div>
  );
}

export default DashboardHeader;