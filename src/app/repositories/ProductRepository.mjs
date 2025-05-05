import { where } from "sequelize";
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

  static async findProductBySku(sku) {
    try {
      return await Product.findOne({ where: { sku } }); 
    } catch (error) {
      throw new Error('Erro ao localizar Produto: ' + error.message);
    }
  }

  static async deleteProductBySku(sku){
      return await Product.destroy({where:{sku}})
  }


static async findBySkuAndUpdateProduct(sku, data) {
  try {
    const [updatedCount] = await Product.update(data, { where: { sku } });

    if (updatedCount === 0) {
      throw new Error('Produto não encontrado ou não foi atualizado.');
    }
    return { sku, ...data }; 
  } catch (error) {
    throw new Error('Erro ao atualizar produto: ' + error.message);
  }
}
  
  


  

}