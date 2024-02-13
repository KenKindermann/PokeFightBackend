import express from "express";
import {
  fetchAllPokemonDetails,
  pokemonById,
  updatePokemonScore,
  getLeaderboard
} from "../controllers/pokemonController.js";

const pokemonRouter = express.Router();

pokemonRouter.get("/:id", pokemonById);
pokemonRouter.get("/", fetchAllPokemonDetails);
pokemonRouter.post('/game/update-score', updatePokemonScore);
pokemonRouter.get('/game/leaderboard', getLeaderboard)

export default pokemonRouter;
