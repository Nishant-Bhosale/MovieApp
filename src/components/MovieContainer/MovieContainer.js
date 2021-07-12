import React from "react";
import "./MovieContainer.css";

const MovieContainer = (props) => {
	return <div className="movie-card">{props.children}</div>;
};

export default MovieContainer;
