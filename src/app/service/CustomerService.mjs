

import CustomerRepository from "../repositories/CustomerRepository.mjs";

export async function createCustomer(data) {
  
        try {
          if (!data.name || !data.email || !data.birthdate || !data.password) {
            throw new Error("Favor verificar se todos os campos estão preenchidos para continuar.");
          }
          return await CustomerRepository.createCustomer(data);
          
        } catch (error) {
          throw new Error( error.message);
        }
 
      
    
}