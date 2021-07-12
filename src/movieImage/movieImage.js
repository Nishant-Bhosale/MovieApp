import React from "react";
import "./movieImage.css";
import Card from "./MovieCard/MovieCard";
import MovieContainer from "../components/MovieContainer/MovieContainer";
import ContainerHeading from "../components/MovieContainer/ContainerHeading/ContainerHeading";
const MovieImage = (props) => {
	return (
		<React.Fragment>
			<ContainerHeading>Popular Movies</ContainerHeading>
			<MovieContainer>
				{props.movieArray.map((movie) => {
					return (
						<Card
							key={movie.id}
							movie={movie}
							btnClicked={() => props.clickedButton(movie.id)}
						/>
					);
				})}
			</MovieContainer>
		</React.Fragment>
	);
};

export default MovieImage;
