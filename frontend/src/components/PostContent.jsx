function PostContent({ text, image }) {
  return (
    <div className="space-y-3">
      
      {/* Text */}
      {text && (
        <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
          {text}
        </p>
      )}

      {/* Image (optional) */}
      {image && (
        <div className="rounded-xl overflow-hidden border">
          <img
            src={image}
            alt="post"
            className="w-full object-cover max-h-[400px]"
          />
        </div>
      )}

    </div>
  );
}

export default PostContent;