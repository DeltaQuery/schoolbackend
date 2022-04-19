const customerModel = require("../models/Customer");
import { Request, Response } from "express";

class CustomerController {

  public async getCustomers(_req: Request, res: Response) {
    const customers = await customerModel.find({});
    try {
      res.send(customers);
    } catch (error: any) {
      res.status(500).send(error.message);
    }
  }

  public async findById(req: Request, res: Response) {
    try {
        const customer = await customerModel.findById(req.params.id);
        if (!customer) res.status(404).send("No customer found");
        res.send(customer);
      } catch (error: any) {
        res.status(500).send(error.message);
      } 
  }

  public async addCustomer(req: Request, res: Response){
    const customer = new customerModel(req.body);
    try {
      await customer.save();
      res.send(customer);
    } catch (error: any) {
      res.status(500).send(error.message); 
    } 
  }

  public async updateCustomer(req: Request, res: Response){
    try {
        const customer = await customerModel.findByIdAndUpdate(req.params.id, req.body);
        await customer.save();
        res.send(customer);
      } catch (error: any) {
        res.status(500).send(error.message);     
      } 
  }

  public async deleteCustomer(req: Request, res: Response){
    try {
        const customer = await customerModel.findByIdAndDelete(req.params.id);
        if (!customer) res.status(404).send("No customer found");
        res.status(200).send();
      } catch (error: any) {
        res.status(500).send(error.message);
      } 
  }
}

export const customerController = new CustomerController();  
