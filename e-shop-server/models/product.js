module.exports = (connection, types) => {
  connection.define("Product", {
    id: {
      type: types.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: types.STRING(128),
      allowNull: true,
    },
    code: {
      type: types.STRING(256),
      allowNull: true,
    },
    price: {
      type: types.FLOAT(),
      allowNull: true,
    },
    imageName: {
      type: types.STRING(256),
      allowNull: true,
    },
    description: {
      type: types.STRING(512),
      allowNull: true,
    },
  });
};
