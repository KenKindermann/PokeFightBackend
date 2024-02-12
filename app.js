import express from "express";
import cors from "cors";
import pokemonRouter from "./routes/pokemonRoutes.js";
import leaderboardRouter from "./routes/leaderboardRoute.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use("/pokemon", pokemonRouter)
app.use("/:id", pokemonRouter);
app.use("/leaderboard", leaderboardRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
