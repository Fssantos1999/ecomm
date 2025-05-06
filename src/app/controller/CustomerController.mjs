import { createCustomer, deleteCustomerByEmail, updateCustomerByEmail} from "../service/CustomerService.mjs";
import { hash } from "bcrypt";
class CustomerController{
  async createCustomer(req, res) {
    const { name, email, birthdate, password } = req.body;
    try {
      const passwordHeash = await hash(password, 10);

      const customerData = { name, email, birthdate, password: passwordHeash };

      const newCustomer = await createCustomer(customerData);

     return res.status(201).json(newCustomer);  
    } catch (error) {
    res.status(400).json({ error: error.message }); 
  }
}

updateCustomerByEmail = async (req, res) => {
    const { email } = req.params;
    const { name, birthdate, password } = req.body;
  
    try {
      const customerData = { name, email, birthdate, password };
      const updatedCustomer = await updateCustomerByEmail(email, customerData);
      res.status(200).json(updatedCustomer);  
    } catch (error) {
      res.status(400).json({ error: error.message }); 
    }
  }

 async  deleteCustomerByEmail(req, res) {
    const { email } = req.params;
  
    try {
       await deleteCustomerByEmail(email);
      res.status(204).send();  
    } catch (error) {
      res.status(400).json({ error: error.message }); 
    }
  }

}


export default new  CustomerController();