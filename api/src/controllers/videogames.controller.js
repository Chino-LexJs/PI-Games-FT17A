const { Videogame } = require("../db");
const axios = require("axios").default;
const { API_KEY } = process.env;

async function getVideogamesApi() {
  console.log("-----------Video Games Api-----------");
  let next;
  let promises = [];
  let apiGames = [];
  try {
    let response = await axios.get(
      `https://api.rawg.io/api/games?key=${API_KEY}`
    );

    promises.push(response);
    next = response.data.next;
    for (let i = 0; i < 4; i++) {
      response = await axios.get(next.toString());
      promises.push(response);
      next = response.data.next;
    }
    const allPromise = Promise.all(promises);
    let values = await allPromise;
    values.forEach((element) => {
      apiGames = apiGames.concat(element.data.results);
    });
    apiGames = apiGames.map((element) => {
      return {
        id: element.id,
        name: element.name,
        description: element.description,
        released: element.released,
        background_image: element.background_image,
        rating: element.rating,
        platforms: element.platforms,
        genres: element.genres,
      };
    });
    console.log(apiGames.length);
    return apiGames;
  } catch (error) {
    console.error(error);
  }
}

async function getVideogameApi(name) {
  try {
    let response = await axios.get(
      `https://api.rawg.io/api/games?key=${API_KEY}&search=${name}`
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}
const getVideogame = async (req, res) => {
  const { name } = req.params;
  try {
    let videogamesByName = await getVideogameApi(name);
    console.log(videogamesByName.length);
    res.status(200).json({
      data: videogamesByName,
      msg: "All videogames of table videogames whith that name",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {},
      msg: "something goes wrong",
    });
  }
};

const getVideogames = async (req, res) => {
  try {
    let videogamesApi = await getVideogamesApi();
    let videogames = await Videogame.findAll(); // trae juegos de la BD
    videogames = videogames.concat(videogamesApi); // une todos los juegos
    res.status(200).json({
      data: videogamesApi,
      msg: "All videogames of table videogames",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {},
      msg: "something goes wrong",
    });
  }
};

module.exports = { getVideogames, getVideogame };