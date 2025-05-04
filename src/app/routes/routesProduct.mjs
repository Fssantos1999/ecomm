
import { Router } from "express";
import ProductController from "../controller/ProductController.mjs";
const router = Router ()



router.post("/produto",ProductController.createProduct)
router.get("/produto/:sku",ProductController.findProductBySku)
router.delete("/produto/:sku",ProductController.deleteProduct)
export default router 