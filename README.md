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
# 📌 Endpoints da API

### 🔐 Autenticação
- **POST** `/login` – Autentica o usuário e retorna um JWT.

---

### 👤 Clientes
- **POST** `/customer/register` – Cadastra um novo cliente.
- **GET** `/customer/cart/:id` – Retorna o carrinho do cliente pelo ID.
- **PATCH** `/customer/:email` – Atualiza os dados do cliente pelo e-mail.
- **DELETE** `/customer/:email` – Remove o cliente pelo e-mail.
- **GET** `/customer/:email` – Retorna os dados do cliente pelo e-mail.

---

### 📦 Produtos
- **POST** `/produto` – Cadastra um novo produto.
- **GET** `/produto/:sku` – Retorna os detalhes do produto pelo SKU.
- **DELETE** `/produto/:sku` – Remove o produto pelo SKU.
- **PATCH** `/produto/:sku` – Atualiza os dados do produto pelo SKU.
- **GET** `/produto/filter/:brand` – Filtra os produtos pela marca.
- **GET** `/produto/filter/price/:price` – Filtra os produtos por faixa de preço.





## ⚙️ Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/Ecommerce2.0.git
cd Ecommerce2.0
