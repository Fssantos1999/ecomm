
import ProductRepository from "../repositories/ProductRepository.mjs";
import { validateSku } from "../utils/validateSKU.mjs";

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
       validateSku(sku)
        return await ProductRepository.findProductBySku(sku);
      }
      
      
export async function deleteProductBySku(sku) {
       validateSku(sku)
      
        return await ProductRepository.deleteProductBySku(sku);
      }
      
      export async function updateProductBySku(sku, data) {
          validateSku(sku);
        
          return await ProductRepository.findBySkuAndUpdateProduct(sku, data);
        
      }
     


 
