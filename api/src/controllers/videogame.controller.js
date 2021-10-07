const { Videogame, Genre } = require("../db");
const axios = require("axios").default;
const { API_KEY } = process.env;

async function getVideogameApi(id) {
  try {
    let response = await axios.get(
      `https://api.rawg.io/api/games/${id}?key=${API_KEY}`
    );
    return response;
  } catch (error) {
    throw error;
  }
}

const getVideogame = async (req, res) => {
  const { id } = req.params;
  let videogameById;
  try {
    if (id.includes("-")) {
      // busco en mi base de datos
      videogameById = await Videogame.findAll({
        where: {
          id: id,
        },
        include: [
          {
            model: Genre,
            attributes: ["id", "name"],
            through: {
              attributes: [],
            },
          },
        ],
      });
      videogameById = videogameById.pop();
    } else {
      // busco en la api
      videogameById = await getVideogameApi(id);
      videogameById = videogameById.data;
      // console.log(videogameById.status);
    }
    res.status(200).json({
      data: videogameById,
      msg: "Videogame whith that ID",
    });
  } catch (error) {
    res.status(500).json({
      data: error,
      msg: "something goes wrong",
    });
  }
};

const createVideogame = async (req, res) => {
  const {
    name,
    description,
    released,
    background_image,
    rating,
    platforms,
    genres, // Tiene que ser un arreglo con los ID de generos [1 , 5, 3]
  } = req.body;
  try {
    let newGame = await Videogame.create(
      {
        name,
        description,
        released,
        background_image,
        rating,
        platforms,
      },
      {
        fields: [
          "name",
          "description",
          "released",
          "background_image",
          "rating",
          "platforms",
        ],
      }
    );
    await newGame.addGenres(genres);
    res.json({ data: newGame, msg: "Videogame created" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: error,
      msg: "something goes wrong",
    });
  }
};

const deleteVideogame = async (req, res) => {
  const { id } = req.params;
  try {
    let videogame = await Videogame.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).json({ data: videogame, msg: "Videogame deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {},
      msg: "something goes wrong",
    });
  }
};

const updateVideogame = async (req, res) => {
  const { id } = req.params;
  const { name, description, released, background_image, rating, platforms } =
    req.body;
  try {
    let videogame = await Videogame.findAll({
      attributes: [
        "name",
        "description",
        "released",
        "background_image",
        "rating",
        "platforms",
      ],
      where: {
        id: id,
      },
    });
    if (videogame.length > 0) {
      videogame.forEach(async (game) => {
        await game.update(
          {
            name: name,
            description: description,
            released: released,
            background_image: background_image,
            rating: rating,
            platforms: platforms,
          },
          {
            fields: [
              "id",
              "name",
              "description",
              "released",
              "background_image",
              "rating",
              "platforms",
            ],
          }
        );
      });
      return res
        .status(200)
        .json({ data: videogame, msg: "update successfully" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {},
      msg: "something goes wrong",
    });
  }
};

module.exports = {
  getVideogame,
  createVideogame,
  deleteVideogame,
  updateVideogame,
};
