function PostStats({ likes = 0, comments = 0 }) {
  return (
    <div className="flex items-center justify-between text-sm text-gray-500">
      
      {/* Likes */}
      <div className="flex items-center gap-1">
        <span>👍</span>
        <span>{likes}</span>
      </div>

      {/* Comments */}
      <div className="flex items-center gap-1">
        <span>💬</span>
        <span>{comments} komentar</span>
      </div>

    </div>
  );
}

export default PostStats;