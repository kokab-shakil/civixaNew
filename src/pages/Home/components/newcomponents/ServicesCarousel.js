import React, { useState } from "react";
import { Button, ButtonGroup, Col, Container, Row } from "react-bootstrap";

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

import Car from "../../../../images/car.svg";

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
	const [child, setChild] = useState(<AnnotationChild />);
	const handleClick = (item, key) => {
		setSelected(key + 1);
		setChild(item.child);
	};
	return (
		<>
			<Swiper
				navigation={{
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				}}
				freeMode={true}
				className={"sizeCarousel mt-2"}
				slidesPerView={"auto"}
			>
				<div className="">
					{data.map((item, key) => {
						return (
							<SwiperSlide>
								<button
									className={`service-button ${
										selected === item.id ? "selected" : ""
									}`}
									onClick={() => handleClick(item, key)}
								>
									{item.name}
								</button>
							</SwiperSlide>
						);
					})}
				</div>
			</Swiper>
			<Container>
				<Row className="py-3 d-flex justify-content-center">
					{child}
				</Row>
			</Container>
		</>
	);
};

const AnnotationChild = () => {
	const [childSelected, setChildSelected] = useState(1);
	const [option, selectedOption] = useState(annotationChildData[1].component);

	const handleClick = (e, selected) => {
		const optionValue = annotationChildData.find(
			(element) => element.value === e
		);
		selectedOption(optionValue.component);
		setChildSelected(selected);
		console.log(childSelected);
	};
	return (
		<>
			{annotationChildData.map((item, key) => {
				return (
					<div key={key} className="service-carousel-smallIcon">
						<div
							className={`d-flex py-2 cursor-pointer ${
								childSelected === key ? "childSelected" : ""
							}`}
							value={item.value}
							onClick={() => handleClick(item.value, key)}
						>
							<img
								src={item.icon}
								alt={item.value}
								className={`tabIcon pr-2 ${
									childSelected === key
										? "childSelectedIcon"
										: ""
								}`}
							/>
							{item.value}
						</div>
					</div>
				);
			})}
			<Container className="pt-4">
				<Row className="d-flex justify-content-center align-items-center">
					<div className="padding-right-sm max-width-md">
						{option}
					</div>
				</Row>
			</Container>
		</>
	);
};

const DGenerationChild = () => {
	const [child, setChild] = useState(dataGenerationChildData[0]);
	const [selected, setSelected] = useState(0);

	const handleClick = (item, key) => {
		setSelected(key);
		setChild(item);
	};
	return (
		<>
			<Col xs={12}>
				<Row className="d-flex justify-content-center padding-right-sm">
					{dataGenerationChildData.map((item, key) => {
						return (
							<Col
								xs={12}
								sm={"auto"}
								className={"text-center p-sm-0"}
							>
								<button
									className={`service-button ${
										selected === key ? "selected" : ""
									}`}
									onClick={() => handleClick(item, key)}
								>
									{item.name}
								</button>
							</Col>
						);
					})}
				</Row>
			</Col>
			<Col xs={12} className="mt-4">
				<div className="padding-right-sm max-width-md m-auto">
					<TabData
						headingText={child.name}
						paraText={child.paraText}
					/>
				</div>
			</Col>
		</>
	);
};

const DResourcesChild = () => {
	return (
		<>
			<h1>Dedicated Resources Child</h1>
		</>
	);
};

const data = [
	{
		id: 1,
		name: "Annotation",
		child: <AnnotationChild />,
	},
	{
		id: 2,
		name: "Data Genenration",
		child: <DGenerationChild />,
	},
	{
		id: 3,
		name: "Dedicated Resources",
		child: <DResourcesChild />,
	},
];

const annotationChildData = [
	{
		value: "Box",
		component: (
			<TabData
				cardImage={Car}
				headingText="Bouding Box"
				paraText="Marking objects on the image or video in bounding boxes and tracking selected objects through all the frames with the video."
			/>
		),
		icon: box,
	},
	{
		value: "Cuboid",
		component: (
			<TabData
				cardImage={Car}
				headingText="Annotations"
				paraText="We understand that pixel-perfect annotations are the foundation of an efficiently trained AI-model. We have an in-house team of 30+ annotators. We make sure that the resources working on your data are well trained. With the help of our AI tools and algorithms, we provide extremely precise data with up to 99% accuracy."
			/>
		),
		icon: cuboid,
	},
	{
		value: "Classification",
		component: "Classification",
		icon: classification,
	},
	{
		value: "Point",
		component: "Point",
		icon: point,
	},
	{
		value: "Polygons",
		component: (
			<TabData
				cardImage={Car}
				headingText="Annotations"
				paraText="We understand that pixel-perfect annotations are the foundation of an efficiently trained AI-model. We have an in-house team of 30+ annotators. We make sure that the resources working on your data are well trained. With the help of our AI tools and algorithms, we provide extremely precise data with up to 99% accuracy."
			/>
		),
		icon: polygons,
	},
	{
		value: "Polylines",
		component: (
			<TabData
				cardImage={Car}
				headingText="Annotations"
				paraText="We understand that pixel-perfect annotations are the foundation of an efficiently trained AI-model. We have an in-house team of 30+ annotators. We make sure that the resources working on your data are well trained. With the help of our AI tools and algorithms, we provide extremely precise data with up to 99% accuracy."
			/>
		),
		icon: polylines,
	},
	{
		value: "Segmentation",
		component: "Segmentation",
		icon: segmentation,
	},
	{
		value: "Transcription",
		component: (
			<TabData
				cardImage={Car}
				headingText="Annotations"
				paraText="We understand that pixel-perfect annotations are the foundation of an efficiently trained AI-model. We have an in-house team of 30+ annotators. We make sure that the resources working on your data are well trained. With the help of our AI tools and algorithms, we provide extremely precise data with up to 99% accuracy."
			/>
		),
		icon: transcription,
	},
];

const dataGenerationChildData = [
	{
		id: 1,
		name: "Data Gathering",
		paraText:
			"Our highly trained staff gathers standard quality datasets according to the need of your AI-model. The type of data can be images, video, or contextual data. Our team members gather real-life data from the required source point so you can be provided with the top-notch dataset that is the base requirement for your AI-model.",
		component: "",
	},
	{
		id: 2,
		name: "Synthetic Data Generation",
		paraText:
			"In several edge cases it is not possible to generate an adequate amount of real life datasets. For example, There is a need to train an AI-model which can predict a hurricane’s intensity and the possible destruction afterwards in a particular state. Over the past 100 years 25 hurricanes have hit the states of Florida which doesn’t generate a sufficient amount of dataset to train a model with high accuracy level. In cases like these we generate synthetic datasets which mimic the real-life datasets.",
		component: "",
	},
];
