import axios from 'axios';

export const getAnime = async (q) => {
	try {
		const res = await axios(`https://api.jikan.moe/v4/top/anime `, {
			params: {
				q: q,
			},
		});

		return res.data.data;
	} catch (error) {
		console.log(error);
	}
};
