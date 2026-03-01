

const Footerbtn = ({ Name,icon }) => {
    console.log(Name);
    return (
        <div>
            <a href="#" className="flex flex-col items-center gap-1">
                {icon}
                <p className="text-[12px] font-bold">{Name}</p>
            </a>
        </div>
    )
}

export default Footerbtn
