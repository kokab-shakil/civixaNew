import React from "react";
import { Col, Nav, Row, Tab } from "react-bootstrap";

// Icons
import BoxBlue from "./Images/box-blue.svg";
import KeyPointBlue from "./Images/keypoin.svg";
import PointBlue from "./Images/point-blue.svg";
import PolylinesBlue from "./Images/polylines.svg";
import PolygonsBlue from "./Images/polygons-blue.svg";
import SegmentationBlue from "./Images/sementation.svg";
import CuboidBlue from "./Images/cuboid.svg";

import RepeatGrid from "../../images/RepeatGrid.svg";

// import classification from "./TabIcons/classification.svg";
// import box from "./TabIcons/box.svg";
// import cuboid from "./TabIcons/Cuboid.svg";
// import point from "./TabIcons/point.svg";
// import polygons from "./TabIcons/Polygons.svg";
// import polylines from "./TabIcons/polylines.svg";
// import segmentation from "./TabIcons/segmentation.svg";
// import transcription from "./TabIcons/Transcription.svg";
import TabData from "./TabData";
import Heading from "../Heading";
import { TabLeft } from "./TabLeft";
import RightImage from "./RightImage.png";

export default function ChildTab({ left }) {
	return (
		<Tab.Container id="Tabs" defaultActiveKey="BoxBlue">
			<Row
				className={`childTab d-flex justify-content-center ${
					left && "left position-relative"
				}`}
			>
				{left && (
					<img
						src={RepeatGrid}
						alt="Repeat grid"
						className="topLeftDots"
					/>
				)}
				<Col
					sm={12}
					md={left ? 3 : "auto"}
					className={`d-flex flex-column pb-3 ${
						left && "zindex1 bg-white p-4"
					}`}
				>
					{left && (
						<Heading
							HeadingText="Types Of Annotation"
							headingClass="text-small font-weight-900"
						/>
					)}
					<Nav
						variant="pills"
						className={`d-flex justify-content-center mb-2 ${
							left && "flex-row flex-lg-column w-max"
						}`}
					>
						<Nav.Item className="mb-2">
							<Nav.Link eventKey="BoxBlue">
								<img
									src={BoxBlue}
									alt="BoxBlue"
									className={"tabIcon pr-2"}
								/>
								Box Blue
							</Nav.Link>
						</Nav.Item>
						<Nav.Item className="mb-2">
							<Nav.Link eventKey="polylines">
								<img
									src={PolylinesBlue}
									alt="Polylines"
									className={"tabIcon pr-2"}
								/>
								Polylines
							</Nav.Link>
						</Nav.Item>
						<Nav.Item className="mb-2">
							<Nav.Link eventKey="points">
								<img
									src={PointBlue}
									alt="Point"
									className={"tabIcon pr-2"}
								/>
								Point
							</Nav.Link>
						</Nav.Item>
						<Nav.Item className="mb-2">
							<Nav.Link eventKey="cuboid">
								<img
									src={CuboidBlue}
									alt="Cuboid"
									className={"tabIcon pr-2"}
								/>
								Cuboid
							</Nav.Link>
						</Nav.Item>
						<Nav.Item className="mb-2">
							<Nav.Link eventKey="polygons">
								<img
									src={PolygonsBlue}
									alt="Polygons"
									className={"tabIcon pr-2"}
								/>
								Polyons
							</Nav.Link>
						</Nav.Item>
						<Nav.Item className="mb-2">
							<Nav.Link eventKey="segmentation">
								<img
									src={SegmentationBlue}
									alt="Segmentation"
									className={"tabIcon pr-2"}
								/>
								Segmentation
							</Nav.Link>
						</Nav.Item>
					</Nav>
				</Col>
				<Col sm={8} md={left ? 9 : 8} className="">
					<Tab.Content>
						<Tab.Pane eventKey="BoxBlue">
							{left ? (
								<TabLeft tabLeftImage={RightImage} />
							) : (
								<TabData />
							)}
						</Tab.Pane>
						<Tab.Pane eventKey="polylines">
							{left ? (
								<TabLeft tabLeftImage={RightImage} />
							) : (
								<TabData />
							)}
						</Tab.Pane>
						<Tab.Pane eventKey="points">
							{left ? (
								<TabLeft tabLeftImage={RightImage} />
							) : (
								<TabData />
							)}
						</Tab.Pane>
						<Tab.Pane eventKey="cuboid">
							{left ? (
								<TabLeft tabLeftImage={RightImage} />
							) : (
								<TabData />
							)}
						</Tab.Pane>
						<Tab.Pane eventKey="polygons">
							{left ? (
								<TabLeft tabLeftImage={RightImage} />
							) : (
								<TabData />
							)}
						</Tab.Pane>
						<Tab.Pane eventKey="segmentation">
							{left ? (
								<TabLeft tabLeftImage={RightImage} />
							) : (
								<TabData />
							)}
						</Tab.Pane>
					</Tab.Content>
				</Col>
			</Row>
		</Tab.Container>
	);
}
