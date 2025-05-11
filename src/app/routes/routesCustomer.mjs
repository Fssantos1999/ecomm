import { Router } from "express";
import CustomerController from "../controller/CustomerController.mjs"; 
import { validateCustomer } from "../middleware/validateCustomerInfo.mjs";
import authMiddleware from "../middleware/authMiddleware.mjs";


const router = Router();


router.post("/customer/register",validateCustomer,CustomerController.createCustomer);
router.get("/customer/cart/:id",authMiddleware, CustomerController.findCustomerCartById);
router.patch("/customer/:email",authMiddleware,CustomerController.updateCustomerByEmail);
router.delete("/customer/:email",authMiddleware, CustomerController.deleteCustomerByEmail);
router.get("/customer/:email",authMiddleware, CustomerController.findCustomerByEmail);
export default router;
