const express = require('express');

const app = express();

const PORT = process.env.PORT || 4004;

require('dotenv').config();

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: process.env.ROLLBAR_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
})


app.get("/", (req, res) => {
    rollbar.info("Someone tapped the API");
    res.send("API root hit");
})

app.put("/", (req, res) => {
    rollbar.info("Put request attempted");
    res.send("update data");
});

app.post("/", (req, res) => {
    console.log(req.body)
    // let { name } = req.body;
    rollbar.info("Post request attempted");
    db('NAMES')
    .insert(name)
    .then(id => res.status(200).json(id))
    .catch(err => {
        console.log(err);
        rollbar.error(err);
        res.status(500).send(err);
    })
    res.send("post data");
});

app.delete("/", (req, res) => {
    rollbar.info("Delete request attempted");
    res.send("delete data");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));