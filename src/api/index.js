import axios from 'axios';

export const getAnime = async (q = 1) => {
	try {
		const res = await axios(
			`https://api.jikan.moe/v4/top/anime?page=${q} `,
			{}
		);

		return res.data.data;
	} catch (error) {
		console.log(error);
	}
};
export const getUpcomingAnime = async () => {
	try {
		const res = await axios(`https://api.jikan.moe/v4/seasons/now`);

		return res.data.data;
	} catch (error) {
		console.log(error);
	}
};
