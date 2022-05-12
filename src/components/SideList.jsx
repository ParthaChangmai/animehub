import React, { useState, useEffect } from 'react';
import { getUpcomingAnime } from '../api';

const SideList = () => {
	const [animesData, setAnimesData] = useState(null);

	useEffect(() => {
		getUpcomingAnime().then((data) => {
			setAnimesData(data);
		});
	}, []);
	console.log(animesData);
	return (
		<div>
			<div className="flex justify-center border-b-2  text-lg font-bold">
				Latest Anime
			</div>

			{animesData &&
				animesData.map((e) => (
					<div className="ml-2 mb-2">
						<div className="text-base font-bold">{e.title}</div>
						<div className="text-sm ">Episodes: {e.episodes}</div>
						<div className="text-sm ">Score: {e.score}/10</div>
					</div>
				))}
		</div>
	);
};

export default SideList;
