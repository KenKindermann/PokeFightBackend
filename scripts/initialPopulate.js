import mongoose from "mongoose";
import Pokemon from "../models/leaderboard.js";

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log(error.stack));

const TOTAL_NO_POKEMON = 1302;

async function populatePokemons() {
  try {
    for (let i = 0; i <= TOTAL_NO_POKEMON; i++) {
      const newPokemon = new Pokemon({ id: i, wins: 0, losses: 0 });
      await newPokemon.save();
    }
    console.log("All Pokémon have been added.");
  } catch (error) {
    console.error("Error populating the database:", error);
  }
}

populatePokemons();
