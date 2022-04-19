const studentModel = require("../models/Student");
import { Request, Response } from "express";

class StudentController {

  public async getStudents(_req: Request, res: Response) {
    const students = await studentModel.find({});
    try {
      res.send(students);
    } catch (error: any) {
      res.status(500).send(error.message);
    }
  }

  public async findById(req: Request, res: Response) {
    try {
        const student = await studentModel.findById(req.params.id);
        if (!student) res.status(404).send("No student found");
        res.send(student);
      } catch (error: any) {
        res.status(500).send(error.message);
      } 
  }
   
  public async addStudent(req: Request, res: Response){
    const student = new studentModel(req.body);
    try {
      await student.save();
      res.send(student);
    } catch (error: any) {
      res.status(500).send(error.message); 
    } 
  }
                                     
  public async updateStudent(req: Request, res: Response){
    try {
        const student = await studentModel.findByIdAndUpdate(req.params.id, req.body);
        console.log(req.params.id)
        console.log(req.body)
        await student.save();
        res.send(student);
      } catch (error: any) {
        res.status(500).send(error.message);
      } 
  }

  public async deleteStudent(req: Request, res: Response){
    try {
        const student = await studentModel.findByIdAndDelete(req.params.id);
        if (!student) res.status(404).send("No student found");
        res.status(200).send();
      } catch (error: any) {
        res.status(500).send(error.message);
      } 
  }
}

export const studentController = new StudentController();  


