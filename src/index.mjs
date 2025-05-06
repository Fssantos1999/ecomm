import express from "express";
import { Sequelize } from 'sequelize';
import { sequelize } from "../config/config.cjs";
import productRouter from "./app/routes/routesProduct.mjs"; 
import customerRouter from "./app/routes/routesCustomer.mjs";
import routesAuth from "./app/routes/routesauth.mjs";
import dotenv from "dotenv";
dotenv.config();


const app = express();
const port = 3000;

app.use(express.json());

app.use("/api", productRouter);
app.use("/api", customerRouter);
app.use("/api", routesAuth); 

sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco estabelecida com sucesso.');
  })
  .catch((error) => {
    console.error('Erro ao conectar com o banco de dados:', error);
    process.exit(1); 
  });

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});