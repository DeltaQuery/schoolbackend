import { Request, Response } from "express";

class MainController {

  public async main(_req: Request, res: Response) {
      res.send("Conectado a backend");
  }
} 

export const mainController = new MainController();  




