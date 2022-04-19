const productModel = require("../models/Product");
import { Request, Response } from "express";

class ProductController {

  public async getProducts(_req: Request, res: Response) {
    const products = await productModel.find({});
    try {
      res.send(products);
    } catch (error: any) {
      res.status(500).send(error.message);
    }
  }

  public async findById(req: Request, res: Response) {
    try {
        const product = await productModel.findById(req.params.id);
        if (!product) res.status(404).send("No product found");
        res.send(product);
      } catch (error: any) {
        res.status(500).send(error.message);
      } 
  }

  public async addProduct(req: Request, res: Response){
    const product = new productModel(req.body);
    try {
      await product.save();
      res.send(product);
    } catch (error: any) {
      res.status(500).send(error.message); 
    } 
  }

  public async updateProduct(req: Request, res: Response){
    try {
        const product = await productModel.findByIdAndUpdate(req.params.id, req.body);
        await product.save();
        res.send(product);
      } catch (error: any) {
        res.status(500).send(error.message);
      } 
  }

  public async deleteProduct(req: Request, res: Response){
    try {
        const product = await productModel.findByIdAndDelete(req.params.id);
        if (!product) res.status(404).send("No product found");
        res.status(200).send();
      } catch (error: any) {
        res.status(500).send(error.message);
      } 
  }
}

export const productController = new ProductController();  



