import express from "express";
import axios from "axios";

const pokemonByIdRouter = express.Router();

pokemonByIdRouter.get("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const pokemons = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    res.json(pokemons.data);
  } catch (error) {
    res.status(500).send("Error fetching Pokémon data");
  }
});

export default pokemonByIdRouter;
