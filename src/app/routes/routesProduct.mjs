import { Router } from "express";
import ProductController from "../controller/ProductController.mjs";
import authMiddleware from "../middleware/authMiddleware.mjs";

const router = Router();

router.post("/produto",authMiddleware, ProductController.createProduct);
router.get("/produto/:sku", ProductController.findProductBySku);
router.delete("/produto/:sku", ProductController.deleteProduct);
router.patch("/produto/:sku", ProductController.update);

export default router;
