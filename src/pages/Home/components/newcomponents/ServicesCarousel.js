import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import TabData from "../../../../components/CustomTabs/TabData";

// icons
import classification from "../../../../images/CarouselIcons/classification.svg";
import box from "../../../../images/CarouselIcons/box.svg";
import cuboid from "../../../../images/CarouselIcons/Cuboid.svg";
import point from "../../../../images/CarouselIcons/point.svg";
import polygons from "../../../../images/CarouselIcons/Polygons.svg";
import polylines from "../../../../images/CarouselIcons/polylines.svg";
import segmentation from "../../../../images/CarouselIcons/segmentation.svg";
import transcription from "../../../../images/CarouselIcons/Transcription.svg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import "./SizeCarousel.css";

// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Navigation]);

export const ServicesCarousel = () => {
	const [selected, setSelected] = useState(1);
	const [childSelected, setChildSelected] = useState(1);
	const [option, selectedOption] = useState(TabData);

	const handleClick = (e, selected) => {
		const optionValue = childData.find((element) => element.value == e);
		selectedOption(optionValue.component);
		setChildSelected(selected);
		console.log(childSelected);
	};
	return (
		<>
			<Swiper
				navigation={{
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				}}
				freeMode={true}
				className={"sizeCarousel"}
				slidesPerView={"auto"}
			>
				<div className="abcd">
					{data.map((item, key) => {
						return (
							<SwiperSlide>
								<button
									className={`service-button ${
										selected === item.id ? "selected" : ""
									}`}
									onClick={() => setSelected(key + 1)}
								>
									{item.name}
								</button>
							</SwiperSlide>
						);
					})}
				</div>
			</Swiper>
			<Container>
				<Row className="py-3">
					{childData.map((item, key) => {
						return (
							<Col key={key} xs md>
								<div
									className={`d-flex py-2 cursor-pointer ${
										childSelected === key
											? "childSelected"
											: ""
									}`}
									value="box"
									onClick={() => handleClick(item.value, key)}
								>
									<img
										src={box}
										alt="box"
										className={"tabIcon pr-2"}
									/>
									{item.value}
								</div>
							</Col>
						);
					})}
				</Row>
			</Container>
			<div className="padding-right">{option}</div>
		</>
	);
};

const data = [
	{
		id: 1,
		name: "Annotation",
	},
	{
		id: 2,
		name: "Data Genenration",
	},
	{
		id: 3,
		name: "Ai as a Service",
	},
];

const childData = [
	{
		value: "Box",
		component: "Box",
	},
	{
		value: "Cuboid",
		component: <TabData />,
	},
	{
		value: "Classification",
		component: "Classification",
	},
	{
		value: "Point",
		component: "Point",
	},
	{
		value: "Polygons",
		component: <TabData />,
	},
	{
		value: "Polylines",
		component: <TabData />,
	},
	{
		value: "Segmentation",
		component: "Segmentation",
	},
	{
		value: "Transcription",
		component: <TabData />,
	},
];