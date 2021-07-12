import React from "react";
import { Route } from "react-router-dom";
import App from "./App";
import SearchPage from "./components/SearchPage";
import NavBar from "./components/NavBar/NavBar";
import WatchLater from "./container/WatchLater/WatchLater";
import MoviePage from "./container/MoviePage/MoviePage";
import ActorInfo from "./container/ActorInfo/ActorInfo";
export default function MainApp() {
	return (
		<React.Fragment>
			<NavBar />
			<div>
				<Route path="/" exact component={App} />

				<Route path="/search-page" component={SearchPage} />

				<Route path="/watch-later" component={WatchLater} />

				<Route path="/moviepage" component={MoviePage} />
				<Route path="/actor-info" component={ActorInfo} />
			</div>
		</React.Fragment>
	);
}

// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Nishant-Bhosale/MovieApp.git
// git push -u origin main
