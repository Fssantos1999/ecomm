import { Router } from "express";
import CustomerController from "../controller/CustomerController.mjs"; 
import { validateCustomer } from "../middleware/validateCustomerInfo.mjs";


const router = Router();


router.post("/customer",validateCustomer, CustomerController.createCustomer);

export default router;
