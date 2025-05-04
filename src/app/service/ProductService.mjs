
import ProductRepository from "../repositories/ProductRepository.mjs";

export async function createProduct(data) {
  try {

    if (data.price <= 0) {
      throw new Error("O preço deve ser maior que 0.");
    }

    return await ProductRepository.createProduct(data);
  } catch (error) {
    throw new Error("Erro ao criar produto: " + error.message);
  }
}

export async function findProductBySku(sku) {
        if (!sku || typeof sku !== 'string') {
          throw new Error('SKU inválido.');
        }
      
        return await ProductRepository.findProductBySku(sku);
      }
      
      
export async function deleteProductBySku(sku) {
        if (!sku || typeof sku !== 'string') {
          throw new Error('SKU inválido.');
        }
      
        return await ProductRepository.deleteProductBySku(sku);
      }
      