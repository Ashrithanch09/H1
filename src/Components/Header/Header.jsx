import { FaRegCalendar, FaRegClock } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className="flex items-center pl-[70px] sm:pl-[90px] justify-between flex-col-reverse sm:flex-row px-2 sm:px-12 pt-6 pb-20 sm:pb-16 bg-[#212d4f] text-white">
			{/* left part */}
			<div className="mt-[2rem] sm:mt-0">
				<div className="font-semibold text-[14px] sm:text-[15px] md:text-[17px]">
					Good Afternoon, Akshay
				</div>
				<div className="text-gray-400 text-[10px] sm:text-[11px]  md:text-[12px]">
					You are subscribed to retail plan
				</div>
			</div>

			{/* right part */}
			<div className="flex items-center justify-between w-full sm:w-[15rem] md:w-[20rem]">
				<div className="flex items-center gap-2">
					<Link to={"/calendar"}>
						<FaRegCalendar className="text-[16px] sm:text-[18px]  md:text-[22px]" />
					</Link>
					<div className="text-[12px] sm:text-[14px] md:text-[16px]">
						Today, 14 February
					</div>
					<Link to={"/time"}>
						<FaRegClock className="text-[16px] sm:text-[18px] md:text-[20px]" />
					</Link>
					<div className="text-[12px] sm:text-[14px] md:text-[16px]">
						16:42
					</div>
				</div>

				<Link to={"/notifications"}>
					<IoMdNotificationsOutline className="text-[18px] sm:text-[18px]  md:text-[24px]" />
				</Link>
			</div>
		</div>
	);
};

export default Header;
