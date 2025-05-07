import { createCustomer, deleteCustomerByEmail, findCustomerCartById, updateCustomerByEmail} from "../service/CustomerService.mjs";
import { hash } from "bcrypt";
class CustomerController{



  async createCustomer(req, res) {
    console.log(req.body);
    const { name, email, birthdate, password } = req.body;
    try {
      if( password.length < 6){
        return res.status(400).json({ error: "A senha deve ter pelo menos 6 caracteres." });
      }

      const passwordHeash = await hash(password, 10);

      const customerData = { name, email, birthdate, password: passwordHeash };

      const newCustomer = await createCustomer(customerData);
 
     return res.status(201).json(newCustomer);  
    } catch (error) {
    res.status(400).json({message: "Erro ao criar o cliente."}); 
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
      res.status(400).json({ message: "Erro ao atualizar o cliente." }); 
    }
  }

 async  deleteCustomerByEmail(req, res) {
    const { email } = req.params;
  
    try {
       await deleteCustomerByEmail(email);
      res.status(204).send();  
    } catch (error) {
      res.status(400).json({message: "Erro ao deletar o cliente."}); 
    }
  }


async findCustomerCartById(req, res) {
    const { id } = req.params ;
    try {
      const customerCart = await findCustomerCartById(id);
      if (!customerCart) {
        return res.status(404).json({ message: "Carrinho não encontrado." });
      }
      res.status(200).json(customerCart);
    }catch (error) {
      res.status(500).json({ message: "Erro interno ao buscar carrinho do cliente." });
    }

}

}
export default new  CustomerController();