import React, { useState } from "react";
import "./TvShow.css";
import Card from "../../movieImage/MovieCard/MovieCard";
import MovieContainer from "../MovieContainer/MovieContainer";
import ContainerHeading from "../MovieContainer/ContainerHeading/ContainerHeading";
import Jello from "react-reveal/Jello";
import Slide from "react-reveal/Slide";

const TvShow = (props) => {
	const [toggleType, setToggleType] = useState(false);

	let tvShow = props.tvShows;
	if (toggleType) tvShow = props.topRatedShow;

	return (
		<React.Fragment>
			<ContainerHeading>TV Shows</ContainerHeading>
			<div className="btn-container">
				<Jello>
					<button onClick={() => setToggleType(false)} className="btn">
						TV
					</button>
				</Jello>
				<Jello>
					<button
						onClick={() => {
							setToggleType(true);
						}}
						className="btn"
					>
						Top Rated
					</button>
				</Jello>
			</div>
			<Slide right>
				<MovieContainer>
					{tvShow.map((show) => {
						return (
							<Card
								btnClicked={() => props.clickedButton(show.id)}
								movie={show}
								key={show.id}
							/>
						);
					})}
				</MovieContainer>
			</Slide>
		</React.Fragment>
	);
};

export default TvShow;
