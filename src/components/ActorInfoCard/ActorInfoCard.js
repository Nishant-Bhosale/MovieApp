import React from "react";
import "./ActorInfoCard.css";
const ActorInfoCard = (props) => {
	return (
		<div className="actor-card">
			<p>
				<strong>NAME: </strong>
				{props.actor.name}
			</p>
			<p>
				<strong>BIRTH DATE: </strong>
				{props.actor.birthday}
			</p>

			<p>
				<strong>DEPARTMENT: </strong>
				{props.actor.known_for_department}
			</p>
		</div>
	);
};

export default ActorInfoCard;
