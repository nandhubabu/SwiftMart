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
    .catch(err => console.log(err));

const product_Schema = new mongoose.Schema({
    name: { type: String, required: true },
    prize: { type: Number, required: true },
    description: String,
    img_url: { type: String, required: true },
    seller_id: { type: String, required: true }
})
const Product = mongoose.model('Product', product_Schema);
app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
});