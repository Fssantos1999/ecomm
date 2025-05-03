
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
