module.exports = (connection, types) => {
  connection.define("Category", {
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
    imageName: {
      type: types.STRING(256),
      allowNull: true,
    },
  });
};
