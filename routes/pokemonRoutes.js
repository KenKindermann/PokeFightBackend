import express from "express";
import {
  fetchAllPokemonDetails,
  pokemonById,
  getLeaderboard,
} from "../controllers/pokemonController.js";
import { updatePokemonScore } from "../controllers/leaderboardController.js";

const pokemonRouter = express.Router();

pokemonRouter.get("/:id", pokemonById);
pokemonRouter.get("/", fetchAllPokemonDetails);
pokemonRouter.put("/game/update-score/", updatePokemonScore);
pokemonRouter.get("/game/leaderboard", getLeaderboard);

export default pokemonRouter;
