
import { Router } from "express";
import ProductController from "../controller/ProductController.mjs";
const router = Router ()



router.post("/produto",ProductController.createProduct)

export default router 