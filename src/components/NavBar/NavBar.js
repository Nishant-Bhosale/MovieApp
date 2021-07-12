import React from "react";
import "./NavBar.css";
import SearchIcon from "./SearchBar/SearchBar";
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<nav className="navigation">
			<div className="logo-brand">
				<Link to="/" className="link">
					Movie APP
				</Link>
			</div>
			<div className="navigation-container">
				<div className="navigation-item">
					<Link to="/watch-later" className="link">
						My List
					</Link>
				</div>
				<div className="navigation-item_container">
					<SearchIcon />
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
