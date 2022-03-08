const express = require("express");
const pokemon = express.Router();
const db = require("../config/database");

pokemon.post("/", (req, res, next) => {
  return res.status(200).send(req.body.name);
});

pokemon.get("/", async (req, res, next) => {
  const pokedex = await db.query("SELECT * FROM pokemon");
  return res.status(200).json(pokedex);
});

pokemon.get("/:id([0-9]{1,3})", async (req, res, next) => {
  const id = req.params.id;
  const pokemonId = await db.query(`SELECT * FROM pokemon WHERE pok_id = ${id}`);
  id >= 0 && id <= 150
    ? res.status(200).json(pokemonId)
    : res.status(404).json("Pokemon no encontrado");
});

pokemon.get("/:name([A-Za-z]+)", async (req, res, next) => {
  const name = req.params.name;
  const pokemonName = await db.query(`SELECT * FROM pokemon WHERE pok_name = "${name}"`);

  pokemonName.length > 0
    ? res.status(200).json(pokemonName)
    : res.status(404).json("Pokemon no encontrado");
});

module.exports = pokemon;