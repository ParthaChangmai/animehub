import React from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import Card from '../../components/Card';
import CardList from '../../components/CardList';
import Pagination from '../../components/Pagination';
import SideList from '../../components/SideList';

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
			<div className="sm:flex sm:flex-row">
				<div className="sm:w-4/5 justify-items-center grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
					<CardList />
					<Pagination />
				</div>
				<div className="hidden sm:block mt-5 min-h-screen rounded-lg text-white bg-gray-900 w-1/5">
					<SideList />
				</div>
			</div>

			{/* pagination  */}
		</div>
	);
};

export default Anime;
