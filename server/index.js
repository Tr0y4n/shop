require("dotenv").config();
const express = require("express");
const sequelize = require("./db");
const models = require("./models/models");
const cors = require("cors");
const router = require("./routes/index");
const errorHandler = require("./middleware/errorHandlingMiddleware");
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");
const path = require("path");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(fileUpload({}));
app.use(bodyParser.json());
//app.use(express.static(path.resolve(__dirname, "static")));

app.use(express.static(__dirname + "./../public"));

app.use("/", (_, res) => {
  res.sendFile(path.resolve(__dirname, "./../public/index.html"));
});
app.use("/api", router); //сообщаем серверу о существовании роутеров

app.use(errorHandler);

const start = async () => {
  try {
    await sequelize.authenticate(); // Подключение к БД
    await sequelize.sync(); // Сверка состояния БД со схемой данных
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
