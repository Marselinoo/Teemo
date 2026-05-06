import { useState } from "react";
import { useAuth } from "../context/UseAuth";

function CreatePost({ onCreate }) {
  const [text, setText] = useState("");
  const { user } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    const newPost = {
      id: Date.now(),
      text,
      user: {
        name: user?.name || "John Doe",
        role: user?.role || "Frontend Developer",
      },
      likes: 0,
      comments: 0,
      createdAt: new Date(),
    };

    //kirim data post baru ke parent (FeedPage) dengan memnanggil onCreate callback
    onCreate?.(newPost); // kirim ke parent
    setText(""); // reset input
  };

  return (
    <div className="bg-white p-5 rounded-xl shadow-md border border-gray-200 mb-16">
      
      {/* Input */}
      <form onSubmit={handleSubmit}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Bagikan sesuatu dengan jaringan Anda..."
          className="w-full resize-none p-3 rounded-lg border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500"
          rows={3}
        />

        {/* Actions */}
        <div className="flex justify-between items-center mt-4">
          
          {/* Media buttons */}
          <div className="flex gap-4 text-sm text-gray-600">
            <button type="button" className="hover:text-blue-500">
              📷 Foto
            </button>
            <button type="button" className="hover:text-blue-500">
              🎥 Video
            </button>
            <button type="button" className="hover:text-blue-500">
              ✏️ Artikel
            </button>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
          >
            Post
          </button>

        </div>
      </form>

    </div>
  );
}

export default CreatePost;