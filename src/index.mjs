import express from "express";
import { Sequelize } from 'sequelize';
import { sequelize } from "../config/config.cjs";
import router from "./app/routes/routesProduct.mjs"; // nome correto

const app = express();
const port = 3000;

app.use(express.json());
app.use(router); // corrigido aqui

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
    process.exit(1); 
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
