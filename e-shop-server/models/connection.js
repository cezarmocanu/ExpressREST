const { Sequelize } = require("sequelize");
const userModel = require("./user");
const categoryModel = require("./category");
const productModel = require("./product");

const { host, username, password, database } = require("./config");

const connection = new Sequelize(database, username, password, {
  host,
  dialect: "mysql",
});

userModel(connection, Sequelize);
categoryModel(connection, Sequelize);
productModel(connection, Sequelize);

const { Category, Product } = connection.models;

Category.hasMany(Category, { as: "children", foreignKey: "parentId" });
Category.belongsTo(Category, { as: "parent", foreignKey: "parentId" });
Category.hasMany(Product);
Product.belongsTo(Category, { as: "category", foreignKey: "categoryId" });

// Category.bulkCreate([{ name: "Categ1" },{ name: "Categ2" },{ name: "Categ3" },{ name: "Categ4" }]);

// (async () => {
//   await Category.findAll({ where: { name: "Categ1" } }).then((result) => {
//     result.map((r) => {
//       const { id, name } = r;
//       // return console.log(id, name);

//       Category.bulkCreate([
//         { name: "Subcateg1", parentId: id },
//         { name: "Subcateg2", parentId: id },
//         { name: "Subcateg3", parentId: id },
//         { name: "Subcateg4", parentId: id },
//       ]);
//     });
//   });
// })();

// (async () => {
//   await Category.findAll().then(async (categories) => {
//     const f = categories.map((c) => {
//       return c.getParent().then((parent) => parent);
//     });

//     const p = new Set(
//       await Promise.all(f).then((r) => {
//         return r.filter((c) => c !== null).map((c) => c.id);
//       })
//     );

//     console.log(p);
//   });
// })();

// connection.sync({ force: true });

module.exports = connection;
