import React from "react";
import "./SearchPage.css";
import Card from "../movieImage/MovieCard/MovieCard";
import { Link } from "react-router-dom";

export default function Test(props) {
	let noResult = null;
	const newState = props.location.state.value;

	if (newState.length <= 0) {
		noResult = (
			<h1
				style={{ margin: "9rem auto", textAlign: "center", fontSize: "3rem" }}
			>
				NO MOVIE OR TV SHOW FOUND
			</h1>
		);
	}
	return (
		<React.Fragment>
			{noResult}
			<div className="search-container">
				<div className="cont">
					{newState.map((item) => {
						return (
							<Link
								key={item.id}
								to={{
									pathname: "/moviepage",
									state: {
										value: item,
									},
								}}
								className="custom-link"
							>
								{" "}
								<Card movie={item} />
							</Link>
						);
					})}
				</div>
			</div>
		</React.Fragment>
	);
}
