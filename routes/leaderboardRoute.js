import express from "express";

const leaderboardRouter = express.Router();
let leaderboard = {};

leaderboardRouter.post("/addPoints", async (req, res) => {
    const { name, points } = req.body;

    if (!name || !points) {
        return res.status(400).send("Name and points are required!")
    }

    if (!leaderboard[name]) {
        leaderboard[name] = points;
    } else {
        leaderboard[name] += points;
    }

    res.status(200).send("Points added!")
})

leaderboardRouter.get("/getLeaderboard", (req,res) => {
    res.json(leaderboard)
})

export default leaderboardRouter