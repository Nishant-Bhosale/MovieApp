import React from "react";
import "./ListItem.css";
import Fade from "react-reveal/Fade";

const ListItem = (props) => {
	const imageURL = "https://image.tmdb.org/t/p/original/";

	return (
		<Fade>
			<div className="list-items">
				<div className="list-item_image">
					<img
						src={imageURL + props.data.poster_path}
						alt=""
						style={{ height: "100%", width: "100%" }}
						loading="lazy"
					/>
				</div>
				<div className="list-item_info">
					<h1 className="list-item_title">
						{props.data.original_title || props.data.name}
					</h1>
					<div className="list-item_overview">{props.data.overview}</div>
					<button onClick={props.clicked} className="remove-btn">
						REMOVE
					</button>
				</div>
			</div>
		</Fade>
	);
};

export default ListItem;
