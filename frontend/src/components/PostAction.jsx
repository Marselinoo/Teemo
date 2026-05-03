import { useState } from "react";

function PostActions({ initialLiked = false, onLike, onComment, onShare }) {
  const [liked, setLiked] = useState(initialLiked);

  const handleLike = () => {
    setLiked((prev) => !prev);
    onLike?.(!liked); // kirim ke parent (optional)
  };

  return (
    <div className="flex justify-around border-t pt-3 text-sm text-gray-600">
      
      {/* LIKE */}
      <button
        onClick={handleLike}
        className={`flex items-center gap-1 transition ${
          liked ? "text-blue-600 font-medium" : "hover:text-blue-500"
        }`}
      >
        👍 Suka
      </button>

      {/* COMMENT */}
      <button
        onClick={onComment}
        className="flex items-center gap-1 hover:text-blue-500 transition"
      >
        💬 Komentar
      </button>

      {/* SHARE */}
      <button
        onClick={onShare}
        className="flex items-center gap-1 hover:text-blue-500 transition"
      >
        📤 Bagikan
      </button>

    </div>
  );
}

export default PostActions;