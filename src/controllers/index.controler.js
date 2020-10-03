const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ejemplodb2",
});

const getUsers = (req, res) => {
  connection.query("SELECT * FROM personas", (err, result, fields) => {
    if (err) throw err;
    res.status(200).json(result);
  });
};

const addUsers = (req, res) => {
  const { nombre, apellido, nacimiento } = req.body;
  connection.query(
    "INSERT INTO personas (nombre, apellido, nacimiento) VALUES (?, ?, ?)",
    [nombre, apellido, nacimiento]
  );
  res.json({
    message: "User Added Successfully",
    body: {
      user: { nombre, apellido, nacimiento },
    },
  });
};

module.exports = {
  getUsers,
  addUsers,
};
