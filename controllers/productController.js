const Product = require("../models/Product");

exports.createProduct = async (req, res) => {
  const { name, description, price, stock } = req.body;
  const imageUrl = req.file?.path;

  try {
    const product = await Product.create({
      name,
      description,
      price,
      stock,
      image: imageUrl,
    });

    res.status(201).json({ message: "Product added", product });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
