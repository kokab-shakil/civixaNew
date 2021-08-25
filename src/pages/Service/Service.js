import React from "react";
import Banner from "../../components/Banner";
import CustomSection from "../../components/CustomSection";
import { Classification } from "./components/Classification";
import { ServiceBanner } from "./components/ServiceBanner";
import { ServiceCard } from "./components/ServiceCard";
import { SmallBanner } from "./components/SmallBanner";
import { TextDetection } from "./components/TextDetection";
import { TypeofServices } from "./components/TypeofServices";
import { TypesofAnnotion } from "./components/TypesofAnnotion";
import "./Service.css";

export default function Service({ handleHeaderColor }) {
	handleHeaderColor("prussian-blue");
	const commonClasses =
		"d-flex align-items-center justify-content-center h-100";
	return (
		<>
			<CustomSection
				height="h-500 "
				bgColor="bg-prussian-blue"
				classes=""
			>
				<ServiceBanner
					classes={`${commonClasses} align-items-lg-start padding-all`}
				/>
			</CustomSection>
			<CustomSection height="h-auto" bgColor="bg-white">
				<TypesofAnnotion classes={`${commonClasses} padding-all`} />
			</CustomSection>
			<CustomSection height="h-auto" bgColor="bg-lightgray">
				<SmallBanner classes={`${commonClasses} padding-all`} />
			</CustomSection>
			<CustomSection
				height="h-auto"
				bgColor="bg-white"
				classes="typeofservices"
			>
				<TypeofServices
					classes={`${commonClasses} padding-y padding-left`}
				/>
			</CustomSection>
			<CustomSection height="h-auto" bgColor="bg-white">
				<ServiceCard classes={`${commonClasses} padding-all`} />
			</CustomSection>
			<CustomSection height="h-auto" bgColor="bg-white">
				<TextDetection classes={`${commonClasses} padding-all`} />
			</CustomSection>
			<CustomSection height="h-auto" bgColor="bg-white">
				<Classification classes={`${commonClasses} padding-all`} />
			</CustomSection>
			<CustomSection height="h-auto" bgColor="bg-white">
				<TextDetection classes={`${commonClasses} padding-all`} />
			</CustomSection>
		</>
	);
}
