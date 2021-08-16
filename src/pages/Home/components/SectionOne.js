import React from "react";
import { Col, Row } from "react-bootstrap";
import SquareIcon from "../../../components/SquareIcon/SquareIcon";
import dataLabelImage from "../../../images/datalabel.svg";
import group24 from "../../../images/home/group24.svg";
import group69 from "../../../images/home/group69.svg";
import group2640 from "../../../images/home/Group2640.svg";
import repeatGrid from "../../../images/RepeatGrid.svg";
import Heading from "../../../components/Heading";

export default function SectionOne({ classes }) {
	return (
		<Row className={classes}>
			<Col
				xs={12}
				md={6}
				className={"position-relative d-none d-md-block"}
			>
				<img
					src={dataLabelImage}
					className={"upper-grid top"}
					alt="data-label-web"
				></img>
				<img
					className={"hide-grid"}
					src={repeatGrid}
					alt="data-label-web"
				/>
			</Col>
			<Col xs={12} md={6} className={"pt-4 pr-0"}>
				<div className="w-70 ">
					<h1 className="data-heading ">
						<div className="d-block justify-content-center text-left">
							One stop shop for
							<div className="d-flex justify-content-md-start">
								<span className="pr-2 underlined">data</span>
								labeling
							</div>
						</div>
					</h1>
					<p>
						Civixa.ai is a trustable partner for all your computer
						vision needs. We help organisations in automating their
						business processes, from data generation to the
						deployment of trained AI-models
					</p>
				</div>
				<Row className="data-square-icon  d-flex justify-content-between align-items-center pt-4">
					<SquareIcon
						className={"icon-size mb-2 "}
						titleOne="99%"
						titleTwo="Accurate"
						Icon={group24}
						xs="4"
					/>
					<SquareIcon
						className={"icon-size mb-2"}
						Icon={group69}
						titleOne="Premium customer"
						titleTwo="support"
						xs="4"
					/>
					<SquareIcon
						className={"icon-size mb-2"}
						Icon={group2640}
						titleOne="Assisted data"
						titleTwo="labeling"
						xs="4"
					/>
				</Row>
			</Col>
			<Col className={"position-relative d-block d-md-none"}>
				<img
					src={dataLabelImage}
					className={"img-fluid"}
					alt="data-label-web"
				></img>
				{/* <img
					className={"hide-grid"}
					src={repeatGrid}
					alt="data-label-web"
				/> */}
			</Col>
		</Row>
	);
}
