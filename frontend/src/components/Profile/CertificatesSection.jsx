    import CertificateCard from "./CertificateCard";
    import CertificateModal from "./CertificateModal";
    import { useEffect, useState } from "react";

    export default function CertificatesSection() {
        const [selected, setSelected] = useState(null);
        const [sertificates, setSertificates] = useState([]); // nanti ganti dengan data asli
        // const [loading, setLoading] = useState(true);
        
        const certificates = [
        {
        title: "AI Innovation Summit 2026",
        organizer: "TEEMO",
        date: "Juli 2026",
        type: "competition",
        achievement: "Pemenang",
        category: "Best AI Solution",
        certificateUrl: "/dummy-certificate.pdf",
        },
        {
        title: "Web Development Challenge",
        organizer: "TEEMO",
        date: "Juni 2026",
        type: "competition",
        achievement: "Runner-up",
        category: "Web Development",
        certificateUrl: "/dummy-certificate.pdf",
        },
        {
        title: "UI/UX Bootcamp",
        organizer: "Dicoding",
        date: "2025",
        type: "workshop",
        achievement: "Peserta",
        certificateUrl: "/dummy-certificate.pdf",
        },
    ];
        useEffect(() => {
        // Simulasi fetch data sertifikat
        setTimeout(() => {
            setSertificates(certificates);
            // setLoading(false);
        }, 1000);
        }, []);

    return (
        <>
        <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-blue-900 mb-4">
            🎓 Sertifikat & Penghargaan
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {sertificates.length > 0 ? (
                sertificates.map((item, index) => (
                <CertificateCard
                    key={index}
                    {...item}
                    onOpen={setSelected}
                />
                ))
            ) : (
                <div className="col-span-full text-center text-gray-500 py-10">
                Tidak ada sertifikat
                </div>
            )}
            </div>
        </div>

        {/* Modal */}
        <CertificateModal
            url={selected}
            onClose={() => setSelected(null)}
        />
        </>
    );
    }