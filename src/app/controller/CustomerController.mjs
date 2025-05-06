import { createCustomer } from "../service/CustomerService.mjs";

class CustomerController{


  async createCustomer(req, res) {
    const { name, email, birthdate, password } = req.body;
  
    try {
      const customerData = { name, email, birthdate, password };
      const newCustomer = await createCustomer(customerData);
      res.status(201).json(newCustomer);  
    } catch (error) {
      res.status(400).json({ error: error.message }); 
    }
  }
  


}

export default new  CustomerController();