const { Sequelize } = require("sequelize");

module.exports = new Sequelize(
  process.env.DB_NAME, //Название БД
  process.env.DB_USER, //Пользователь
  process.env.DB_PASSWORD, //Пароль
  {
    dialect: "postgres", // название используемой БД
    host: process.env.DB_HOST, // Хост
    port: process.env.DB_PORT, // На каком она порте (настраивается в приложении БД)
  }
);
