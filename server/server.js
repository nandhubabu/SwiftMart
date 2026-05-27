const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 5000;
require('dotenv').config()

app.get('/', (req, res) => {
    res.send("Hello from home");
})

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
});