import express from "express";
import axios from "axios";

const pokemonByIdRouter = express.Router();

pokemonByIdRouter.get("/:id", async (req, res) => {
    const {id} = req.params;
    console.log({id})

    try { 
      const pokemons = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      res.json(pokemons.results.id[0]);
      console.log(pokemons.results.id)
    } catch (error) {
      console.error("Failed to fetch Pokémon", error);
      res.status(500).send("Error fetching Pokémon data");
    }
  });

  export default pokemonByIdRouter;