import mongoose from "mongoose";
import Pokemon from "../models/leaderboard";

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log(error.stack));

async function populatePokemons() {
  try {
    for (let i = 1; i <= 151; i++) {
      //Todo: Change to get the number of pokemons from the API
      const newPokemon = new Pokemon({ id: i, wins: 0, losses: 0 });
      await newPokemon.save();
    }
    console.log("All Pokémon have been added.");
  } catch (error) {
    console.error("Error populating the database:", error);
  }
}

populatePokemons();
