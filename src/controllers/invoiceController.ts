const invoiceModel = require("../models/Invoice");
import { Request, Response } from "express";

class InvoiceController {

  public async getInvoices(_req: Request, res: Response) {
    const invoices = await invoiceModel.find({});
    try {
      res.send(invoices);
    } catch (error: any) {
      res.status(500).send(error.message);
    }
  }

  public async findById(req: Request, res: Response) {
    try {
        const invoice = await invoiceModel.findById(req.params.id);
        if (!invoice) res.status(404).send("No invoice found");
        res.send(invoice);
      } catch (error: any) {
        res.status(500).send(error.message);
      } 
  }

  public async addInvoice(req: Request, res: Response){
    const invoice = new invoiceModel(req.body);
    try {
      await invoice.save();
      res.send(invoice);
    } catch (error: any) {
      res.status(500).send(error.message); 
    } 
  }

  public async updateInvoice(req: Request, res: Response){
    try {
        const invoice = await invoiceModel.findByIdAndUpdate(req.params.id, req.body);
        await invoice.save();
        res.send(invoice);
      } catch (error: any) {
        res.status(500).send(error.message);
      } 
  }

  public async deleteInvoice(req: Request, res: Response){
    try {
        const invoice = await invoiceModel.findByIdAndDelete(req.params.id);
        if (!invoice) res.status(404).send("No invoice found");
        res.status(200).send();
      } catch (error: any) {
        res.status(500).send(error.message);
      } 
  }
} 

export const invoiceController = new InvoiceController();  



