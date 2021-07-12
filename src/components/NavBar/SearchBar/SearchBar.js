import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./SearchBar.css";

const SearchBar = () => {
	const [searchValue, setSearchValue] = useState("");
	const [fetchedResult, setFetchedResult] = useState([]);
	const [loading, setLoading] = useState(true);
	const inputRef = useRef();
	const searchURL =
		"https://api.themoviedb.org/3/search/movie?api_key=25575b6919f268ac741d136aa573c4d4&query=";

	useEffect(() => {
		setTimeout(() => {
			if (searchValue !== "" && searchValue === inputRef.current.value) {
				axios.get(searchURL + searchValue).then((res) => {
					const result = res.data.results;
					setFetchedResult(result);
					setLoading(false);
				});
			}
		}, 500);
	}, [searchValue, inputRef]);

	return (
		<React.Fragment>
			<input
				className="search-bar"
				ref={inputRef}
				placeholder="Search for Movies, TvShows, ..."
				value={searchValue}
				onChange={(e) => {
					setSearchValue(e.target.value);
				}}
			/>

			<Link
				to={{
					pathname: "/search-page",
					state: {
						value: fetchedResult,
						loading: loading,
					},
				}}
			>
				<button className="search-btn">Search</button>
			</Link>
		</React.Fragment>
	);
};

export default SearchBar;
