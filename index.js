const mysql = require("mysql");
const express = require("express");
const app = express();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ejemplodb2",
});
connection.connect();

connection.query("SELECT * FROM personas", (error, result, fields) => {
  if (error) throw error;
  console.log(result);
}); 
