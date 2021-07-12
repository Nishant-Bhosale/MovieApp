const initialState = {
	watchLaterList: [],
	popularMovies: [],
	tvShows: [],
	topRated: [],
	upcomingMovies: [],
	error: false,
};

const reducer = (state = initialState, action) => {
	if (action.type === "ADD_MOVIE") {
		const watchLater = state.watchLaterList;
		watchLater.push(action.item);
		return {
			...state,
			watchLaterList: watchLater,
		};
	}
	if (action.type === "REMOVE_MOVIE") {
		const list = state.watchLaterList;
		return {
			...state,
			watchLaterList: list.filter((item) => {
				return item.id !== action.itemId;
			}),
		};
	}
	if (action.type === "ADD_SHOW") {
		const watchLater = state.watchLaterList;
		watchLater.push(action.item);
		return {
			...state,
			watchLaterList: watchLater,
		};
	}
	if (action.type === "SET_MOVIES") {
		return {
			...state,
			popularMovies: action.movies,
			error: false,
		};
	}
	if (action.type === "SET_TV_SHOWS") {
		return {
			...state,
			tvShows: action.tvShow,
			error: false,
		};
	}
	if (action.type === "SET_TOP_RATED") {
		return {
			...state,
			topRated: action.topRatedMovies,
			error: false,
		};
	}
	if (action.type === "SET_UPCOMING_MOVIES") {
		return {
			...state,
			upcomingMovies: action.upcomingMovies,
			error: false,
		};
	}
	if (action.type === "SET_ERROR") {
		return {
			...state,
			error: true,
		};
	}
	return state;
};

export default reducer;
