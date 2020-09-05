require("dotenv").config({ path: `${__dirname}/.env` });
const app = require("express")();
const bodyParser = require("body-parser");
const {
  usersController,
  categoryController,
} = require("./controllers/controllerManager").controllers;
const connection = require("./models/connection");

const port = 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/users", usersController);
app.use("/categories", categoryController);

app.listen(port, async () => {
  try {
    await connection.authenticate();
  } catch (error) {
    throw Error(error);
  }
});
