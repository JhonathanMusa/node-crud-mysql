const { Router } = require("express");
const router = Router();
const { getUsers, addUsers } = require("../controllers/index.controler");

router.get("/personas", getUsers);
router.post("/personas", addUsers);

module.exports = router;
