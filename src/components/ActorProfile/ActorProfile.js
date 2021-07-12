import React from "react";
import "./ActorProfile.css";
import RubberBand from "react-reveal/RubberBand";
const image_url = "https://image.tmdb.org/t/p/original/";
const ActorProfile = (props) => {
	return (
		<RubberBand>
			<div className="actor-profile">
				<img
					src={image_url + props.actor.profile_path}
					className="actor-profile-img"
					alt=""
					loading="lazy"
				/>

				<div className="actor-profile__info">
					<p>Name: {props.actor.name}</p>
					<p>Character: {props.actor.character}</p>
				</div>
			</div>
		</RubberBand>
	);
};

export default ActorProfile;
