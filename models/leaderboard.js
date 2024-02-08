import mongoose from "mongoose";

const pokemonSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Pokemon", pokemonSchema);
