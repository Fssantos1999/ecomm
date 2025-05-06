import Customer from "../models/Customers.mjs";

export default class CustomerRepository{

    static async createCustomer (data){   
        try {
            const [customer, created] = await Customer.findOrCreate({
              where: { email: data.email }, 
              defaults: {
                name: data.name,
                birthdate: data.birthdate,
                password: data.password
              }
            });
            if (!created) {
              throw new Error('Já existe um cliente cadastrado com este e-mail.');
            }
            return customer;
          } catch (error) {
            throw new Error('Erro ao criar cliente: ' + error.message);
          }


}

}
