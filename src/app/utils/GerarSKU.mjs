
export default function gerarSKU() {
  const sku = 'SKU' + Math.random().toString(36).substr(2, 5).toUpperCase(); 
  console.log('SKU gerado:', sku); 
  return sku;
}
