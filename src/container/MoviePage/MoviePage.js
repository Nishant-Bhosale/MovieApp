import React, { useEffect, useState } from "react";
import "./MoviePage.css";
import axios from "axios";
import MovieContainer from "../../components/MovieContainer/MovieContainer";
import ActorProfile from "../../components/ActorProfile/ActorProfile";
import Review from "../../components/Review/Review";
import Card from "../../movieImage/MovieCard/MovieCard";

import { Link } from "react-router-dom";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import LightSpeed from "react-reveal/LightSpeed";
const api_key = "25575b6919f268ac741d136aa573c4d4";
const base_url = "https://api.themoviedb.org/3";
const image_url = "https://image.tmdb.org/t/p/original/";

const MoviePage = (props) => {
	const [cast, setCast] = useState([]);
	const [reviews, setReviews] = useState([]);
	const [movieRecommendation, setMovieRecommendation] = useState([]);

	const [tvCast, setTvCast] = useState([]);
	const [tvReviews, setTvReviews] = useState([]);
	const [tvRecommendation, setTvRecommendation] = useState([]);
	const value = props.location.state.value;
	useEffect(() => {
		if (value.first_air_date) {
			axios
				.get(`${base_url}/tv/${value.id}/credits?api_key=${api_key}`)
				.then((res) => {
					setTvCast(res.data.cast);
				})
				.catch((error) => {
					setTvCast([]);
				});

			axios
				.get(`${base_url}/tv/${value.id}/reviews?api_key=${api_key}`)
				.then((res) => {
					setTvReviews(res.data.results);
				})
				.catch((error) => {
					setTvReviews([]);
				});

			axios
				.get(`${base_url}/tv/${value.id}/recommendations?api_key=${api_key}`)
				.then((res) => {
					setTvRecommendation(res.data.results);
				})
				.catch((error) => {
					setTvRecommendation([]);
				});
		} else {
			axios
				.get(`${base_url}/movie/${value.id}/credits?api_key=${api_key}`)
				.then((res) => {
					setCast(res.data.cast);
				})
				.catch((error) => {
					setCast([]);
				});

			axios
				.get(`${base_url}/movie/${value.id}/reviews?api_key=${api_key}`)
				.then((res) => {
					setReviews(res.data.results);
				})
				.catch((error) => {
					setReviews([]);
				});

			axios
				.get(`${base_url}/movie/${value.id}/recommendations?api_key=${api_key}`)
				.then((res) => {
					setMovieRecommendation(res.data.results);
				})
				.catch((error) => {
					setMovieRecommendation([]);
				});
		}
	}, [value.id, value.first_air_date]);

	return (
		<React.Fragment>
			<div className="movie-page__background">
				<img
					src={image_url + value.backdrop_path}
					alt=""
					style={{ height: "100%", width: "100%" }}
					loading="lazy"
				/>
				<div className="movie-page__inner-container">
					<div className="poster_image-container">
						<h1 style={{ color: "white" }}>
							{value.name || value.original_title}
						</h1>
						<Fade>
							<img
								className="poster_image"
								src={image_url + value.poster_path}
								alt=""
								loading="lazy"
							/>
						</Fade>
					</div>
					<LightSpeed right>
						<div className="movie-page__info">
							<h3>{value.overview}</h3>
							<p>RELEASE DATE: {value.release_date}</p>
							<h1>Average votes: {value.vote_average}</h1>
						</div>
					</LightSpeed>
				</div>
			</div>
			<Slide right>
				<h1 className="cast-heading">CAST</h1>
			</Slide>
			<Slide left>
				<MovieContainer>
					{value.first_air_date
						? tvCast.map((actor) => {
								return (
									<Link
										to={{
											pathname: "actor-info",
											state: { value: actor },
										}}
										key={actor.id}
									>
										<ActorProfile actor={actor} />
									</Link>
								);
						  })
						: cast.map((actor) => {
								return (
									<Link
										to={{
											pathname: "actor-info",
											state: { value: actor },
										}}
										key={actor.id}
									>
										<ActorProfile actor={actor} />
									</Link>
								);
						  })}
				</MovieContainer>
			</Slide>

			<h1 className="reviews-heading">Reviews</h1>
			{reviews.length > 0 ? (
				<Review review={reviews[0] || tvReviews[0]} />
			) : value.name ? (
				<h2 style={{ marginLeft: "4rem" }}>
					{"No Reviews Found for " + value.name}
				</h2>
			) : (
				<h2 style={{ marginLeft: "4rem" }}>
					{"No Reviews Found for " + value.original_title}
				</h2>
			)}
			<h1 className="recommendations">
				{value.first_air_date ? "RECOMMENDED TV SHOWS" : "RECOMMENDED MOVIES"}
			</h1>

			<MovieContainer>
				{value.first_air_date
					? tvRecommendation.map((tv) => {
							return <Card movie={tv} key={tv.id} />;
					  })
					: movieRecommendation.map((movie) => {
							return <Card movie={movie} key={movie.id} />;
					  })}
			</MovieContainer>
		</React.Fragment>
	);
};
export default MoviePage;
