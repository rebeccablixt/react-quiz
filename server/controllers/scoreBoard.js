const Score = require('../models/score');

async function index(req, res) {
	try {
		const scoreBoard = await Score.all;
		res.status(200).json({ data: scoreBoard });
	} catch {
		console.error(err);
		res.status(500).json({ error: err });
	}
};

module.exports = { index };
