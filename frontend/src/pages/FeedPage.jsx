import { useState } from "react";
import CreatePost from "../components/CreatePost";
import PostList from "../components/PostList";
import { getDummyPosts } from "../utils/utils";
import Navbar from "../components/Navbar";

export default function FeedPage() {
    const [posts, setPosts] = useState(() => getDummyPosts());
    const [loading] = useState(false);

    // Handler untuk membuat post baru
    const handleCreatePost = (newPost) => {
        setPosts((prev) => [newPost, ...prev]);
    }

    return (
        <>
            <Navbar user={{ name: "John Doe" }} onLogout={() => alert("Logout")} />
            <div className="max-w-3xl mx-auto px-6 my-8">
                <CreatePost onCreate={handleCreatePost} />
                <PostList posts={posts} loading={loading} />
            </div>
        </>
    )

}