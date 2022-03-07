const express = require("express");
const pokemon = express.Router();
const pokedex = require("../pokedex.json").pokemon;

pokemon.post("/", (req, res, next) => {
  return res.status(200).send(req.body.name);
});

pokemon.get("/", (req, res, next) => {
  console.log(pokedex)
  return res.status(200).send(pokedex);
});

pokemon.get("/:id([0-9]{1,3})", (req, res, next) => {
  const id = req.params.id - 1;
  id >= 0 && id <= 150
    ? res.status(200).send(pokedex[id])
    : res.status(404).send("Pokemon no encontrado");
});

pokemon.get("/:name([A-Za-z]+)", (req, res, next) => {
  const name = req.params.name;

  const pokemonFilter = pokedex.filter((p) => {
    return p.name.toUpperCase() == name.toUpperCase() ? p : null;
  });

  pokemonFilter.length > 0
    ? res.status(200).send(pokemonFilter)
    : res.status(404).send("Pokemon no encontrado");
});

module.exports = pokemon