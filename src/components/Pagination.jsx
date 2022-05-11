import React from 'react';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';

const Pagination = () => {
	const activeClass =
		'px-2 rounded-full cursor-pointer bg-slate-500 focus:bg-slate-500';
	const nonActiveClass =
		'px-2 hover:rounded-full cursor-pointer hover:bg-slate-500 focus:bg-slate-500';

	return (
		<footer className=" fixed bottom-0 w-full text-white p-2 flex justify-center items-center">
			<div className="flex items-center bg-cyan-800 rounded-full">
				<span className={nonActiveClass}>
					<AiFillCaretLeft />
				</span>
				<span className={activeClass}>1</span>
				<span className={nonActiveClass}>2</span>
				<span className={nonActiveClass}>3</span>
				<span className={nonActiveClass}>4</span>
				<span className={nonActiveClass}>5</span>
				<span className={nonActiveClass}>
					<AiFillCaretRight />
				</span>
			</div>
		</footer>
	);
};

export default Pagination;
