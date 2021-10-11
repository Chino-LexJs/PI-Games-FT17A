import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./styles/CreateGame.module.css";

function CreateGame() {
  const [genres, setGenres] = useState([]);
  const [genreSelected, setGenreSelected] = useState([]);
  const [input, setInput] = useState({
    name: "",
    description: "",
    released: "",
    background_image: "",
    rating: 0,
    platforms: [
      {
        platform: {
          id: 7,
          name: "Nintendo Switch",
          slug: "nintendo-switch",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 4544,
          image_background:
            "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg",
        },
        released_at: "2015-05-18",
        requirements: {},
      },
      {
        platform: {
          id: 1,
          name: "Xbox One",
          slug: "xbox-one",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 5022,
          image_background:
            "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg",
        },
        released_at: "2015-05-18",
        requirements: {},
      },
      {
        platform: {
          id: 4,
          name: "PC",
          slug: "pc",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 369315,
          image_background:
            "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg",
        },
        released_at: "2015-05-18",
        requirements: {},
      },
      {
        platform: {
          id: 18,
          name: "PlayStation 4",
          slug: "playstation4",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 6104,
          image_background:
            "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg",
        },
        released_at: "2015-05-18",
        requirements: {},
      },
    ],
    genres: [],
  });

  useEffect(() => {
    getGenres();
  }, []);

  const getGenres = async () => {
    const genresApi = await axios.get("http://localhost:3001/genres");
    setGenres(genresApi.data.data);
  };

  const handleInputChange = (e) => {
    if ([e.target.name] === "description") {
      e.target.value = `<p>${e.target.value}</p>`;
    }
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const addGame = async (e) => {
    e.preventDefault();
    setInput((prev) => ({
      ...prev,
      genres: genreSelected,
    }));
    await axios.post(`http://localhost:3001/videogame`, input);
    window.location.href = "/home";
  };

  const handleGenre = (e) => {
    if (!genreSelected.includes(Number(e.target.value))) {
      setGenreSelected([...genreSelected, Number(e.target.value)]);
      setInput((prev) => ({
        ...prev,
        genres: [...prev.genres, Number(e.target.value)],
      }));
    }
  };

  // const deleteGenre = (id) => {
  //   setGenreSelected(genreSelected.filter((item) => item !== id));
  // };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.left_top}>
          {input.background_image ? (
            <img src={`${input.background_image}`} alt="backgraound of game" />
          ) : (
            <img
              src="https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
              alt="bonderlands"
            />
          )}
          <h1> {input.name ? input.name : "Title of the game"} </h1>
        </div>
        <div className={styles.left_mid}>
          <hr />
          <h2>Rating: </h2>
          <p> {input.rating} </p>
          <h2>Date Realising: </h2>
          <p> {input.released} </p>
        </div>
        <div>
          <hr />
          <h2>Genres: </h2>
          <div className={styles.genreSelected}>
            {genreSelected.map((gs) =>
              genres.map((g) =>
                g.id === gs ? (
                  <p value={g.id} onDoubleClick={(e) => console.log(e.target)}>
                    {g.name}
                  </p>
                ) : (
                  ""
                )
              )
            )}
          </div>
        </div>
      </div>
      <form onSubmit={addGame} className={styles.right}>
        <h3> Add a missing game </h3>

        <input
          required="true"
          onChange={handleInputChange}
          type="text"
          name="name"
          value={input.name}
          placeholder="Add Title..."
        />
        <input
          required="true"
          onChange={handleInputChange}
          type="date"
          name="released"
          value={input.released}
          placeholder="yyyy-mm-dd"
        />
        <input
          required="true"
          onChange={handleInputChange}
          type="text"
          name="background_image"
          value={input.background_image}
          placeholder="Background image..."
        />
        <input
          required="true"
          onChange={handleInputChange}
          type="number"
          min="0"
          max="5"
          name="rating"
          value={input.rating}
        />
        <select required="true" name="genres" onChange={handleGenre}>
          {genres.map((g) => (
            <option value={g.id} key={g.id}>
              {g.name}
            </option>
          ))}
        </select>

        <textarea
          required="true"
          onChange={handleInputChange}
          name="description"
          placeholder="Add Description..."
          value={input.description}
          cols="30"
          rows="10"
        ></textarea>

        {/* <div>
            <input
              required="true"
              onChange={handleInputChange}
              type="text"
              name="name"
              value={input.name}
              placeholder="Add Title..."
            />
          </div>
          <textarea
            required="true"
            onChange={handleInputChange}
            name="description"
            placeholder="Add Description..."
            value={input.description}
            cols="30"
            rows="10"
          ></textarea>
          <input
            required="true"
            onChange={handleInputChange}
            type="text"
            name="released"
            value={input.released}
            placeholder="Add Title..."
          />
          <input
            required="true"
            onChange={handleInputChange}
            type="text"
            name="background_image"
            value={input.background_image}
            placeholder="Add Title..."
          />
          <input
            required="true"
            onChange={handleInputChange}
            type="number"
            name="rating"
            value={input.rating}
            placeholder="Add rating..."
          />
          <select required="true" name="genres" onChange={handleGenre}>
            {genres.map((g) => (
              <option value={g.id} key={g.id}>
                {g.name}
              </option>
            ))}
          </select>
          <div className={styles.genreSelected}>
            {genreSelected.map((gs) =>
              genres.map((g) =>
                g.id === gs ? (
                  <p value={g.id} onDoubleClick={(e) => console.log(e.target)}>
                    {g.name}
                  </p>
                ) : (
                  ""
                )
              )
            )}
          </div> */}

        <button type="submit">SAVE GAME</button>
      </form>
    </div>
  );
}

export default CreateGame;

// <div className={styles.container}>
//       <form onSubmit={addGame}>
//         <div className={styles.card}>
//           <h3> Add a missing game </h3>
//           <label>Title *</label>
//           <input
//             required="true"
//             onChange={handleInputChange}
//             type="text"
//             name="name"
//             value={input.name}
//             placeholder="Add Title..."
//           />
//           <label>Description *</label>
//           <textarea
//             required="true"
//             onChange={handleInputChange}
//             name="description"
//             placeholder="Add Description..."
//             value={input.description}
//             cols="30"
//             rows="10"
//           ></textarea>
//           <label>Released date*</label>
//           <input
//             required="true"
//             onChange={handleInputChange}
//             type="text"
//             name="released"
//             value={input.released}
//             placeholder="Add Title..."
//           />
//           <label>Background Image *</label>
//           <input
//             required="true"
//             onChange={handleInputChange}
//             type="text"
//             name="background_image"
//             value={input.background_image}
//             placeholder="Add Title..."
//           />
//           <label>Rating *</label>
//           <input
//             required="true"
//             onChange={handleInputChange}
//             type="number"
//             name="rating"
//             value={input.rating}
//             placeholder="Add rating..."
//           />
//           <label>Genres</label>
//           <select required="true" name="genres" onChange={handleGenre}>
//             {genres.map((g) => (
//               <option value={g.id} key={g.id}>
//                 {g.name}
//               </option>
//             ))}
//           </select>
//           <div className={styles.genreSelected}>
//             {genreSelected.map((gs) =>
//               genres.map((g) =>
//                 g.id === gs ? (
//                   <p value={g.id} onDoubleClick={(e) => console.log(e.target)}>
//                     {g.name}
//                   </p>
//                 ) : (
//                   ""
//                 )
//               )
//             )}
//           </div>

//           <button type="submit">SAVE GAME</button>
//         </div>
//       </form>
//     </div>
