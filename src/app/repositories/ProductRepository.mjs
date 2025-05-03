import Product from "../models/Product.mjs"; 

export default class ProductRepository { 
  static async createProduct(data) {
    try {
      const product = await Product.create(data);
      return product;
    } catch (error) {
      throw new Error("Erro ao criar produto: " + error.message);
    }
  }
}
