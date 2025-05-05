import { createCustomer } from "../service/CustomerService.mjs";

class CustomerController{


 async createCustomer(req,res) {
  
    const {name,email,birthdate,password} = req.body ; 

    const data  = {name,email,birthdate,password}; 

    const dadoscustomer = await createCustomer(data);

  try {

   res.status(201).json(dadoscustomer);
  } catch (error) {

    res.status(500).json({ message: error.message });
   
  }

 }












}

export default new  CustomerController();