import express from "express";
import axios from "axios";

const pokemonRouter = express.Router();

pokemonRouter.get("/", async (req, res) => {
  try {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=150&offset=0";
    const pokemons = await axios.get(url);
    res.json(pokemons.data);
  } catch (error) {
    console.error("Failed to fetch Pokémon", error);
    res.status(500).send("Error fetching Pokémon data");
  }
});

export default pokemonRouter;
