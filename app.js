const express = require("express");
const routes = require("./src/Route");
const { port } = require("./src/config/env");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", routes);

app.get("/", (_, res) => {
  return res.send("hello world");
});

app.listen(port, () => {
  console.log(`Berjalan pada port ${port}`);
});
