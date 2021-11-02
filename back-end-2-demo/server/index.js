const express = require('express');
const cors = require('cors');

const app = express();

const PORT = 4004;

app.use(express.json());
app.use(cors());

const {
    getMovies,
    deleteMovie,
    createMovie,
    updateMovie
} = require('./controller.js');

app.get(`/api/movies`, getMovies);
app.delete(`/api/movies/:id`, deleteMovie);
app.post(`/api/movies`, createMovie);
app.put(`/api/movies/:id`, updateMovie);




app.listen(PORT, () => console.log(`Server running on port ${PORT}`));