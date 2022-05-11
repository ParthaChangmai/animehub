import React from 'react';

const Card = () => {
	return (
		<>
			<div className="flex flex-col mb-6 h-72 w-60 sm:mt-11 rounded-lg shadow-md shadow-white text-white bg-gray-900">
				<a href="#!">
					<img
						className="rounded-t-lg "
						src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
						alt=""
					/>
				</a>
				<div className="p-2">
					<h5 className=" text-xl font-bold mb-2">Card title</h5>
					<p className=" text-base mb-4">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</p>
					<button
						type="button"
						className=" inline-block px-4 py-2.5 bg-gray-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blugray-800 active:shadow-lg transition duration-150 ease-in-out"
					>
						More Details
					</button>
				</div>
			</div>
		</>
	);
};

export default Card;
