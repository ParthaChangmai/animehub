import { data } from 'autoprefixer';
import React, { useState, useEffect } from 'react';
import { getAnime } from '../api';
import Card from './Card';

const CardList = () => {
	const [animesData, setAnimesData] = useState(null);

	useEffect(() => {
		getAnime().then((data) => {
			setAnimesData(data);
		});
	}, []);

	return (
		<>
			{animesData?.map((animeData) => (
				<Card animeData={animeData} />
			))}
		</>
	);
};

export default CardList;
