import "./App.css";
import React, { useEffect } from "react";
import Movies from "./movieImage/movieImage";
import TvShow from "./components/TvShow/TvShow";
import Slide from "react-reveal/Slide";
import {
	addItemToWatchList,
	addShowToWatchLater,
	fetchMoviesFromAPI,
	fetchTopRatedMoviesFromAPI,
	fetchTvShowsFromAPI,
	fetchUpcomingMoviesFromAPI,
} from "./actions/actions";
import UpcomingMovie from "./components/UpcomingMovies/UpcomingMovies";
import { connect } from "react-redux";
import Banner from "./components/Banner/Banner";

function App(props) {
	useEffect(() => {
		// Get's all the popular movies
		props.fetchMovies();
		//Get's all the popular tv shows
		props.fetchTvShows();
		//Get's all the latest tv shows
		props.fetchTopRated();
		//Get's all the upcoming tv shows
		props.fetchUpcomingMovies();
		// eslint-disable-next-line
	}, []);

	const clickedMovieButtonHandler = (id) => {
		singleFunction(props.movies, id);
	};

	const clickedShowHandler = (id) => {
		singleFunction(props.tvShows, id);
	};

	const clickedUMovieHandler = (id) => {
		singleFunction(props.upcomingMovies, id);
	};

	const singleFunction = (movie, id) => {
		movie.forEach((movie) => {
			if (movie.id === id && !props.watchLaterArr.includes(movie)) {
				props.addMovieToList(movie);
			}
		});
	};

	return (
		<div className="App">
			<Banner />

			<Slide left>
				<Movies
					movieArray={props.movies}
					clickedButton={clickedMovieButtonHandler}
				/>
			</Slide>

			<TvShow
				tvShows={props.tvShows}
				clickedButton={clickedShowHandler}
				topRatedShow={props.topRated}
			/>

			<Slide left>
				<UpcomingMovie
					upcomingMovie={props.upcomingMovies}
					clickedButton={clickedUMovieHandler}
				/>
			</Slide>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		watchLaterArr: state.watchLaterList,
		movies: state.popularMovies,
		tvShows: state.tvShows,
		topRated: state.topRated,
		upcomingMovies: state.upcomingMovies,
		error: state.error,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addMovieToList: (movieArr) => dispatch(addItemToWatchList(movieArr)),
		addShowToList: (showArr) => dispatch(addShowToWatchLater(showArr)),
		fetchMovies: () => dispatch(fetchMoviesFromAPI()),
		fetchTvShows: () => dispatch(fetchTvShowsFromAPI()),
		fetchTopRated: () => dispatch(fetchTopRatedMoviesFromAPI()),
		fetchUpcomingMovies: () => dispatch(fetchUpcomingMoviesFromAPI()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
