# 🛍️ Ecommerce 2.0

**Ecommerce 2.0** é uma aplicação backend construída com Node.js e Express para gerenciar uma plataforma de e-commerce. O projeto oferece funcionalidades como gerenciamento de clientes, produtos, pedidos e autenticação JWT.

---

## 📌 Tecnologias Utilizadas

- **Node.js** – Ambiente de execução JavaScript
- **Express.js** – Framework web para Node.js
- **Sequelize** – ORM para PostgreSQL
- **PostgreSQL** – Banco de dados relacional
- **JWT** – Autenticação baseada em tokens
- **dotenv** – Gerenciamento de variáveis de ambiente

---

## ✨ Funcionalidades

- ✅ Cadastro, atualização e exclusão de clientes
- ✅ Criação e consulta de produtos
- ✅ Criação e gerenciamento de pedidos com múltiplos produtos
- ✅ Autenticação segura com JWT
- ✅ Integração com banco de dados PostgreSQL usando Sequelize

---
## 📮 API Endpoints

### 🔐 Authentication
- **POST** `/login` – Authenticate user and receive a JWT.

### 👤 Customers
- **POST** `/customer/register` – Register a new customer.
- **GET** `/customer/cart/:id` – Get the customer's cart by ID.
- **PATCH** `/customer/:email` – Update customer details by email.
- **DELETE** `/customer/:email` – Delete a customer by email.
- **GET** `/customer/:email` – Get customer details by email.

### 📦 Products
- **POST** `/produto` – Create a new product.
- **GET** `/produto/:sku` – Get product details by SKU.
- **DELETE** `/produto/:sku` – Delete product by SKU.
- **PATCH** `/produto/:sku` – Update product details by SKU.
- **GET** `/produto/filter/:brand` – Filter products by brand.
- **GET** `/produto/filter/price/:price` – Filter products by price range.





## ⚙️ Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/Ecommerce2.0.git
cd Ecommerce2.0
