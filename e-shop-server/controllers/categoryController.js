const router = require("express").Router();
const { Category } = require("../models/connection").models;
const { checkToken } = require("./utils");

router.get("/parents", [], async (req, res) => {
  const parentId = null;
  await Category.findAll({ where: { parentId } }).then((result) => {
    res.status(200).json(result);
  });
});

router.get("/:parentId/children", [], async (req, res) => {
  const { parentId } = req.params;
  await Category.findAll({ where: { parentId } }).then((result) => {
    res.status(200).json(result);
  });
});

router.post("/", [], async (req, res) => {
  const newCategory = { ...req.body };
  await Category.save(newCategory).then(() => {
    res.status(200).json(newCategory);
  });
});

router.put("/:id", [], async (req, res) => {
  const { id } = req.params;
  const updateFields = { ...req.body };
  await Category.update(updateFields, { where: { id } }).then((result) => {
    res.status(200).json(result);
  });
});

router.delete("/:id", [], async (req, res) => {
  const { id } = req.params;
  await Category.destroy({ where: { id } }).then((result) => {
    res.status(200).json(result);
  });
});
module.exports = router;
