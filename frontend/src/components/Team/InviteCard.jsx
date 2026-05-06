export default function InviteCard({ invite }) {
  return (
    <div className="bg-white rounded-xl shadow p-5 space-y-4 border-l-4 border-cyan-400">
      
      {/* Header */}
      <div className="flex justify-between items-center">
        <h3 className="font-semibold">
          Undangan dari {invite.sender}
        </h3>
        <span className="text-sm text-gray-400">
          {invite.time}
        </span>
      </div>

      <hr />

      {/* Info */}
      <div className="text-center space-y-1 text-sm">
        <p>
          <span className="font-semibold">Tim:</span> {invite.team}
        </p>
        <p>
          <span className="font-semibold">Role:</span> {invite.role}
        </p>
      </div>

      <hr />

      {/* Actions */}
      <div className="flex gap-3">
        <button className="flex-1 bg-cyan-500 text-white py-2 rounded-lg">
          ✓ Terima
        </button>
        <button className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg">
          ✕ Tolak
        </button>
      </div>
    </div>
  );
}