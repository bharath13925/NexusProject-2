const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    supplier: String,
    sales: { type: Number, default: 0 },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);
