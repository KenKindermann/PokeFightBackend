import Pokemon from "../models/leaderboard.js";

export const updatePokemonScore = async (req, res) => {
  const { winnerId, loserId } = req.body;

  try {
    const [winner, loser] = await Promise.all([
      Pokemon.findOne({ id: winnerId }),
      Pokemon.findOne({ id: loserId })
    ]);

    if (!winner || !loser) {
      return res.status(404).send("Winner or loser not found");
    }

    winner.wins += 1;
    loser.losses += 1;

    await Promise.all([winner.save(), loser.save()]);

    res.status(201).send("Nice, it works!");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const getLeaderboard = async (req, res) => {
  try {
    const leaderboardData = await Pokemon.find().sort({ score: -1 }).limit(10);

    res.json(leaderboardData);
  } catch (error) {
    console.error("Error fetching leaderboard data", error);
    res.status(500).send("Error fetching leaderboard data");
  }
};