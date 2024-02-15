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

export const getLeaderboard = async (req, res) => {
  try {
    const leaderboardData = await Pokemon.find().sort({ wins: -1 }).limit(10);

    res.json(leaderboardData);
  } catch (error) {
    console.error("Error fetching leaderboard data", error);
    res.status(500).send("Error fetching leaderboard data");
  }
};