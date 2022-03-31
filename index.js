const morgan = require("morgan");
const express = require("express");
const app = express();
// Routers
const pokemon = require("./routes/pokemon");
const user = require("./routes/user");
//Middleware
const auth = require("./middleware/auth");
const notFound = require("./middleware/notFound");
const welcome = require("./middleware/welcome");

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", welcome);
app.use("/user", user);
app.use(auth);
app.use("/pokemon", pokemon);

// Error handling
app.use(notFound);

// Server
app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running...");
});
