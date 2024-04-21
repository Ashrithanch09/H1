import { Link } from "react-router-dom";

const DefaultPage = () => {
	return (
		<div className="h-screen w-full flex items-center justify-start flex-col">
			<div className="mb-4 mt-[150px] text-[20px]">Default page for routes other than homepage</div>
			<Link to={"/"} className="text-blue-500 hover:underline" >Go To HomePage</Link>
		</div>
	);
};

export default DefaultPage;
