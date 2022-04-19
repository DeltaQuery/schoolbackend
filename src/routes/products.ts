import { Router } from 'express'
import { productController } from "../controllers/productController"

class ProductRoutes {

    public router: Router = Router()

    constructor() {
        this.config()
    }

    config(): void {
        this.router.get('/', productController.getProducts)
        this.router.get("/:id", productController.findById)
        this.router.post("/", productController.addProduct)
        this.router.patch("/:id", productController.updateProduct)
        this.router.delete("/:id", productController.deleteProduct)
    }
}

const productRoutes = new ProductRoutes()
export default productRoutes.router

