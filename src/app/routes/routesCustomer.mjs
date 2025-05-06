import { Router } from "express";
import CustomerController from "../controller/CustomerController.mjs"; 
import { validateCustomer } from "../middleware/validateCustomerInfo.mjs";


const router = Router();


router.post("/customer",validateCustomer, CustomerController.createCustomer);
router.patch("/customer/:email", CustomerController.updateCustomerByEmail);
router.delete("/customer/:email", CustomerController.deleteCustomerByEmail);
export default router;
