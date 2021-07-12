import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Banner.css";
const Banner = () => {
	return (
		<Carousel
			autoPlay
			infiniteLoop
			interval={2000}
			showStatus={false}
			showThumbs={false}
			showIndicators={false}
		>
			<div class="carouselDiv">
				<img
					loading="lazy"
					src="https://image.tmdb.org/t/p/original/b0WmHGc8LHTdGCVzxRb3IBMur57.jpg"
					alt=""
				/>
			</div>
			<div class="carouselDiv">
				<img
					loading="lazy"
					src="https://image.tmdb.org/t/p/original//sAaGHo7ww5QMw6lk1ZWYrSPcgI7.jpg"
					alt=""
				/>
			</div>
			<div class="carouselDiv">
				<img
					loading="lazy"
					src="https://image.tmdb.org/t/p/original//lmZFxXgJE3vgrciwuDib0N8CfQo.jpg"
					alt=""
				/>
			</div>
		</Carousel>
	);
};

export default Banner;
