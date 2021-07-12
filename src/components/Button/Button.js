import React from "react";
import "./Button.css";
const Button = (props) => {
	return (
		<button className="add-button" onClick={props.clicked}>
			{props.children}
		</button>
	);
};

export default Button;
