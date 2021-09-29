const { Router } = require("express");
const router = Router();
const {
  getVideogame,
  createVideogame,
} = require("../controllers/videogame.controller");

router.route("/:id").get(getVideogame);

router.route("/").post(createVideogame);

module.exports = router;
