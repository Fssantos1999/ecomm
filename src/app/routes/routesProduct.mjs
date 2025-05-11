import { Router } from "express";
import ProductController from "../controller/ProductController.mjs";
import authMiddleware from "../middleware/authMiddleware.mjs";

const router = Router();

router.post("/produto",authMiddleware, ProductController.createProduct);
router.get("/produto/:sku",authMiddleware, ProductController.findProductBySku);
router.delete("/produto/:sku", authMiddleware,ProductController.deleteProduct);
router.patch("/produto/:sku", authMiddleware,ProductController.update);
router.get("/produto/filter/:brand", authMiddleware, ProductController.filterProductsByBrand);
router.get("/produto/filter/price/:price", ProductController.filterProductsByPrice);

export default router;
