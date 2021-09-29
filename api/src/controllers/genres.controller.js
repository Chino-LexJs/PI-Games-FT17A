const { Genre } = require("../db");

const getGenres = async (req, res) => {
  try {
    let genres = await Genre.findAll();
    if (genres.length === 0) {
      console.log("PASAMOS POR ACA");
      return res.status(404).json({
        data: null,
        msg: "Table Genres empty",
      });
    }
    res.status(200).json({
      data: genres,
      msg: "All genres of table Genres",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {},
      msg: "something goes wrong",
    });
  }
};

module.exports = { getGenres };
