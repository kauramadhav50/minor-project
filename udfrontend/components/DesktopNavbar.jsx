import { IoSearch } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";
import { Link } from "react-router-dom";

const DesktopNavbar = () => {
    return (

        <div className="hidden md:flex fixed top-0 left-0 w-full 
    bg-white border-b border-gray-300 
    justify-center z-[9999]">

            <div className="flex items-center justify-between w-[1100px] px-4 py-2">

                {/* Left Section */}
                <div className="flex items-center gap-3">

                    {/* Logo */}
                    <img
                        src="/logo.png"
                        alt="logo"
                        className="h-10"
                    />

                    {/* Search */}
                    <div className="flex items-center 
          bg-gray-100 px-3 py-1 rounded-md">

                        <IoSearch className="text-gray-600" />

                        <input
                            type="search"
                            placeholder="Search"
                            className="bg-transparent px-2 
              outline-none w-60"
                        />

                    </div>

                </div>


                {/* Right Section */}
                <div className="flex items-center gap-8 text-gray-600">
                    <Link to="/">
                        <div className="flex flex-col items-center cursor-pointer hover:text-black">
                            <AiFillHome size={22} />
                            <p className="text-xs">Home</p>
                        </div>
                    </Link>

                    <Link to="/network">
                        <div className="flex flex-col items-center cursor-pointer hover:text-black">
                            <FaUserFriends size={22} />
                            <p className="text-xs">Network</p>
                        </div>
                    </Link>

                    <Link to="/jobs">
                        <div className="flex flex-col items-center cursor-pointer hover:text-black">
                            <MdWork size={22} />
                            <p className="text-xs">Jobs</p>
                        </div>
                    </Link>


                    <Link to="/message">
                        <div className="flex flex-col items-center cursor-pointer hover:text-black">
                            <IoChatbubbleEllipses size={22} />
                            <p className="text-xs">Messaging</p>
                        </div>
                    </Link>


                    <Link to="/notification">
                        <div className="flex flex-col items-center cursor-pointer hover:text-black">
                            <IoNotifications size={22} />
                            <p className="text-xs">Notifications</p>
                        </div>
                    </Link>


                    {/* Profile */}
                    <div className="flex flex-col items-center cursor-pointer">

                        <img
                            src="/logo.png"
                            alt="profile"
                            className="w-6 h-6 rounded-full"
                        />

                        <p className="text-xs">Me</p>

                    </div>

                </div>

            </div>

        </div>

    );
};

export default DesktopNavbar;