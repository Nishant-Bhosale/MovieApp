import React from "react";
import "./Review.css";
import Slide from "react-reveal/Slide";
// const image_url = "https://image.tmdb.org/t/p/original/";
const Review = (props) => {
	const authorDetails = props.review.author_details;
	return (
		<Slide left>
			<div className="review">
				<div className="author-info">
					<h2>
						<strong>Review By: </strong>
						{authorDetails.name}
					</h2>
					<p>{props.review.content}</p>
				</div>
			</div>
		</Slide>
	);
};

export default Review;
