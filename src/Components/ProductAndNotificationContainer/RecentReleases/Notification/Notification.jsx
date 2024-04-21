const Notification = ({ date, title, details }) => {
	return (
		<div className="pl-4 my-6 relative">
			<div className="text-[#469cdc] font-semibold pl-6 text-[14px] pt-2">{date}</div>
			<div className="border-l-[2px] border-[#b9b9b9] pl-6  font-semibold py-2">
				{title}
			</div>
			<div className="border-l-[2px] border-[#b9b9b9] pl-6 text-[14px] font-semibold  pt-2 pb-[1.5rem] text-[#858990]">
				{details}
			</div>

			{/* for circle */}
			<div className="w-[12px] h-[12px] rounded-full bg-[#b9b9b9] absolute top-[4px] left-[11px]"></div>
		</div>
	);
};

export default Notification;
