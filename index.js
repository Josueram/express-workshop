const morgan = require("morgan");
const express = require("express");
const app = express();
const pokemon = require("./routes/pokemon");

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res, next) => {
  return res.status(200).json({ code: 1, message: "Bienvenido a la Pokedex" });
});

app.use("/pokemon", pokemon);

// error handling
app.use((req, res, next) => {
  return res.status(404).json({ code: 400, message: "URL no encontrada" });
});

// Server
app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running...");
});
