import Customer from "../models/Customers.mjs";

export default class CustomerRepository{

    static async createCustomer (data){ 
        try {
            return  await Customer.create(data); 
        } catch (error) {
            throw new Error("Error" + error);
            
        }
    }




}
