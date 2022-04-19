import { Router } from "express";
import { mainController } from "../controllers/mainController";

class MainRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get("/", mainController.main);
    }
}

const mainRoutes = new MainRoutes();
export default mainRoutes.router;