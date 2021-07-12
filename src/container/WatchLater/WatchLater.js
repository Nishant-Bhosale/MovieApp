import React from "react";
import { connect } from "react-redux";
import "./WatchLater.css";
import ListItem from "../../components/ListItem/ListItem";
import { removeItemFromWatchList } from "../../actions/actions";
const WatchLater = (props) => {
	return (
		<div className="watch-later_list">
			{props.items.length ? (
				props.items.map((item) => {
					return (
						<ListItem
							key={item.id}
							data={item}
							clicked={() => props.removeMovie(item.id)}
						/>
					);
				})
			) : (
				<h1 style={{ textAlign: "center", marginTop: "7rem" }}>
					SORRY NO MOVIE OR SHOW FOUND IN WATCH LATER LIST
				</h1>
			)}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		items: state.watchLaterList,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		removeMovie: (id) => dispatch(removeItemFromWatchList(id)),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(WatchLater);
