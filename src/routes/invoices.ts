import { Router } from 'express'
import { invoiceController } from "../controllers/invoiceController"

class InvoiceRoutes {

    public router: Router = Router()

    constructor() {
        this.config()
    }

    config(): void {
        this.router.get('/', invoiceController.getInvoices)
        this.router.get("/:id", invoiceController.findById)
        this.router.post("/", invoiceController.addInvoice)
        this.router.patch("/:id", invoiceController.updateInvoice)
        this.router.delete("/:id", invoiceController.deleteInvoice)
    }
}

const invoiceRoutes = new InvoiceRoutes()
export default invoiceRoutes.router

