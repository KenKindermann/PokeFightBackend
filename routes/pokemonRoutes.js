import express from "express";
import { allPokemons, pokemonById } from "../controllers/pokemonController.js";
const pokemonRouter = express.Router();

pokemonRouter.get("/", allPokemons);
pokemonRouter.get("/:id", pokemonById);

export default pokemonRouter;
