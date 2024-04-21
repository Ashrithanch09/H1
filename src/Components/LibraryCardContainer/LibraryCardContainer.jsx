import LibararyCard from "./LibraryCard/LibararyCard";

const LibraryCardContainer = () => {
	const libraryCardDetails = [
		{
			text: "My Saved Library 1",
			color: "#6dc0ed",
			dateString: "dd-mm-yyyy",
		},
		{
			text: "My Saved Library 2",
			color: "#8787ed",
			dateString: "dd-mm-yyyy",
		},
		{
			text: "My Saved Library 3",
			color: "#d73b3b",
			dateString: "dd-mm-yyyy",
		},
		{
			text: "My Saved Library 4",
			color: "#ee8755",
			dateString: "dd-mm-yyyy",
		},
		{
			text: "My Saved Library 5",
			color: "#35bb7c",
			dateString: "dd-mm-yyyy",
		},
	];

	return (
		<div className="relative h-[9rem] z-10 ">
			<div className="absolute left-0 top-[-3rem] pl-[45px] sm:pl-[60px] flex items-center">
				{libraryCardDetails.map((details, i) => {
					return <LibararyCard {...details} key={i} />;
				})}
			</div>
		</div>
	);
};

export default LibraryCardContainer;
