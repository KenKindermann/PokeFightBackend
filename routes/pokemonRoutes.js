import express from "express";
import axios from "axios";
import { getAllPokemons } from "../controllers/allPokemonController.js";

const pokemonRouter = express.Router();
pokemonRouter.get("/", getAllPokemons);

export default pokemonRouter;
