import React, { useEffect, useState } from "react";
import { MdPublic } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import { BiRepost, BiLike } from "react-icons/bi";
import { FaRegCommentDots } from "react-icons/fa";

const Postview = () => {
  const [posts, setPosts] = useState([]);

  const API_URL = "http://127.0.0.1:8000/api/posts/";

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();

      setPosts(data.results || data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  // 🔥 Format date (LinkedIn style)
  const formatDate = (date) => {
    const d = new Date(date);
    return d.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
    });
  };

  return (
    <div className="bg-[#f3f2ef] min-h-screen py-6">
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-white border border-gray-300 
          w-full sm:w-[95%] md:w-[75%] lg:w-[600px] 
          mx-auto rounded-sm shadow-sm mb-5"
        >
          {/* Header */}
          <div className="flex items-start gap-3 p-3">
            <img
              src={
                post.profile_pic
                  ? `http://127.0.0.1:8000${post.profile_pic}`
                  : "logo.png"
              }
              alt="profile"
              className="w-12 h-12 rounded-full object-cover"
            />

            <div className="flex-1">
              <p className="font-semibold text-sm">
                {post.author_fullname || post.author}
              </p>

              <p className="text-xs text-gray-500">Developer</p>

              <p className="text-xs text-gray-500 flex items-center gap-1">
                {formatDate(post.created_at)} • <MdPublic size={14} />
              </p>
            </div>
          </div>

          {/* Post Text */}
          {post.content && (
            <div className="px-3 pb-2">
              <p className="text-sm leading-relaxed">{post.content}</p>
            </div>
          )}

          {/* Post Image */}
          {post.image && (
            <div className="w-full bg-black">
              <img
                src={`http://127.0.0.1:8000${post.image}`}
                alt="post"
                className="w-full h-auto object-contain"
              />
            </div>
          )}

          {/* Reaction Count */}
          <div className="flex justify-between px-3 py-2 text-xs text-gray-500 border-b">
            <p>👍 0 Likes</p>
            <p>0 Comments</p>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between text-sm text-gray-600">
            <button className="flex-1 flex justify-center items-center gap-2 py-2 hover:bg-gray-100">
              <BiLike size={20} />
              Like
            </button>

            <button className="flex-1 flex justify-center items-center gap-2 py-2 hover:bg-gray-100">
              <FaRegCommentDots size={18} />
              Comment
            </button>

            <button className="flex-1 flex justify-center items-center gap-2 py-2 hover:bg-gray-100">
              <BiRepost size={20} />
              Repost
            </button>

            <button className="flex-1 flex justify-center items-center gap-2 py-2 hover:bg-gray-100">
              <IoIosSend size={20} />
              Send
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Postview;