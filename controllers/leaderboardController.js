import Pokemon from "../models/leaderboard.js";

export const updatePokemonScore = async (req, res) => {
  const { winnerId, loserId } = req.body;

  try {
    const winner = await Pokemon.findOne({ id: winnerId });
    winner.wins += 1;
    await winner.save();

    const loser = await Pokemon.findOne({ id: loserId });
    loser.losses += 1;
    await loser.save();

    res.status(201).send("Nice, it works!");
  } catch (error) {
    res.status(500).send(error.message);
  }
};
