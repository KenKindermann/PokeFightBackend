import express from "express";
import cors from "cors";
import pokemonRouter from "./routes/pokemonRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(cors());
app.use("/pokemon", pokemonRouter)
app.use("/:id", pokemonRouter);
app.use("/leaderboard", leaderboardRoute)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
