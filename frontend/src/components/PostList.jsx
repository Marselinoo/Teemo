import PostCard from "./PostCard";

function PostList({ posts = [], loading = false }) {
  // Loading state
  if (loading) {
    return (
      <div className="space-y-6">
        <p className="text-center text-gray-500">Loading posts...</p>
      </div>
    );
  }

  // Empty state
  if (posts.length === 0) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-md border text-center text-gray-500">
        Belum ada postingan.
      </div>
    );
  }

  // Normal render
  return (
    <section>
      <div className="space-y-6">
        {posts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </section>
  );
}

export default PostList;