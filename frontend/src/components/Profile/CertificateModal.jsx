export default function CertificateModal({ url, onClose }) {
  if (!url) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose} // klik luar = close
    >
      <div
        className="bg-white rounded-xl w-[95%] md:w-[80%] h-[85%] relative shadow-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()} // biar klik dalam tidak close
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-2 border-b">
          <p className="text-sm font-medium text-gray-700">
            Preview Sertifikat
          </p>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black text-lg"
          >
            ✕
          </button>
        </div>

        {/* PDF Viewer */}
        <iframe
          src={url}
          title="Certificate"
          className="w-full h-full"
        />
      </div>
    </div>
  );
}