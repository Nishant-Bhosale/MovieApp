import React from "react";
import "./ContainerHeading.css";
import Slide from "react-reveal/Slide";
const ContainerHeading = (props) => {
	return (
		<Slide left>
			<h1 className="container-heading">{props.children}</h1>
		</Slide>
	);
};

export default ContainerHeading;
