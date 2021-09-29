const { Router } = require("express");
const router = Router();
const { getVideogames, getVideogame } = require("../controllers/videogames.controller");

router.route("/").get(getVideogames);

router.route("/:name").get(getVideogame);


module.exports = router;
