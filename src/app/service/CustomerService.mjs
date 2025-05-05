

import CustomerRepository from "../repositories/CustomerRepository.mjs";

export async function createCustomer(data) {
    if (!data.name || !data.email|| !data.birthdate || !data.password){
        throw new Error("Erro favor verificar se todos os campos estao preenchidos para continuar");
    }
    return  await CustomerRepository.createCustomer(data);
    
}