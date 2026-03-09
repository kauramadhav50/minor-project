import cover from "../../assets/images/cover.png";
import { FaCheckCircle } from "react-icons/fa";

const Profileinfo = () => {
  return (
    <div className="w-full md:w-72 bg-gray-100 rounded-lg shadow-lg overflow-hidden pr-2.5 border border-gray-200">

      {/* Cover */}
      <div className="relative">
        <img
          src={cover}
          alt="cover"
          className="w-full h-24 object-cover object-right"
        />

        {/* Profile Image */}
        <img
          src="/logo.png"
          alt="profile"
          className="w-20 h-20 rounded-full border-4 border-white absolute left-4 -bottom-8 z-10"
        />
      </div>

      {/* Profile Info */}
      <div className="pt-14 px-4 pb-4">
        <h2 className="font-semibold text-lg flex items-center gap-1">
          MADHAV KAURA
          <FaCheckCircle className="text-gray-500 text-sm" />
        </h2>

        <p className="text-sm text-gray-600 mt-1">
          💻 Full-Stack Developer | 🐍 Python & Django Expert | 🤖 Generative AI
        </p>

        <p className="text-sm text-gray-600 mt-1">
          📍 Mata Gujri College, Fatehgarh Sahib
        </p>
      </div>

      {/* Stats */}
      <div className="border-t border-gray-300 px-4 py-3 text-sm">
        <div className="flex justify-between">
          <span>Profile viewers</span>
          <span className="text-blue-600">45</span>
        </div>

        <div className="flex justify-between mt-1">
          <span>Post impressions</span>
          <span className="text-blue-600">2,625</span>
        </div>
      </div>

      {/* Premium */}
      <div className="border-t border-gray-300 px-4 py-3 text-sm">
        <p className="text-gray-600">Unlock exclusive tools & insights</p>
        <p className="font-semibold">Try Premium for ₹0</p>
      </div>

      {/* Menu */}
      <div className="border-t border-gray-300 px-4 py-3 text-sm space-y-2">
        <p>🔖 Saved items</p>
        <p>👥 Groups</p>
        <p>📰 Newsletters</p>
        <p>📅 Events</p>
      </div>

    </div>
  );
};

export default Profileinfo;