import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import ChildTab from "../../../components/CustomTabs/ChildTab";
import { ResponsiveCarousel } from "../../../components/CustomTabs/ResponsiveCarousel";

// Icons
import BoxBlue from "../../../images/NewCarouselIcons/box-blue.svg";
import ClassificationBlue from "../../../images/NewCarouselIcons/classification-blue.svg";
import KeyPointBlue from "../../../images/NewCarouselIcons/keypoin.svg";
import PointBlue from "../../../images/NewCarouselIcons/point-blue.svg";
import PolygonsBlue from "../../../images/NewCarouselIcons/polygons-blue.svg";
import PolylinesBlue from "../../../images/NewCarouselIcons/polylines.svg";
import SegmentationBlue from "../../../images/NewCarouselIcons/sementation.svg";

// import classification from "../../../images/CarouselIcons/classification.svg";
// import box from "../../../images/CarouselIcons/box.svg";
// import cuboid from "../../../images/CarouselIcons/Cuboid.svg";
// import point from "../../../images/CarouselIcons/point.svg";
// import polygons from "../../../images/CarouselIcons/Polygons.svg";
// import polylines from "../../../images/CarouselIcons/polylines.svg";
// import segmentation from "../../../images/CarouselIcons/segmentation.svg";
// import transcription from "../../../images/CarouselIcons/Transcription.svg";

import TabData from "../../../components/CustomTabs/TabData";
import useWindowSize from "../../../WindowSize";
import TypeOfService from "../../../images/typeofservice.png";

const ResponsiveItem = () => {
	const [selected, setSelected] = useState(1);
	const [childSelected, setChildSelected] = useState(1);
	const [option, selectedOption] = useState(TypeOfService);

	const handleClick = (e, selected) => {
		const optionValue = childData.find((element) => element.value === e);
		selectedOption(optionValue.img);
		setChildSelected(selected);
	};
	return (
		<>
			<Container>
				<Row className="py-3 d-flex justify-content-center">
					{childData.map((item, key) => {
						return (
							<div
								key={key}
								className="service-carousel-smallIcon"
							>
								<div
									className={`d-flex py-2 pr-3 cursor-pointer ${
										childSelected === key
											? "childSelected"
											: "notSelected"
									}`}
									value="box"
									onClick={() => handleClick(item.value, key)}
								>
									<img
										src={item.icon}
										alt="box"
										className={`tabIcon pr-2 ${
											childSelected === key
												? "childSelectedIcon"
												: "notSelectedIcon"
										}`}
									/>
									{item.value}
								</div>
							</div>
						);
					})}
				</Row>
			</Container>
			<div className="padding-right-sm max-width-md">
				<img src={option} className="img-fluid" />
			</div>
		</>
	);
};

export const TypesofAnnotion = ({ classes }) => {
	const width = useWindowSize();
	return (
		<Row className={classes}>
			{width > 992 ? (
				<>
					<ChildTab left />
				</>
			) : (
				<ResponsiveItem />
			)}
		</Row>
	);
};

const childData = [
	{
		value: "Box Blue",
		img: TypeOfService,
		icon: BoxBlue,
	},
	{
		value: "Classification",
		img: TypeOfService,
		icon: ClassificationBlue,
	},
	{
		value: "Point",
		img: TypeOfService,
		icon: PointBlue,
	},
	{
		value: "Key Point",
		img: TypeOfService,
		icon: KeyPointBlue,
	},
	{
		value: "Polygons",
		img: TypeOfService,
		icon: PolygonsBlue,
	},
	{
		value: "Polylines",
		img: TypeOfService,
		icon: PolylinesBlue,
	},
	{
		value: "Segmentation",
		img: TypeOfService,
		icon: SegmentationBlue,
	},
];
