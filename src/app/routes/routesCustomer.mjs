import { Router } from "express";
import CustomerController from "../controller/CustomerController.mjs"; 


const router = Router();


router.post("/customer", CustomerController.createCustomer);

export default router;
