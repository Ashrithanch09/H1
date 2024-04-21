import SideBar from "../../Components/SideBar/SideBar";
import Header from "../../Components/Header/Header";
import LibraryCardContainer from "../../Components/LibraryCardContainer/LibraryCardContainer";
import ProductAndNotificationContainer from "../../Components/ProductAndNotificationContainer/ProductAndNotificationContainer";

const Home = () => {

	return (
		<div className="flex relative">
			<SideBar />

			{/* main container */}
			<div className="w-full bg-[#fdfdfd]">
				<Header />
				
				<LibraryCardContainer />

				<ProductAndNotificationContainer />
			
			</div>
		</div>
	);
};

export default Home;
