export default function BioCard({
  bio = "Saya adalah seorang FullStack Developer dengan pengalaman lebih dari 5 tahun dalam mengembangkan aplikasi web modern. Saya memiliki passion dalam menciptakan user experience yang luar biasa dan solusi teknologi yang inovatif. Selalu antusias untuk belajar teknologi baru dan berkolaborasi dalam tim yang dinamis.",
}) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      
      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-800">
        Tentang Saya
      </h2>

      {/* Divider */}
      <div className="h-px bg-gray-100 my-3" />

      {/* Content */}
      <p className="text-sm text-gray-600 leading-relaxed">
        {bio}
      </p>
    </div>
  );
}