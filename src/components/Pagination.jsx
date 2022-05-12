import React from 'react';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';

const Pagination = () => {
	return (
		<footer className=" fixed bottom-0 w-full text-white p-4 flex justify-center items-center">
			<div className="flex items-center bg-cyan-800 rounded-full">
				<div className="px-2 text-2xl hover:rounded-full cursor-pointer hover:bg-slate-500 focus:bg-slate-500">
					<AiFillCaretLeft />
				</div>

				<div className="px-2 text-2xl hover:rounded-full cursor-pointer hover:bg-slate-500 focus:bg-slate-500">
					<AiFillCaretRight />
				</div>
			</div>
		</footer>
	);
};

export default Pagination;
