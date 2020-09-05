const router = require("express").Router();
const jwt = require("jsonwebtoken");
const { User } = require("../models/connection").models;
const { checkToken } = require("./utils");

router.get("/token", async (req, res) => {
  const foo = "bar";
  await jwt.sign({ foo }, process.env.JWT_SECRET_KEY, (err, token) => {
    if (err) res.status(500).json(err);
    res.status(200).send(token);
  });
});

router.get("/", [checkToken], async (req, res) => {
  await User.findAll().then((result) => {
    return res.status(200).json(result);
  });
});

router.get("/:id", [checkToken], async (req, res) => {
  const { id } = req.params;
  await User.findAll({ where: { id } }).then((result) => {
    return res.status(200).json(result);
  });
});

router.post("/", [checkToken], async (req, res) => {
  const newUser = { ...req.body };
  await User.create(newUser).then(() => {
    return res.status(200).json(newUser);
  });
});

router.put("/:id", [checkToken], async (req, res) => {
  const { id } = req.params;
  const { firstName } = req.body;
  await User.update({ firstName }, { where: { id } }).then((result) => {
    return res.status(200).json(result);
  });
});

router.delete("/:id", [checkToken], async (req, res) => {
  const { id } = req.params;
  await User.destroy({ where: { id } }).then((result) => {
    return res.status(200).json(result);
  });
});

module.exports = router;
