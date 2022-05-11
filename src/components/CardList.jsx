import { data } from 'autoprefixer';
import React, { useState, useEffect } from 'react';
import { getAnime } from '../api';

const CardList = () => {
	const [animesData, setAnimesData] = useState(null);

	console.log(animesData);

	useEffect(() => {
		getAnime().then((data) => {
			setAnimesData(data);
		});
	}, []);

	return (
		<div>
			{animesData?.map((animeData) => (
				<p className="text-white">{animeData.title}</p>
			))}
		</div>
	);
};

export default CardList;
