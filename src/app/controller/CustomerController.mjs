import { createCustomer, deleteCustomerByEmail, findCustomerCartById, updateCustomerByEmail,findCustomerByEmail} from "../service/CustomerService.mjs";
import { hash } from "bcrypt";
class CustomerController{

  async createCustomer(req, res) {
    console.log(req.body);
    const { name, email, birthdate, password } = req.body;
    try {
 
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
      if (req.userId !== email) {
        return res.status(403).json({ error: "Você não tem permissão para deletar este usuário." });
    }
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
      if (req.userId !== email) {
        return res.status(403).json({ error: "Você não tem permissão para deletar este usuário." });
    }
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

async findCustomerByEmail(req, res) {
    const { email } = req.params;
    try {
      const customer = await findCustomerByEmail(email);
      if (!customer) {
        return res.status(404).json({ message: "Cliente não encontrado." });
      }
      res.status(200).json(customer);
    } catch (error) {
      res.status(500).json({ message: "Erro interno ao buscar cliente." });
    }
  }

}
export default new  CustomerController();