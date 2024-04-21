import { BiSolidDetail } from "react-icons/bi";

const LibararyCard = ({ color, text, dateString }) => {
	return (
		<div className="rounded-md bg-white md:min-w-[12rem] md:px-[1rem] md:py-[1.5rem] xl:min-w-[15rem] xl:px-[1.5rem] xl:py-[2rem] shadow-md shadow-gray-300 mx-3 my-2">
			<BiSolidDetail style={{ color: color }} className={"md:text-[20px] xl:text-[26px] mb-2"} />
			<div className="mb-2 text-[15px] xl:text-[18px] font-semibold">{text}</div>
			<div className="mb-2 text-[10px] text-gray-500 xl:text-[14px]">{dateString}</div>
		</div>
	);
};

export default LibararyCard;
