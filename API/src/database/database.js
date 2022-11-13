import mysql from "promise-mysql";
import config from "./../config";

const connection = mysql.createPool({
  connectionLimit: 5,
  host: config.host,  //config.HOST
  database: config.database,
  user: "bsale_test",
  password: config.password,
  queueLimit: 0,
  waitForConnection: true
});

const getConnection = () => {
  return connection
};

module.exports = {
  getConnection
}