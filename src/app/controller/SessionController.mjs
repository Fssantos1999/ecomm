import { compare } from "bcrypt";
import jwt from "jsonwebtoken";
import { findCustomerByEmail } from "../service/CustomerService.mjs";

class SessionController {

  async createSession(req, res) {
    try {
      const { email, password } = req.body;

      const user = await findCustomerByEmail(email);

      if (!user || !user.password) {
        return res.status(401).json({ error: "Usuário não encontrado ou senha inválida" });
      }
      const matchPassword = await compare(password, user.password);

      if (!matchPassword) {
        return res.status(401).json({ error: "Usuário ou senha inválidos" });
      }
      const { sign } = jwt;
      
      const token = sign({ id: user.id }, process.env.SECRET_KEY, {
        subject: String(user.id),
        expiresIn: "1d",
      });
      const { password: _, ...userWithoutPassword } = user;
      return res.json({ token, user: userWithoutPassword });
    } catch (error) {
      return res.status(500).json({ error: "Erro interno do servidor" });
    }
  }
}

export default new SessionController();