
import { createProduct, deleteProductBySku, findProductBySku } from "../service/productService.mjs";

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


   async findProductBySku(req, res) {
    try {
      const { sku } = req.params;

      const product = await findProductBySku(sku);

      if (!product) {
        return res.status(404).json({ message: 'Produto não encontrado.' });
      }

      res.status(200).json(product);
    } catch (error) {
      console.error('Erro ao buscar produto por SKU:', error);
      res.status(500).json({ message: 'Erro interno ao buscar produto.' });
    }
  }

    async deleteProduct(req,res) {
        try {
                const {sku} = req.params
                 await deleteProductBySku(sku);
                 return res.status(204).send();
          
        } catch (error) {
            res.status(404);
        }
        
    }


    }




export default new ProductController();