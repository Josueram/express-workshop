const express = require("express");
const app = express();
const { pokemon } = require("./pokedex.json");

// Routes
app.get("/", (req, res, next) => {
  return res.status(200).send("Bienvenido a la Pokedex");
});

app.get("/pokemon", (req, res, next) => {
  return res.status(200).send(pokemon);
});

app.get("/pokemon/:id([0-9]{1,3})", (req, res, next) => {
  const id = req.params.id - 1;
  (id >= 0 && id <= 150) ? 
    res.status(200).send(pokemon[id]) : 
    res.status(404).send("Pokemon no encontrado");
});

app.get("/pokemon/:name([A-Za-z]+)", (req, res, next) => {
  const name = req.params.name;

  const pokemonFilter = pokemon.filter((p) => {
    return (p.name.toUpperCase() == name.toUpperCase()) ? p : null;
  });

  (pokemonFilter.length > 0) ? 
    res.status(200).send(pokemonFilter) : 
    res.status(404).send("Pokemon no encontrado");
});

// Server
app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running...");
});