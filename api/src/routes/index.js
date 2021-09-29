const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


// JUEGOS
// https://api.rawg.io/api?key={API_KEY}
// https://api.rawg.io/api/games?key=7f2e8867e8f6497883992432872275b0

// Buscar por ID
// https://api.rawg.io/api/games/{id}?key={API_KEY}
// https://api.rawg.io/api/games/3328?key=7f2e8867e8f6497883992432872275b0

// Buscar por nombre
// https://api.rawg.io/api?key={API_KEY}&search={name}
// https://api.rawg.io/api/games?key=7f2e8867e8f6497883992432872275b0&search=witcher

// GENEROS
// https://api.rawg.io/api/genres?key={API_KEY}
// https://api.rawg.io/api/genres?key=7f2e8867e8f6497883992432872275b0
// https://api.rawg.io/api/genres/{id}?key={API_KEY}
// https://api.rawg.io/api/genres/4?key=7f2e8867e8f6497883992432872275b0


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
