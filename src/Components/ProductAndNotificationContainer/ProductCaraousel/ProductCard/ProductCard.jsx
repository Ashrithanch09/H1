import React from "react";

const ProductCard = ({ url, title, desc }) => {
	return (
		<div className=" lg:w-[10rem] h-[20rem] flex justify-between flex-col xl:w-[12rem] my-[1rem] ml-[14px] shadow-md overflow-hidden shadow-gray-300 rounded-[2px]">
			<div className="">
				<img src={url} alt="productImage" className="w-full h-[10rem]" />
				<div className="px-[1.2rem] pt-[14px] pb-[12px] font-semibold text-[15px]">{title}</div>
			</div>
			<div className="text-gray-400 text-[14px] leading-[1.2rem] font-thin px-[1.2rem] pb-[1rem]">{desc}</div>
		</div>
	);
};

export default ProductCard;
