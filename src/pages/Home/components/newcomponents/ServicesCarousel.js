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

// New Icons
import BoxBlue from "../../../../images/NewCarouselIcons/box-blue.svg";
import PointBlue from "../../../../images/NewCarouselIcons/point-blue.svg";
import PolygonsBlue from "../../../../images/NewCarouselIcons/polygons-blue.svg";
import PolylinesBlue from "../../../../images/NewCarouselIcons/polylines.svg";
import SegmentationBlue from "../../../../images/NewCarouselIcons/sementation.svg";
import ClassificationBlue from "../../../../images/NewCarouselIcons/classification-blue.svg";
import Keypoint from "../../../../images/NewCarouselIcons/keypoin.svg";

// Annotation Icons
import PointAnnotation from "../../../../images/annotations/point-annotation.png";
import PolylinesAnnotation from "../../../../images/annotations/polylines.png";
import SegmentationAnnotation from "../../../../images/annotations/segmentation.png";
import boundingBox from "../../../../images/annotations/boundingBox.png";
import pointa from "../../../../images/annotations/point.png";
import transcriptionA from "../../../../images/annotations/transcription.png";
import polyline from "../../../../images/annotations/polyline.png";
import classify from "../../../../images/annotations/child.png";
import papaya from "../../../../images/annotations/papayaNatural.png";
import alvin from "../../../../images/annotations/alvin.png";

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
										selected === item.id ? "selected " : ""
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
				<Row className=" d-flex justify-content-center">
					{child}
				</Row>
			</Container>
		</>
	);
};

const AnnotationChild = () => {
	const [childSelected, setChildSelected] = useState(0);
	const [option, selectedOption] = useState(annotationChildData[0].component);

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
			<div className="anotationChildDataBox  d-flex justify-content-start justify-content-md-center justify-content-lg-center justify-content-sm-center row">
			{annotationChildData.map((item, key) => {
				return (
					<div 
						key={key}
						className="service-carousel-smallIcon paddingXs col-6 col-sm-auto "
					>
						<div
							className={`d-flex py-2 pr-2 beholdNotationXs cursor-pointer ${
								childSelected === key ? "childSelected" : ""
							}`}
							value={item.value}
							onClick={() => handleClick(item.value, key)}
						>
							<img
								src={item.icon}
								alt={item.value}
								className={`tabIcon beholdIconXs pr-2 ${
									childSelected === key
										? "childSelectedIcon"
										: "notSelected"
								}`}
							/>
							{item.value}
						</div>
					</div>
				);
			})}
				</div>
			<Container className="pt-4">
				<Row className="d-flex justify-content-center align-items-center">
					<div className="padding-right-sm max-width-865">
						{option}
					</div>
				</Row>
			</Container>
		</>
	);
};

