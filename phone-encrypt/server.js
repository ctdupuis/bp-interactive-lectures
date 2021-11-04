const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const {
    encryptNumber
} = require('./controller');


app.post('/Barksdale', encryptNumber);

app.listen(3000, () => console.log("Server listening on Port 3000"));