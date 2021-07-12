import React from "react";
import "./ActorProfileInfo.css";
import ActorInfoCard from "../../ActorInfoCard/ActorInfoCard";
const ActorProfileInfo = (props) => {
	return (
		<div className="actor-profile-info">
			<div>
				<ActorInfoCard actor={props.actor} />
			</div>
			<h1>{props.actor.name}</h1>
			<p>
				{props.actor.biography
					? props.actor.biography
					: "NO BIOGRAPHY FOUND FOR " + props.actor.name}
			</p>
		</div>
	);
};
export default ActorProfileInfo;
