import express from "express";
// import cors from "cors";
import pokemonRouter from "./routes/pokemonRoutes.js";

const app = express();

app.use("/pokemon", pokemonRouter);

// app.use(cors());
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
