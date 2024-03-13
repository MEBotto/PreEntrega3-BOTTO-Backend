import { productService } from "../services/factory.js";

export const getProductController = async (req, res) => {
  try {
    const { limit, page, query, sort } = req.query;
    const products = await productService.getAll(limit, page, query, sort);
    res.status(200).json({ data: products, message: "Products list!" });
  } catch (error) {
    res.status(400).json({ error, message: "error" });
  }
};

export const getProductByIDController = async (req, res) => {
  try {
    const { pid } = req.params
    const product = await productService.getByID(pid)
    res.status(200).json({ data: product, message: "Product found!" });
  } catch (error) {
    res.status(400).json({ error, message: "error" });
  }
};

export const postProductController = async (req, res) => {
  try { 
    const product = await productService.save(req.body);
    res.status(200).json({ data: product, message: "Product created!" });
  } catch (error) {
    res.status(400).json({ error, message: "error" });
  }
};

export const putProductController = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productService.update(id, req.body);
    res.status(200).json({ data: product, message: "Product updated!" });
  } catch (error){
    res.status(400).json({ error, message: "error" });
  }
};

export const deleteProductController = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productService.delete(id);
    res.status(200).json({ data: product, message: "Product deleted!" });
  } catch (error){
    res.status(400).json({ error, message: "error" });
  }
};