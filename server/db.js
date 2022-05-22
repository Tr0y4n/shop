const { Sequelize } = require('sequelize');

module.exports = new Sequelize(
 'db1', //Название БД
 'user1', //Пользователь
 'andim461', //Пароль
 {
  dialect: 'postgres', // название используемой БД
  host: 'rc1b-rnxsxdd54shxmkol.mdb.yandexcloud.net', // Хост
  port: 6432, // На каком она порте (настраивается в приложении БД)
 }
);
