import React from 'react';
import { BiMoviePlay } from 'react-icons/bi';
import { MdOutlineMovieFilter } from 'react-icons/md';
import { GiCharacter } from 'react-icons/gi';

function Navbar() {
	return (
		<div className="fixed w-full  h-[50px] sm:h-[80px] flex flex-1 justify-between items-center px-4  bg-[#182647] ">
			<div className="flex items-center cursor-pointero text-white text-2xl md:pl-10 cursor-pointer">
				<BiMoviePlay />
				<p className="mb-1 pl-1"> AnimeHub</p>
			</div>
			<div className="flex gap-5  pr-10">
				<div className="flex items-center cursor-pointero text-white text-2xl cursor-pointer">
					<MdOutlineMovieFilter />
					<p className="mb-1 pl-1"> Animes</p>
				</div>
				<div className="flex items-center cursor-pointero text-white text-2xl cursor-pointer">
					<GiCharacter />
					<p className="mb-1 pl-1"> Characters</p>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
