
import { createProduct } from "../service/productService.mjs";

class ProductController {
  async createProduct(req, res) {
    try {
      const { product_name, quantity, price, image_url, status } = req.body;

      if (!product_name || !price) {
        return res.status(400).json({
          error: "Favor preencher os campos obrigatórios: product_name e price"
        });
      }


      const newProduct = await createProduct({
        product_name,
        price,
        quantity,
        image_url,
        status: status || 'ACTIVE' 
      });

   
      return res.status(201).json(newProduct); 

    } catch (error) {
      console.error(error);
      return res.status(400).json({
        error: "Erro ao criar o produto. Favor verificar a documentação da API para saber quais campos são necessários."
      });
    }
  }
}

export default new ProductController();
