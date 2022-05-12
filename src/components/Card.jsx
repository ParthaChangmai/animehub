import React from 'react';

const Card = ({ animeData }) => {
	console.log(animeData);
	return (
		<>
			<div className="flex flex-col mb-6 h-[320px] w-60 sm:mt-5 rounded-lg shadow-md shadow-white text-white bg-gray-900">
				<a href="#!">
					<img
						className="rounded-t-lg h-[200px] w-60 outline-none"
						src={animeData.images.webp.image_url}
						alt=""
					/>
				</a>
				<div className="p-2">
					<h5 className="font-bold pb-2">
						{animeData?.title?.length > 22
							? `${animeData.title.substring(0, 22)}...`
							: animeData.title}
					</h5>
					<p className=" text-base mb-4">
						{animeData?.synopsis.substring(0, 48)}...
					</p>

					<button
						type="button"
						className=" items-center inline-block px-4 py-2.5 bg-gray-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blugray-800 active:shadow-lg transition duration-150 ease-in-out"
					>
						More Details
					</button>
				</div>
			</div>
		</>
	);
};

export default Card;
