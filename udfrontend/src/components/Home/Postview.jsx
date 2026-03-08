import React from 'react'
import { MdPublic } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import { BiRepost, BiLike } from "react-icons/bi";
import { FaRegCommentDots } from "react-icons/fa";

const Postview = () => {

   const posts = [
    {
      id: 1,
      image: "logo.png"
    },
    {
      id: 2,
      image:
        "https://media.licdn.com/dms/image/v2/D5622AQEopYC2rU64Pw/feedshare-shrink_800/B56ZwytRUfIsAg-/0/1770377254969?e=1773878400&v=beta&t=YBGuSAPZaHzwoEz-9_ah6PrcNkuuGJYet1WGAijtOgU"
    },
    {
      id: 3,
      image:
        "https://media.licdn.com/dms/image/v2/D5622AQGF-tDtW90tJQ/feedshare-shrink_1280/B56ZumjQwBIQAs-/0/1768025821631?e=1773878400&v=beta&t=jw0A8DZjF7GaZkWiWJeqo-U6QqUmLMeNsayx-tQwGYI"
    },
    {
      id: 4,
      image:
        "https://100poundsocial.com/wp-content/uploads/2023/11/How-To-Posts-Good-LinkedIn-Post-Example-6.png.webp"
    }
  ];

  return (
     <div className="bg-gray-100">
    
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white border border-gray-300 
              w-full sm:w-[95%] md:w-[75%] lg:w-[600px] 
              mx-auto rounded-sm shadow-sm mx-1"
            >
    
              {/* Header */}
              <div className="flex items-start gap-3 p-3">
                <img
                  src="logo.png"
                  alt="profile"
                  className="w-12 h-12 rounded-full object-cover"
                />
    
                <div className="flex-1">
                  <p className="font-semibold text-sm">
                    Devanshu Gupta
                  </p>
    
                  <p className="text-xs text-gray-500">
                    Software Engineer at Google
                  </p>
    
                  <p className="text-xs text-gray-500 flex items-center gap-1">
                    4m ago • <MdPublic size={14} />
                  </p>
                </div>
              </div>
    
              {/* Post Text */}
              <div className="px-3 pb-2">
                <p className="text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Error soluta dolorum vel, voluptatum illo odio praesentium dicta aliquam.
                </p>
              </div>
    
              {/* Post Image - FULL IMAGE */}
              <div className="w-full bg-black">
                <img
                  src={post.image}
                  alt="post"
                  className="w-full h-auto object-contain"
                />
              </div>
    
              {/* Reaction Count */}
              <div className="flex justify-between px-3 py-2 text-xs text-gray-500 border-b">
                <p>👍 12 Likes</p>
                <p>3 Comments</p>
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
  )
}

export default Postview
