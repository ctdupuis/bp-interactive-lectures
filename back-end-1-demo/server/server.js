// Adding dependencies
const express = require('express');
const cors = require('cors');

// Invoking the express object, assigning it to the app variable
const app = express();
const PORT = 5050;


// Allows your Express server to accept JSON in request Parameters
app.use(express.json())


// Cross Origin Resource Sharing - protects your server from being accessed by an unauthorized party
app.use(cors())


// This serves as our local database that we will query from
const inventory = ["greeting card", "wagon", "computer", "table", "chair", "milk", "sailboat", "conditioner", "rusty nail", "desk"]



// INVENTORY > INDEX ?= QUERY
app.get("/api/inventory", (req, res) => {
    // req represents the request object. Has access to req.params which returns an object containing parameters sent by the frontend

    // checks for an item query and returns the item found or if no query is present, returns the entire inventory array

    if (req.query.item) {
        const filteredItems = inventory.filter(item => item.toLowerCase().includes(req.query.item.toLowerCase()))
        // filters items based on a query

        // this endpoint knows how to check for queries when the query is separated by using ?=

        // ex: example.com/api/resource?=query_here
        res.status(200).send(filteredItems)
    } else {
        res.status(200).send(inventory)
    }
})



// INVENTORY > SHOW
app.get("/api/inventory/:index", (req, res) => {
    // adding a + symbol converts the string to a number
    // used to access the inventory at the index sent through the params
    res.status(200).send(inventory[+req.params.index])
})


// Tells your server to run and logs to the console when it's running
app.listen(PORT, () => console.log(`Server listening on Port ${PORT}`))