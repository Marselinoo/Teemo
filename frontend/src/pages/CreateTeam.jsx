import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/CreateTeam.css";

export default function CreateTeam() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("create");
    const [formData, setFormData] = useState({
        teamName: "",
        teamDescription: "",
        teamCategory: "",
    });

    const [existingTeams] = useState([
        {
            id: 1,
            name: "CodeMasters",
            description: "Tim web development berpengalaman",
            members: 3,
            maxMembers: 5,
            memberList: ["Ahmad Riyadi", "Siti Nurhaliza", "Budi Santoso"],
            competitions: 5,
            wins: 2,
        },
        {
            id: 2,
            name: "AI Innovators",
            description: "Spesialisasi dalam machine learning dan AI",
            members: 2,
            maxMembers: 5,
            memberList: ["Rina Wijaya", "Doni Hermawan"],
            competitions: 3,
            wins: 1,
        },
        {
            id: 3,
            name: "Design Crew",
            description: "Tim UI/UX design kreatif",
            members: 4,
            maxMembers: 5,
            memberList: ["Laila Pertama", "Maya Putri", "Eka Saputra", "Aji Pratama"],
            competitions: 8,
            wins: 3,
        },
    ]);

    const [invitations] = useState([
        {
            id: 1,
            teamName: "Tech Warriors",
            invitedBy: "Raka Maulana",
            role: "Team Lead",
            date: "2 hari yang lalu",
        },
    ]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleCreateTeam = (e) => {
        e.preventDefault();
        if (!formData.teamName || !formData.teamCategory) {
            alert("Nama tim dan kategori harus diisi");
            return;
        }
        alert(`Tim "${formData.teamName}" berhasil dibuat!`);
        setFormData({ teamName: "", teamDescription: "", teamCategory: "" });
    };

    const handleJoinTeam = (teamId) => {
        const team = existingTeams.find((t) => t.id === teamId);
        alert(`Anda telah bergabung dengan tim "${team.name}"`);
    };

    const handleAcceptInvitation = (invId) => {
        alert("Anda telah menerima undangan bergabung dengan tim");
    };

    return (
        <div className="create-team">
            <div className="team-container">
                <div className="team-header">
                    <h1>Kelola Tim Anda</h1>
                    <p>Buat tim baru atau bergabung dengan tim yang sudah ada untuk berkompetisi bersama</p>
                </div>

                <div className="team-tabs">
                    <button className={`tab-btn ${activeTab === "create" ? "active" : ""}`} onClick={() => setActiveTab("create")}>
                        ➕ Buat Tim Baru
                    </button>
                    <button className={`tab-btn ${activeTab === "browse" ? "active" : ""}`} onClick={() => setActiveTab("browse")}>
                        🔍 Jelajahi Tim ({existingTeams.length})
                    </button>
                    <button className={`tab-btn ${activeTab === "invitations" ? "active" : ""}`} onClick={() => setActiveTab("invitations")}>
                        💌 Undangan ({invitations.length})
                    </button>
                </div>

                <div className="team-content">
                    {activeTab === "create" && (
                        <section className="team-section">
                            <div className="form-container">
                                <h2>📝 Buat Tim Baru</h2>
                                <form onSubmit={handleCreateTeam} className="create-team-form">
                                    <div className="form-group">
                                        <label htmlFor="teamName">Nama Tim *</label>
                                        <input type="text" id="teamName" name="teamName" placeholder="Contoh: Code Legends" value={formData.teamName} onChange={handleInputChange} maxLength="50" />
                                        <small>{formData.teamName.length}/50 karakter</small>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="teamDescription">Deskripsi Tim</label>
                                        <textarea id="teamDescription" name="teamDescription" placeholder="Jelaskan tentang tim Anda, spesialisasi, dan visi..." value={formData.teamDescription} onChange={handleInputChange} rows="4" maxLength="300" />
                                        <small>{formData.teamDescription.length}/300 karakter</small>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="teamCategory">Kategori Utama *</label>
                                        <select id="teamCategory" name="teamCategory" value={formData.teamCategory} onChange={handleInputChange}>
                                            <option value="">-- Pilih Kategori --</option>
                                            <option value="ai">Artificial Intelligence</option>
                                            <option value="web">Web Development</option>
                                            <option value="mobile">Mobile Development</option>
                                            <option value="design">UI/UX Design</option>
                                            <option value="security">Cybersecurity</option>
                                            <option value="data">Data Science</option>
                                        </select>
                                    </div>

                                    <div className="form-info">
                                        <p>💡 Informasi:</p>
                                        <ul>
                                            <li>Tim dapat memiliki maksimal 5 anggota</li>
                                            <li>Anda akan menjadi tim leader</li>
                                            <li>Dapat mengundang anggota setelah tim dibuat</li>
                                            <li>Anggota dapat menerima atau menolak undangan</li>
                                        </ul>
                                    </div>

                                    <button type="submit" className="submit-btn">
                                        Buat Tim
                                    </button>
                                </form>
                            </div>
                        </section>
                    )}

                    {activeTab === "browse" && (
                        <section className="team-section">
                            <h2>🔍 Tim yang Tersedia</h2>
                            <div className="teams-grid">
                                {existingTeams.map((team) => (
                                    <div key={team.id} className="team-card">
                                        <div className="team-card-header">
                                            <h3>{team.name}</h3>
                                            <span className="team-capacity">
                                                👥 {team.members}/{team.maxMembers}
                                            </span>
                                        </div>

                                        <p className="team-description">{team.description}</p>

                                        <div className="team-stats">
                                            <div className="stat">
                                                <span>🏆</span>
                                                <span>{team.wins} Kemenangan</span>
                                            </div>
                                            <div className="stat">
                                                <span>⚔️</span>
                                                <span>{team.competitions} Kompetisi</span>
                                            </div>
                                        </div>

                                        <div className="team-members">
                                            <p className="members-label">Anggota:</p>
                                            <div className="members-list">
                                                {team.memberList.map((member, idx) => (
                                                    <span key={idx} className="member-badge">
                                                        {member}
                                                    </span>
                                                ))}
                                                {team.members < team.maxMembers && <span className="member-slot-open">+{team.maxMembers - team.members} slot kosong</span>}
                                            </div>
                                        </div>

                                        <button className="join-team-btn" onClick={() => handleJoinTeam(team.id)} disabled={team.members >= team.maxMembers}>
                                            {team.members >= team.maxMembers ? "❌ Tim Penuh" : "✓ Minta Bergabung"}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {activeTab === "invitations" && (
                        <section className="team-section">
                            <h2>💌 Undangan Bergabung</h2>
                            {invitations.length > 0 ? (
                                <div className="invitations-list">
                                    {invitations.map((inv) => (
                                        <div key={inv.id} className="invitation-card">
                                            <div className="invitation-header">
                                                <h3>Undangan dari {inv.invitedBy}</h3>
                                                <span className="invitation-date">{inv.date}</span>
                                            </div>

                                            <div className="invitation-details">
                                                <p>
                                                    <strong>Tim:</strong> {inv.teamName}
                                                </p>
                                                <p>
                                                    <strong>Role:</strong> {inv.role}
                                                </p>
                                            </div>

                                            <div className="invitation-actions">
                                                <button className="accept-btn" onClick={() => handleAcceptInvitation(inv.id)}>
                                                    ✓ Terima
                                                </button>
                                                <button className="decline-btn">✕ Tolak</button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="no-invitations">
                                    <p>Anda tidak memiliki undangan saat ini</p>
                                </div>
                            )}
                        </section>
                    )}
                </div>
            </div>
        </div>
    );
}
