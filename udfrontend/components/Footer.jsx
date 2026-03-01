import Footerbtn from "./Footerbtn.jsx"
import { IoHomeSharp } from "react-icons/io5";
import { HiUserGroup } from "react-icons/hi2";
import { MdAddBox } from "react-icons/md";
import { IoNotificationsSharp } from "react-icons/io5";
import { IoBriefcase } from "react-icons/io5";

const Footer = () => {
    return (
        <div className="bg-black text-white py-3 flex justify-around w-full text-2xl">
           
                <Footerbtn Name="Home" icon={<IoHomeSharp />} />
                <Footerbtn Name="Groups" icon={<HiUserGroup />} />
                <Footerbtn Name="Add" icon={<MdAddBox />} />
                <Footerbtn Name="Notifications" icon={<IoNotificationsSharp />} />
                <Footerbtn Name="Jobs" icon={<IoBriefcase />} />
           
        </div>
    )
}

export default Footer
