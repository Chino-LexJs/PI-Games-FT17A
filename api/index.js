//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const { API_KEY } = process.env;
const axios = require("axios").default;
const { Genre } = conn.models;

async function getGenres() {
  try {
    const response = await axios.get(
      `https://api.rawg.io/api/genres?key=${API_KEY}`
    );
    const genres = response.data.results.map((item) => {
      return {
        id: item.id,
        name: item.name,
        image_background: item.image_background
      };
    });
    addGenres(genres);
    console.log("Genres successfully loaded into the database");
  } catch (error) {
    console.error(error);
  }
}

async function addGenres(genresApi) {
  await Genre.bulkCreate(genresApi, {
    fields: ["id", "name", "image_background"],
    ignoreDuplicates: true,
  });
}

// Syncing all the models at once.
// alter: true
conn.sync({ force: true }).then(() => {
  getGenres();
  server.listen(3001, () => {
    console.log("%s listening at 3001"); // eslint-disable-line no-console
  });
});
