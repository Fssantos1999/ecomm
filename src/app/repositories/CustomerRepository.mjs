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

      static async updateCustomerByEmail(email, data){
        try {
            const customer = await Customer.findOne({ where: { email } });
            if (!customer) {
                throw new Error('Cliente não encontrado.');
            }
            await customer.update(data);
            return customer;
        } catch (error) {
            throw new Error('Erro ao atualizar cliente: ' + error.message);
        }
}

  static async deleteCustomerByEmail(email){
      try {
          const customer = await Customer.findOne({ where: { email } });
          if (!customer) {
              throw new Error('Cliente não encontrado.');
          }
          await customer.destroy();
          return customer;
      } catch (error) {
          throw new Error('Erro ao deletar cliente: ' + error.message);
      }


}


static async findCustomerByEmail(email){
    try {
        const customer = await Customer.findOne({ where: { email } });
        if (!customer) {
            throw new Error('Cliente não encontrado.');
        }
        return customer;
    } catch (error) {
        throw new Error('Erro ao buscar cliente: ' + error.message);
    }




}

}

