const userModel = require("../models/User");
import { Request, Response } from "express";
import * as jwt from 'jsonwebtoken';

class UserController {

   jwt = require("jsonwebtoken");


   public async login(req: Request, res: Response) {
      let body = req.body;
      try {
         const user = await userModel.findOne({ user: body.user })

         if (!user) return res.status(404).send("No user found!")       

         if (body.password !== user.password) {
            return res.status(400).send("Usuario o contraseña incorrectos.")
         }
         
         let token = jwt.sign({
            usuario: user,
         }, "stil", {
            expiresIn: "48h"
         })

         res.json({
            ok: true,
            usuario: user,
            token,
         })

      } catch (error: any) {
         res.status(500).send(error.message);
      }


   }
}

export const userController = new UserController();




