import axios from "axios";
const api_key = "25575b6919f268ac741d136aa573c4d4";
const base_url = "https://api.themoviedb.org/3";

export const addItemToWatchList = (item) => {
	return {
		type: "ADD_MOVIE",
		item: item,
	};
};

export const removeItemFromWatchList = (id) => {
	return {
		type: "REMOVE_MOVIE",
		itemId: id,
	};
};

export const addShowToWatchLater = (item) => {
	return {
		type: "ADD_SHOW",
		item: item,
	};
};

export const setMovies = (movies) => {
	return {
		type: "SET_MOVIES",
		movies: movies,
	};
};

export const setTvShows = (show) => {
	return {
		type: "SET_TV_SHOWS",
		tvShow: show,
	};
};

export const setTopRatedMovies = (movies) => {
	return {
		type: "SET_TOP_RATED",
		topRatedMovies: movies,
	};
};

export const setUpcomingMovies = (movies) => {
	return {
		type: "SET_UPCOMING_MOVIES",
		upcomingMovies: movies,
	};
};

export const errorHandler = () => {
	return {
		type: "SET_ERROR",
	};
};

export const fetchMoviesFromAPI = () => {
	return (dispatch) => {
		axios
			.get(`${base_url}/movie/popular?api_key=${api_key}`)
			.then((response) => {
				const movies = response.data.results;
				dispatch(setMovies(movies));
			})
			.catch((err) => {
				dispatch(errorHandler());
			});
	};
};

export const fetchTvShowsFromAPI = () => {
	return (dispatch) => {
		axios.get(`${base_url}/tv/popular?api_key=${api_key}`).then((res) => {
			const shows = res.data.results;
			console.log(shows);
			dispatch(setTvShows(shows));
		});
	};
};

export const fetchTopRatedMoviesFromAPI = () => {
	return (dispatch) => {
		axios.get(`${base_url}/tv/top_rated?api_key=${api_key}`).then((res) => {
			const topRatedMovies = res.data.results;
			dispatch(setTopRatedMovies(topRatedMovies));
		});
	};
};

export const fetchUpcomingMoviesFromAPI = () => {
	return (dispatch) => {
		axios.get(`${base_url}/movie/upcoming?api_key=${api_key}`).then((res) => {
			const upcomingMovies = res.data.results;
			dispatch(setUpcomingMovies(upcomingMovies));
		});
	};
};
