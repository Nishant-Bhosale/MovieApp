import React from "react";
import "./MovieCard.css";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

const MovieCard = (props) => {
	return (
		<React.Fragment>
			<div className="card-container">
				<Link to={{ pathname: "/moviepage", state: { value: props.movie } }}>
					<img
						src={
							"https://image.tmdb.org/t/p/original/" + props.movie.poster_path
						}
						className="image"
						alt=""
						onClick={props.clicked}
						loading="lazy"
					></img>
				</Link>
				<div className="movie-info">
					<strong>{props.movie.original_title || props.movie.name}</strong>
					<p className="release-date">
						{props.movie.release_date || props.movie.first_air_date}
					</p>
				</div>
				<Button clicked={props.btnClicked}>+</Button>
			</div>
		</React.Fragment>
	);
};

export default MovieCard;
