import React from "react";
import { Col, Row } from "react-bootstrap";
import CustomButton from "../../../components/CustomButton/CustomButton";
import CustomCard from "../../../components/CustomCard/CustomCard";
import Heading from "../../../components/Heading";
import CovidModel from "../../../images/CovidModel.svg";
import useWindowSize from "../../../WindowSize";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "./newcomponents/ResponsiveCardCarousel.css";

import SwiperCore from "swiper/core";

export default function PreTrainedModels({ classes }) {
	const [width] = useWindowSize();
	return (
		<Row className={`${width > 502 ? classes : "padding-y padding-left"}`}>
			<Col className="d-block d-md-none">
				<Heading
					HeadingText={[
						<span className="position-relative">
							<span className="pr-2 underlined">Pre-trained</span>
						</span>,
						"models",
					]}
					headingClass="font-weight-900 text-left"
					para
					paraText="We have pre developed models which you can plug in your system. Reach out to us for more details."
				/>
			</Col>
			<Col
				xs={12}
				md={9}
				className={
					"d-flex flex-wrap justify-content-center justify-content-lg-around px-md-0"
				}
			>
				{width > 502 ? (
					<>
						<CustomCard
							icon={CovidModel}
							CardClasses={
								"d-flex flex-column align-items-center justify-content-around mr-3 mb-4 cardList"
							}
							HeadingText="COVID19 Model"
							headingClass="card-heading w-min-content text-center"
						/>
						<CustomCard
							icon={CovidModel}
							CardClasses={
								"d-flex flex-column align-items-center justify-content-around mr-3 mb-4 cardList"
							}
							HeadingText="Retail Plus"
							headingClass="card-heading w-min-content text-center"
						/>
						<CustomCard
							icon={CovidModel}
							CardClasses={
								"d-flex flex-column align-items-center justify-content-around mr-3 mb-4 cardList"
							}
							HeadingText="Autonomous Mobility"
							headingClass="card-heading w-min-content text-center"
						/>
						<CustomCard
							icon={CovidModel}
							CardClasses={
								"d-flex flex-column align-items-center justify-content-around mr-3 mb-4 cardList"
							}
							HeadingText="Sentiment Analysis"
							headingClass="card-heading w-min-content text-center"
						/>
					</>
				) : (
					<ResponsiveCardCarousel />
				)}
			</Col>
			<Col className="d-block d-md-none text-left">
				<CustomButton
					btnColor="green"
					btnText="Request A Demo"
					btnClasses="text-white mt-2 mr-3"
				/>
			</Col>
			<Col
				xs={12}
				md={3}
				className="flex-column d-none d-md-flex py-md-3"
			>
				<Heading
					HeadingText={[
						<span className="position-relative">
							<span className="pr-2 underlined">Pre-trained</span>
						</span>,
						"models",
					]}
					headingClass="font-weight-900 text-left "
					para
					paraText="We have pre developed models which you can plug in your system. Reach out to us for more details."
				/>
				<CustomButton
					btnColor="green"
					btnText="Request A Demo"
					btnClasses="text-white mt-2"
				/>
			</Col>
		</Row>
	);
}

const ResponsiveCardCarousel = () => {
	return (
		<Swiper
			freeMode={true}
			className={"ResponsiveCardCarousel"}
			slidesPerView={"auto"}
		>
			{data.map((item, key) => {
				return (
					<SwiperSlide>
						<CustomCard
							icon={item.img}
							CardClasses={
								"d-flex flex-column align-items-center justify-content-around mr-3 mb-4 cardList"
							}
							HeadingText={item.name}
							headingClass="card-heading w-min-content text-center"
						/>
					</SwiperSlide>
				);
			})}
			{/* <div className="d-none">
						<span className="swiper-button-prev">
							<i class="fas fa-arrow-left"></i>
						</span>
						<span className="swiper-button-next">
							<i class="fas fa-arrow-right"></i>
						</span>
					</div> */}
		</Swiper>
	);
};

const data = [
	{
		name: "COVID19 Model",
		img: CovidModel,
	},
	{
		name: "Retail Plus",
		img: CovidModel,
	},
	{
		name: "Autonomous Mobility",
		img: CovidModel,
	},
	{
		name: "Sentiment Analysis",
		img: CovidModel,
	},
];

// 503
