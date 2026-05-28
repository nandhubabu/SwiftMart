require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000;


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

app.use(express.json());
app.post('/api/products', async (req, res) => {
    try {
        const new_product = new Product(req.body);

        const saved_product = await new_product.save();

        res.status(201).json(saved_product);
    } catch (error) {
        res.status(201).json({ error: error.message });
    }
});

app.get('/', (req, res) => {
    res.send("Hello from home");
})

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
});