function PostCard({
  user,
  text,
  likes = 0,
  comments = 0,
  createdAt,
}) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-md border border-gray-200 space-y-4">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-lg">
            🙂
          </div>

          {/* User Info */}
          <div>
            <h3 className="font-semibold text-sm text-gray-800">
              {user?.name}
            </h3>
            <p className="text-xs text-gray-500">
              {user?.role}
            </p>
            {createdAt && (
              <p className="text-xs text-gray-400">
                {new Date(createdAt).toLocaleString()}
              </p>
            )}
          </div>
        </div>

        {/* More button */}
        <button className="text-gray-400 hover:text-gray-600">
          ⋯
        </button>
      </div>

      {/* Content */}
      <div>
        <p className="text-sm text-gray-700 leading-relaxed">
          {text}
        </p>
      </div>

      {/* Stats */}
      <div className="flex gap-4 text-sm text-gray-500">
        <span>👍 {likes}</span>
        <span>💬 {comments}</span>
      </div>

      {/* Actions */}
      <div className="flex justify-around border-t pt-3 text-sm text-gray-600">
        <button className="hover:text-blue-500 transition">
          👍 Suka
        </button>
        <button className="hover:text-blue-500 transition">
          💬 Komentar
        </button>
        <button className="hover:text-blue-500 transition">
          📤 Bagikan
        </button>
      </div>

    </div>
  );
}

export default PostCard;