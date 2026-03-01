import { MdPublic } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import { BiRepost, BiLike } from "react-icons/bi";
import { FaRegCommentDots } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      {/* first post */}
      <div className="bg-white border border-gray-300 
    w-full sm:w-[95%] md:w-[75%] lg:w-[600px] 
    mx-auto my-1 rounded-sm shadow-sm">

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
            Error soluta dolorum vel, voluptatum illo odio praesentium
            dicta aliquam.
          </p>

        </div>



        {/* Post Image */}

        <div className="w-full">

          <img
            src="logo.png"
            alt="post"
            className="w-full max-h-[450px] object-cover"
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

      {/* second post */}
      <div className="bg-white border border-gray-300 
    w-full sm:w-[95%] md:w-[75%] lg:w-[600px] 
    mx-auto my-1 rounded-sm shadow-sm">

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
            Error soluta dolorum vel, voluptatum illo odio praesentium
            dicta aliquam.
          </p>

        </div>



        {/* Post Image */}

        <div className="w-full">

          <img
            src="https://media.licdn.com/dms/image/v2/D5622AQEopYC2rU64Pw/feedshare-shrink_800/B56ZwytRUfIsAg-/0/1770377254969?e=1773878400&v=beta&t=YBGuSAPZaHzwoEz-9_ah6PrcNkuuGJYet1WGAijtOgU"
            alt="post"
            className="w-full max-h-[450px] object-cover"
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

      {/* third post */}
      <div className="bg-white border border-gray-300 
    w-full sm:w-[95%] md:w-[75%] lg:w-[600px] 
    mx-auto my-1 rounded-sm shadow-sm">

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
            Error soluta dolorum vel, voluptatum illo odio praesentium
            dicta aliquam.
          </p>

        </div>



        {/* Post Image */}

        <div className="w-full">

          <img
            src="https://media.licdn.com/dms/image/v2/D5622AQGF-tDtW90tJQ/feedshare-shrink_1280/B56ZumjQwBIQAs-/0/1768025821631?e=1773878400&v=beta&t=jw0A8DZjF7GaZkWiWJeqo-U6QqUmLMeNsayx-tQwGYI"
            alt="post"
            className="w-full max-h-[450px] object-cover"
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


      {/* Forth post */}
      <div className="bg-white border border-gray-300 
    w-full sm:w-[95%] md:w-[75%] lg:w-[600px] 
    mx-auto my-1 rounded-sm shadow-sm">

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
            Error soluta dolorum vel, voluptatum illo odio praesentium
            dicta aliquam.
          </p>

        </div>



        {/* Post Image */}

        <div className="w-full">

          <img
            src="https://media.licdn.com/dms/image/v2/D4E22AQFXHwOZwlv3iw/feedshare-shrink_2048_1536/B4EZg8TDiLGoBU-/0/1753358288205?e=1773878400&v=beta&t=59P-rVHYuFy5TBdyGh9iURa5nIUNwxRvPFoLVy1Cl3U"
            alt="post"
            className="w-full max-h-[450px] object-cover"
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


    </div>


  );
};

export default Home;