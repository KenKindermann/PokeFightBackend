import express from "express";
import axios from "axios";

const pokemonRouter = express.Router();
const url = "https://pokeapi.co/api/v2/pokemon?limit=150&offset=0";

pokemonRouter.get("/", async (req, res) => {
  try {
    const pokemons = await axios.get(url);
    const data = res.json(pokemons.data);
  } catch (error) {
    console.error("Failed to fetch Pokémon", error);
    res.status(500).send("Error fetching Pokémon data");
  }
});

export default pokemonRouter;
