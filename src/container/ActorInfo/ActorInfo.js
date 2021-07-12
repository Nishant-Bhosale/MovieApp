import React, { useEffect, useState } from "react";
import "./ActorInfo.css";
import axios from "axios";
import ActorProfileInfo from "../../components/ActorProfile/ActorProfileInfo/ActorProfileInfo";

const ActorInfo = (props) => {
	const api_key = "25575b6919f268ac741d136aa573c4d4";
	const base_url = "https://api.themoviedb.org/3";
	const image_url = "https://image.tmdb.org/t/p/original/";
	const actorInfo = props.location.state.value;
	const [actor, setActor] = useState({});

	const actorId = actorInfo.id;
	useEffect(() => {
		axios
			.get(`${base_url}/person/${actorId}?api_key=${api_key}`)
			.then((res) => {
				setActor(res.data);
			});
	}, [actorId]);
	return (
		<React.Fragment>
			<div className="container-div" style={{ marginTop: "4rem" }}>
				<div className="profile-container">
					<img
						src={image_url + actor.profile_path}
						className="profile-actor-image"
						alt=""
						loading="lazy"
					/>
				</div>
				<ActorProfileInfo actor={actor} />
			</div>
		</React.Fragment>
	);
};

export default ActorInfo;
