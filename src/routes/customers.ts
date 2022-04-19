import { Router } from 'express'
import { customerController } from "../controllers/customerController"

class CustomerRoutes {

    public router: Router = Router()

    constructor() {
        this.config()  
    }
  
    config(): void {
        this.router.get('/', customerController.getCustomers)
        this.router.get("/:id", customerController.findById)
        this.router.post("/", customerController.addCustomer)
        this.router.patch("/:id", customerController.updateCustomer)
        this.router.delete("/:id", customerController.deleteCustomer)
    }  
}   
 
const customerRoutes = new CustomerRoutes()
export default customerRoutes.router