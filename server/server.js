const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send("Hello from home");
})

mongoose.connect('mongodb://localhost:27017/swiftmart')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.log('Error connecting to MongoDB', err);
    })

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
})