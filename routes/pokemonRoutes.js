import express from "express";
import {
  fetchAllPokemonDetails,
  pokemonById,
  updateLeaderboard
} from "../controllers/pokemonController.js";

const pokemonRouter = express.Router();

pokemonRouter.get("/:id", pokemonById);
pokemonRouter.get("/", fetchAllPokemonDetails);
pokemonRouter.post('/updateLeaderboard', updateLeaderboard);

export default pokemonRouter;
