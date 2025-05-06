
async function validateSku(sku) {
    if (!sku || typeof sku !== 'string'){
        throw new Error("SKU Invalido");
        
      }
}


export {validateSku};