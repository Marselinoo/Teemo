import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-6">
      
      {/* Code */}
      <h1 className="text-6xl font-extrabold text-purple-600">404</h1>

      {/* Title */}
      <h2 className="mt-4 text-2xl font-semibold text-gray-800">
        Halaman Tidak Ditemukan
      </h2>

      {/* Description */}
      <p className="mt-2 text-gray-500 max-w-md">
        Maaf, halaman yang kamu cari tidak tersedia atau sudah dipindahkan.
      </p>

      {/* Button */}
      <button
        onClick={() => navigate("/")}
        className="mt-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full shadow-md hover:opacity-90 transition"
      >
        Kembali ke Beranda
      </button>
    </div>
  );
}

export default NotFoundPage;