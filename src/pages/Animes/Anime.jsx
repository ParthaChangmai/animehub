import React from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import Card from '../../components/Card';
import CardList from '../../components/CardList';

const Anime = () => {
	return (
		<div className="px-8 flex flex-col mb-11  w-full gap-7  bg-black flex-grow">
			<div className="flex justify-center items-center mt-[95px] ">
				<BiSearchAlt className="text-white text-3xl" />
				<input
					placeholder="Search Anime"
					className="rounded-lg w-3/5 h-7 items-center outline-none bg-cyan-300 text-white"
					type="text"
				/>
			</div>
			<div className="justify-items-center grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-7">
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<CardList />
			</div>
			{/* pagination  */}
		</div>
	);
};

export default Anime;
