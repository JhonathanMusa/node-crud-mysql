const { Router } = require("express");
const router = Router();
const {
  getUsers,
  addUsers,
  deleteUsers,
  updateUsers,
} = require("../controllers/index.controler");

// HTTP protocols
router.get("/personas", getUsers);
router.post("/personas", addUsers);
router.delete("/personas/:id", deleteUsers);
router.put("/personas/:id", updateUsers);

module.exports = router;
