const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ejemplodb2",
});

// Get users from MySQL
const getUsers = (req, res) => {
  connection.query("SELECT * FROM personas", (err, result, fields) => {
    if (err) throw err;
    res.status(200).json(result);
  });
};

// Add new users from MySQL
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

// Delete users from MySQL
const deleteUsers = (req, res) => {
  const id = req.params.id;
  connection.query("DELETE FROM personas WHERE id = ? ", [id]);
  console.log("User Deleted");
  res.json(`User ${id} deleted successfully`);
};

// Update users from MySQL
const updateUsers = (req, res) => {
  const id = req.params.id;
  const { nombre, apellido, nacimiento } = req.body;
  connection.query(
    "UPDATE personas SET nombre = ?, apellido = ?, nacimiento = ? WHERE id = ?",
    [nombre, apellido, nacimiento, id]
  );
  res.json("Updated Successfully");
};

module.exports = {
  getUsers,
  addUsers,
  deleteUsers,
  updateUsers,
};
