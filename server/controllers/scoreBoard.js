const Score = require('../models/score');

async function index(req, res) {
	try {
		const scoreBoard = await Score.all;
		console.log(scoreBoard);
		res.status(200).json(scoreBoard);
	} catch {
		console.error(err);
		res.status(500).json({ err });
	}
}

async function show(req, res) {
	try {
		const score = await Score.findById(parseInt(req.params.id));
		console.log(score);
		res.status(200).json(score);
	} catch {
		console.error(err);
		res.status(404).json({ err });
	}
}

async function create(req, res) {
	try {
		const score = await Score.create(
			req.body.id,
			req.body.name,
			req.body.score
		);
		console.log(score);
		res.status(200).json(score);
	} catch {
		console.error(err);
		res.status(404).json({ err });
	}
}

module.exports = { index, show, create };
