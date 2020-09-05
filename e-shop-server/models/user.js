module.exports = (connection, types) => {
  return connection.define("User", {
    id: {
      type: types.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: types.STRING(128),
      allowNull: false,
    },
    password: {
      type: types.STRING(256),
      allowNull: false,
    },
  });
};
