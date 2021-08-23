import React, { useState } from "react";
import Carousel, { consts } from "react-elastic-carousel";
import Udemy from "../../images/CarouselImages/udemy.svg";
import ForwardArrow from "../../images/ForwardArrow.svg";
import "./LogoCarousel.css";

export const LogoCarousel = () => {
	const [selected, setSelected] = useState(0);
	const myArrow = ({ type, onClick, isEdge }) => {
		// type === consts.PREV;
		// console.log(consts);
		const pointer =
			type === consts.PREV ? (
				<img
					src={ForwardArrow}
					alt=""
					className="logo-carousel-icon left"
				/>
			) : (
				<img src={ForwardArrow} alt="" className="logo-carousel-icon" />
			);
		return (
			<button
				className="logo-carousel-button mt-2"
				onClick={onClick}
				disabled={isEdge}
			>
				{pointer}
			</button>
		);
	};
	return (
		<div className="logo-carousel">
			<Carousel
				renderArrow={myArrow}
				pagination={false}
				breakPoints={[
					{ width: 1, itemsToShow: 1 },
					{ width: 550, itemsToShow: 2, itemsToScroll: 2 },
					{ width: 850, itemsToShow: 4 },
					{ width: 1150, itemsToShow: 5, itemsToScroll: 2 },
					{ width: 1450, itemsToShow: 5 },
					{ width: 1750, itemsToShow: 6 },
				]}
			>
				{data.map((item, key) => {
					return (
						<div
							key={key}
							className={`logoCarousel-items ${
								selected === key ? "selected" : ""
							}`}
						>
							<img
								src={item.image}
								alt={item.name}
								className={"tabIcon logo"}
								onClick={() => setSelected(key)}
							/>
						</div>
					);
				})}
			</Carousel>
		</div>
	);
};

const data = [
	{
		name: "Udemy",
		image: Udemy,
	},
	{
		name: "Udemy",
		image: Udemy,
	},
	{
		name: "Udemy",
		image: Udemy,
	},
	{
		name: "Udemy",
		image: Udemy,
	},
	{
		name: "Udemy",
		image: Udemy,
	},
	{
		name: "Udemy",
		image: Udemy,
	},
	{
		name: "Udemy",
		image: Udemy,
	},
];
