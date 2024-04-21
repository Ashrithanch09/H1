import { IoMdSearch, IoMdCalendar } from "react-icons/io";
import { FiMonitor } from "react-icons/fi";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BiBuildings } from "react-icons/bi";
import { MdAttachMoney, MdHeadphones } from "react-icons/md";
import { FaGear } from "react-icons/fa6";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const SideBar = () => {
	return (
		<div className="fixed left-0 right-0 z-20 w-[35px] sm:w-[50px] bg-white  flex py-3 px-2 sm:px-3 flex-col items-center justify-between h-screen border-[1px] border-gray-200">
			<div className="flex flex-col items-center justify-between ">
				<Link to={"/"}>
					<img
						src={Logo}
						alt="Logo"
						className="mb-[80px] hover:cursor-pointer "
					/>
				</Link>

				<Link to={"/search"}>
					<IoMdSearch className="text-[23px] sm:text-[28px] mb-[30px] text-[#6c6c6c] hover:cursor-pointer " />
				</Link>
				<Link to={"/admin"}>
					<FiMonitor className="text-[20px] sm:text-[24px] mb-[30px] text-[#6c6c6c] hover:cursor-pointer " />
				</Link>
				<Link to={"/query"}>
					<AiOutlineQuestionCircle className="text-[20px] sm:text-[24px] mb-[30px] text-[#6c6c6c] hover:cursor-pointer " />
				</Link>
				<Link to={"/schedule"}>
					<IoMdCalendar className="text-[20px] sm:text-[24px] mb-[30px] text-[#6c6c6c] hover:cursor-pointer " />
				</Link>
				<Link to={"/address"}>
					<BiBuildings className="text-[20px] sm:text-[24px] mb-[30px] text-[#6c6c6c] hover:cursor-pointer " />
				</Link>
				<Link
					to={"/income"}
					className=" p-[1px] rounded-full bg-[#6c6c6c] mb-[30px] hover:cursor-pointer ">
					<MdAttachMoney className="text-[20px] sm:text-[24px] text-white" />
				</Link>
				<Link to={"/support"}>
					<MdHeadphones className="text-[22px] sm:text-[24px] mb-[30px] text-[#6c6c6c] hover:cursor-pointer " />
				</Link>
			</div>

			<Link to={"/settings"}>
				<FaGear className="text-[20px] sm:text-[24px] mb-[24px] text-[#6c6c6c] hover:cursor-pointer " />
			</Link>
		</div>
	);
};

export default SideBar;
