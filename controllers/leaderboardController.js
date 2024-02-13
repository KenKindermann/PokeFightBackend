import Pokemon from "../models/leaderboard.js";

export const updatePokemonScore = async (req, res) => {
  const { winnerId, loserId } = req.body;

  try {
    const winner = await Pokemon.findById(winnerId);
    winner.wins += 1;
    await winner.save();

    const loser = await Pokemon.findById(loserId);
    loser.losses += 1;
    await loser.save();

    res.status(201).send("Error updating Pokemon score");
  } catch (error) {
    console.error("Error updating Pokemon score", error);
    res.status(500).send("Error updating Pokemon score");
  }
};
