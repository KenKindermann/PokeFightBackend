import express from "express";
import {
  fetchAllPokemonDetails,
  pokemonById,
} from "../controllers/pokemonController.js";
import { 
  updatePokemonScore,
  getLeaderboard
} from "../controllers/leaderboardController.js";

const pokemonRouter = express.Router();

pokemonRouter.get("/:id", pokemonById);
pokemonRouter.get("/", fetchAllPokemonDetails);
pokemonRouter.put("/game/save", updatePokemonScore);
pokemonRouter.get("/game/leaderboard", getLeaderboard);

export default pokemonRouter;