const DGenerationChild = () => {
	const [childSelected, setChildSelected] = useState(0);
	const [option, selectedOption] = useState(
		dataGenerationChildData[0].component
	);

	const handleClick = (e, selected) => {
		const optionValue = dataGenerationChildData.find(
			(element) => element.value === e
		);
		selectedOption(optionValue.component);
		setChildSelected(selected);
	};
	return (
		<>
			{dataGenerationChildData.map((item, key) => {
				return (
					<div
						key={key}
						className="service-carousel-smallIcon paddingXs col-6 col-sm-auto "
					>
						<div
							className={`d-flex py-2 pr-2 beholdNotationXs cursor-pointer  ${
								childSelected === key ? "childSelected" : ""
							}`}
							value={item.value}
							onClick={() => handleClick(item.value, key)}
						>
							<img
								src={item.icon}
								alt={item.value}
								className={`tabIcon beholdIconXs pr-2  ${
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
					<div className="padding-right-sm max-width-865">
						{option}
					</div>
				</Row>
			</Container>
		</>
	);
};

const DResourcesChild = () => {
	const [childSelected, setChildSelected] = useState(0);
	const [option, selectedOption] = useState(
		dedicatedResourcesChildData[0].component
	);

	const handleClick = (e, selected) => {
		const optionValue = dedicatedResourcesChildData.find(
			(element) => element.value === e
		);
		selectedOption(optionValue.component);
		setChildSelected(selected);
	};
	return (
		<>
			<div className="anotationChildDataBox  d-flex justify-content-start justify-content-md-center justify-content-lg-center justify-content-sm-center row">
			{dedicatedResourcesChildData.map((item, key) => {
				return (
					<div
						key={key}
						className="service-carousel-smallIcon paddingXs col-auto col-sm-auto pr-3 pr-lg-4"
					>
						<div
							className={`d-flex pr-3 py-2 beholdNotationXs cursor-pointer ${
								childSelected === key ? "childSelected" : ""
							}`}
							value={item.value}
							onClick={() => handleClick(item.value, key)}
						>
							<img
								src={item.icon}
								alt={item.value}
								className={`tabIcon pr-2 beholdIconXs ${
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
				</div>
			<Container className="pt-4">
				<Row className="d-flex justify-content-center align-items-center">
					<div className="padding-right-sm max-width-865">
						{option}
					</div>
				</Row>
			</Container>
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
		value: "Segmentation",
		component: (
			<TabData
				twoButton
				cardImage={SegmentationAnnotation}
				cardClass="serice-carousel-card"
				headingText="Semantic segmentation"
				paraText="Semantic segmentation is one of the precise annotation techniques. In this technique, each pixel is associated with a class. In other words, there is not a single pixel in the image left unassigned with a class"
			/>
		),
		icon: SegmentationBlue,
	},
	{
		value: "bounding box",
		component: (
			<TabData
				twoButton
				cardImage={boundingBox}
				cardClass="serice-carousel-card"
				headingText="Bouding Box"
				paraText="The process of marking a square/rectangle around the objects needed to be identified in an image or a video frame is known as bounding box annotation or simply box annotation. It is mostly used for autonomous vehicle training"
			/>
		),
		icon: BoxBlue,
	},
	{
		value: "Polylines",
		component: (
			<TabData
				twoButton
				cardImage={polyline}
				cardClass="serice-carousel-card"
				headingText="Polylines"
				paraText="Polylines are a type of polygonal annotation. In this technique, we draw several lines irrespective of their start and end points. They are generally useful in highlighting several line marks on roads."
			/>
		),
		icon: PolylinesBlue,
	},
	{
		value: "Point",
		component: (
			<TabData
				twoButton
				cardImage={pointa}
				cardClass="serice-carousel-card"
				headingText="Point Annotation"
				paraText="Point annotation is also known as landmark annotation. As described from its name, a single point is used on an object for its representation. This technique could be really useful in counting the number of objects in a certain image."
			/>
		),
		icon: PointBlue,
	},
	
	{
		value: "Classification",
		component: (
			<TabData
				twoButton
				cardImage={classify}
				cardClass="serice-carousel-card"
				headingText="Image Classification"
				paraText="Image Classification covers a broader perspective. It is used to identify that an image falls under which class. It can also be broken down into further components like tagging objects under different classes in a single image. It can be used in various use cases like assistance in educational systems, predicting human behaviour, boosting autonomous mobility etc"
			/>
		),
		icon: ClassificationBlue,
	},
	
	
	{
		value: "Polygons",
		component: (
			<TabData
				twoButton
				cardImage={Car}
				cardClass="serice-carousel-card"
				headingText="Polygons"
				paraText="Polygons are used to draw precise outlines on different objects in an image. Polygons are usually used in creating datasets for training precise application models."
			/>
		),
		icon: PolygonsBlue,
	},
	
	{
		value: "Transcription",
		component: (
			<TabData
				twoButton
				cardImage={transcriptionA}
				cardClass="serice-carousel-card"
				headingText="Semantic segmentation"
				paraText="Semantic segmentation is one of the precise annotation techniques. In this technique, each pixel is associated with a class. In other words, there is not a single pixel in the image left unassigned with a class"
			/>
		),
			icon: Keypoint,
	},
	
];

const dedicatedResourcesChildData = [
	{
		value: "Data Gathering",
		component: (
			<TabData
				twoButton
				cardImage={papaya}
				cardClass="serice-carousel-card"
				headingText="Data Gathering"
				paraText="There are use-cases where custom datasets are required and the customers want dedicated resources who will be producing datasets just for their AI models on a regular basis. We provide dedicated resources for these kinds of use-cases"
			/>
		),
		icon: box,
	},
	{
		value: "Data Annotation",
		component: (
			<TabData
				twoButton
				cardImage={alvin}
				cardClass="serice-carousel-card"
				headingText="Data Annotation"
				paraText="There are computer vision organisations that produce thousands of images on a weekly basis and need them annotated on the go. For these clients, we provide dedicated resources who are trained and assigned to their projects only."
			/>
		),
		icon: box,
	},
];

const dataGenerationChildData = [
	{
		value: "Data Gathering",
		component: (
			<TabData
				twoButton
				cardImage={papaya}
				cardClass="serice-carousel-card"
				headingText="Data Gathering"
				paraText="Our highly trained staff gathers standard quality datasets according to the need of your AI-model. The type of data can be images, video, or contextual data. Our team members gather real-life data from the required source point so you can be provided with the top-notch dataset that is the base requirement for your AI-model."
			/>
		),
		icon: box,
	},
	{
		value: "Synthetic Data Generation",
		component: (
			<TabData
				twoButton
				cardImage={alvin}
				cardClass="serice-carousel-card"
				headingText="Synthetic Data Generation"
				paraText="In several edge cases it is not possible to generate an adequate amount of real life datasets. For example, There is a need to train an AI-model which can predict a hurricane’s intensity and the possible destruction afterwards in a particular state. Over the past 100 years 25 hurricanes have hit the states of Florida which doesn’t generate a sufficient amount of dataset to train a model with high accuracy level. In cases like these we generate synthetic datasets which mimic the real-life datasets."
			/>
		),
		icon: box,
	},
];
