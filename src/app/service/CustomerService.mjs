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

export async function updateCustomerByEmail(email, data) {
  try {
    if (!data.name || !data.email || !data.birthdate || !data.password) {
      throw new Error("Favor verificar se todos os campos estão preenchidos para continuar.");
    }
    
    return await CustomerRepository.updateCustomerByEmail(email, data);
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function findCustomerCartById(id) {
  try {
    return await CustomerRepository.findCustomerCartById(id);
  } catch (error) {
    throw new Error(error.message);
  }
}


export async function deleteCustomerByEmail(email) {
  try {
    return await CustomerRepository.deleteCustomerByEmail(email);
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function findCustomerByEmail(email) {
  try {
    return await CustomerRepository.findCustomerByEmail(email);
  } catch (error) {
    throw new Error(error.message);
  }
}


  
  



