import ProductCaraousel from "./ProductCaraousel/ProductCaraousel";
import RecentReleases from "./RecentReleases/RecentReleases";


const ProductAndNotificationContainer = () => {
	return (
		<div className="mt-[14px] flex items-start justify-between border-0.2 border-red-600">
			{/* listed products container  */}
			<div className="bg-white w-[63%] py-[1rem] ml-[72px] rounded-lg px-8 mb-[5rem] border-[1px] shadow-md shadow-gray-200 border-gray-100 ">
				<ProductCaraousel />

				<div className="bg-black py-4 m-auto mt-8 cursor-pointer active:scale-[0.98] text-center w-[100px] text-white px-2 text-[13px] rounded-md">
					View more
				</div>
			</div>

            {/* Recent releases section  */}
            <RecentReleases />

		</div>
	);
};

export default ProductAndNotificationContainer;
