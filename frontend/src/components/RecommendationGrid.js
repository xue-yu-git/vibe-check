import React from "react";

const MediaCard = ({ item }) => (
	<div className='card'>
		<img src={item.background_image} alt={item.name} />
		<h3>{item.name}</h3>
	</div>
);

const RecommendationGrid = ({ items, loading }) => {
	if (loading) {
		return <p>Finding your vibe...</p>;
	}

	return (
		<div className='grid'>
			{items.map((item) => (
				<MediaCard key={item.id} item={item} />
			))}
		</div>
	);
};

export default RecommendationGrid;
