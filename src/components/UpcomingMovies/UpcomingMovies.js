import React from "react";
import "./UpcomingMovies.css";
import Card from "../../movieImage/MovieCard/MovieCard";
import MovieContainer from "../MovieContainer/MovieContainer";
import ContainerHeading from "../MovieContainer/ContainerHeading/ContainerHeading";

const TvShow = (props) => {
	return (
		<React.Fragment>
			<ContainerHeading>UPCOMING</ContainerHeading>
			<MovieContainer>
				{props.upcomingMovie.map((movie) => {
					return (
						<Card
							key={movie.id}
							btnClicked={() => props.clickedButton(movie.id)}
							movie={movie}
						/>
					);
				})}
			</MovieContainer>
		</React.Fragment>
	);
};

export default TvShow;
