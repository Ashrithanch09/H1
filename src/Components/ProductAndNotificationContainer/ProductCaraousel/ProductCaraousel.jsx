import Slider from "react-slick";
import ProductCard from "./ProductCard/ProductCard";
import { MdArrowCircleLeft, MdArrowCircleRight } from "react-icons/md";

function SampleNextArrow(props) {
	const { className, style, onClick } = props;
	return (
		<MdArrowCircleRight
			className={className}
			style={{
				...style,
				display: "block",
				background: "white",
				color: "black",
				width: "30px",
				height: "30px",
			}}
			onClick={onClick}
		/>
	);
}

function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	return (
		<MdArrowCircleLeft
			className={className}
			style={{
				...style,
				display: "block",
				background: "white",
				color: "black",
				width: "30px",
				height: "30px",
			}}
			onClick={onClick}
		/>
	);
}

const ProductCaraousel = () => {
	const imgArr = [
		{
			url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf8bnUVe6R1F2elsnMOFSgQfkUtwGNNSl8xjp3b1C2KA&s",
			title: "States of Markets",
			desc: "The market capitalism of indian stocks has significantly crossed 4.5 trillion in january",
		},
		{
			url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFglKs1Je1_Rvm69CeiZvkMsrGmc7KN2BdmpvIkLTvaw&s",
			title: "The central Capex Surge",
			desc: "The market capitalism of indian stocks has significantly crossed 4.5 trillion in january",
		},
		{
			url: "https://bsmedia.business-standard.com/_media/bs/img/article/2023-09/29/full/1696008957-6591.jpg?im=FeatureCrop,size=(826,465)",
			title: "Direct Taxes and Business Cycle",
			desc: "The market capitalism of indian stocks has significantly crossed 4.5 trillion in january",
		},
		{
			url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE3OVlGfUo9FxFrNlK9gkGNixQIdb_DZR7LK7w1w4yUQ&s",
			title: "Banking Monitor",
			desc: "Credit growth has been remainded broadly stable in recent weeka at just",
		},
		{
			url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJlD7NzKS-MOxswgd26IAk_gvfR3obFIdGz_4expjCIw&s",
			title: "Changes in Taxation Policy",
			desc: "The market capitalism of indian stocks has significantly crossed 4.5 trillion in january",
		},
		{
			url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiN1DfzoE8uEu-wPF-vC4T3-QmnglxZbY_aWm_1C_Ojg&s",
			title: "Share Market Rules ",
			desc: "The market capitalism of indian stocks has significantly crossed 4.5 trillion in january",
		},
		{
			url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo-6O0Faqu14soZwIubWBekMTx6iEBK9uhwA&s",
			title: "Useful Insurance schemes",
			desc: "The market capitalism of indian stocks has significantly crossed 4.5 trillion in january",
		}
	];

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		responsive: [
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 720,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<div className="">
			<Slider {...settings}>
				{imgArr.map((detail, i) => {
					return <ProductCard {...detail} key={i} />;
				})}
			</Slider>
		</div>
	);
};

export default ProductCaraousel;
