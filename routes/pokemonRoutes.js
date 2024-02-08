import express from "express";
import {
  fetchAllPokemonDetails,
  pokemonById,
} from "../controllers/pokemonController.js";

const pokemonRouter = express.Router();

pokemonRouter.get("/:id", pokemonById);
pokemonRouter.get("/", fetchAllPokemonDetails);

export default pokemonRouter;
