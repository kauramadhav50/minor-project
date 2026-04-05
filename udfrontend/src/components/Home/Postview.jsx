import React, { useEffect, useState } from "react";
import { MdPublic } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import { BiRepost, BiLike } from "react-icons/bi";
import { FaRegCommentDots } from "react-icons/fa";

const Postview = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // const API_URL = "http://127.0.0.1:8000/api/posts/";

  //  useEffect(() => {
  //   fetchPosts();
  //  },
  //  []);

  const API_URL = "https://drshfwkr-8000.inc1.devtunnels.ms/api/posts/";
  const BASE_URL = "https://drshfwkr-8000.inc1.devtunnels.ms";

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log("API Data:", data);
      setPosts(data.results || data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  // 🔥 Helper function to handle image URLs correctly
  // const getFullImageUrl = (imagePath) => {
  //   if (!imagePath) return null;
  //   if (imagePath.startsWith("http")) {
  //     return imagePath;
  //   }
  //   return `http://127.0.0.1:8000${imagePath}`;
  // };

  const getFullImageUrl = (imagePath) => {
    if (!imagePath) return null;

    imagePath = imagePath.trim();

    // ✅ Fix localhost URL from backend
    if (imagePath.includes("localhost:8000")) {
      return imagePath.replace("http://localhost:8000", BASE_URL);
    }

    // Already correct full URL
    if (imagePath.startsWith("http")) {
      return imagePath;
    }

    // Relative path (/media/...)
    if (imagePath.startsWith("/media")) {
      return `${BASE_URL}${imagePath}`;
    }

    // Relative path (media/...)
    if (imagePath.startsWith("media")) {
      return `${BASE_URL}/${imagePath}`;
    }

    return null;
  };

  const formatDate = (date) => {
    const d = new Date(date);
    return d.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
    });
  };

  if (loading) return <div className="text-center py-10">Loading Feed...</div>;

  return (
    <div className="bg-[#f3f2ef] min-h-screen">
      {posts.map((post) => {
        const imageUrl = getFullImageUrl(post.image);

        return (
          <div
            key={post.id}
            className="bg-white border border-gray-300 w-full max-w-[600px] mx-auto rounded-md shadow-sm mb-5 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-start gap-3 p-3">
              <img
                src={getFullImageUrl(post.profile_pic) || "/logo.png"}
                alt="profile"
                className="w-12 h-12 rounded-full object-cover border"
                onError={(e) => { e.target.src = "/logo.png"; }}
              />

              <div className="flex-1">
                <p className="font-semibold text-sm hover:underline hover:text-blue-600 cursor-pointer">
                  {post.author_fullname || post.author}
                </p>
                <p className="text-xs text-gray-500">Udesya Member</p>
                <p className="text-xs text-gray-500 flex items-center gap-1">
                  {formatDate(post.created_at)} • <MdPublic size={12} />
                </p>
              </div>
            </div>

            {/* Post Text */}
            {post.content && (
              <div className="px-3 pb-3">
                <p className="text-sm text-gray-800 leading-relaxed">
                  {post.content}
                </p>
              </div>
            )}

            {/* Image */}
            {imageUrl && (
              <div className="w-full bg-gray-100 border-y">
                <img
                  src={imageUrl}
                  alt="post content"
                  className="w-full h-auto max-h-[400px] object-cover sm:object-contain"
                  onError={(e) => { e.target.src = "/logo.png"; }}
                />
              </div>
            )}

            {/* Reaction Count */}
            <div className="flex justify-between px-3 py-2 text-[11px] text-gray-500 border-b mx-2">
              <div className="flex items-center gap-1">
                <span className="bg-blue-100 p-0.5 rounded-full">👍</span>
                <span>0 Likes</span>
              </div>
              <p>0 Comments • 0 Reposts</p>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-around px-1 py-1 text-sm font-semibold text-gray-600">
              <button className="flex-1 flex justify-center items-center gap-2 py-3 hover:bg-gray-100 rounded-md transition">
                <BiLike size={22} />
                <span>Like</span>
              </button>
              <button className="flex-1 flex justify-center items-center gap-2 py-3 hover:bg-gray-100 rounded-md transition">
                <FaRegCommentDots size={19} />
                <span>Comment</span>
              </button>
              <button className="flex-1 flex justify-center items-center gap-2 py-3 hover:bg-gray-100 rounded-md transition">
                <BiRepost size={24} />
                <span>Repost</span>
              </button>
              <button className="flex-1 flex justify-center items-center gap-2 py-3 hover:bg-gray-100 rounded-md transition">
                <IoIosSend size={22} />
                <span>Send</span>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Postview;