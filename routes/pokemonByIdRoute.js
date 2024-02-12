// import express from "express";
// import axios from "axios";

// const pokemonByIdRouter = express.Router();

// pokemonByIdRouter.get("/:id", async (req, res) => {
//     const id = req.params.id;

//     try { 
//       const pokemons = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
//       res.json(pokemons.data);
//       console.log(pokemons.data)
//     } catch (error) {
//       console.error("Failed to fetch Pokémon", error);
//       res.status(500).send("Error fetching Pokémon data");
//     }
//   });

//   export default pokemonByIdRouter;