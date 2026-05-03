function formatTime(date) {
  const now = new Date();
  const postTime = new Date(date);
  const diff = Math.floor((now - postTime) / 1000);

  if (diff < 60) return "Baru saja";
  if (diff < 3600) return `${Math.floor(diff / 60)} menit yang lalu`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} jam yang lalu`;

  return `${Math.floor(diff / 86400)} hari yang lalu`;
}

function PostHeader({ user, createdAt }) {
  return (
    <div className="flex items-center justify-between">
      
      {/* LEFT: User Info */}
      <div className="flex items-center gap-3">
        
        {/* Avatar */}
        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-lg overflow-hidden">
          {user?.avatar ? (
            <img
              src={user.avatar}
              alt={user.name}
              className="w-full h-full object-cover"
            />
          ) : (
            "🙂"
          )}
        </div>

        {/* Name + Role + Time */}
        <div>
          <h3 className="font-semibold text-sm text-gray-800">
            {user?.name || "Unknown"}
          </h3>

          <p className="text-xs text-gray-500">
            {user?.role || "No role"}
          </p>

          {createdAt && (
            <p className="text-xs text-gray-400">
              {formatTime(createdAt)}
            </p>
          )}
        </div>

      </div>

      {/* RIGHT: More */}
      <button className="text-gray-400 hover:text-gray-600 text-lg">
        ⋯
      </button>

    </div>
  );
}

export default PostHeader;