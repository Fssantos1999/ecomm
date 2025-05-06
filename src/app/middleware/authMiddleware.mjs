import jwt from "jsonwebtoken";

const { verify } = jwt;

function authMiddleware(req, res, next) {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).json({ error: "Token não fornecido" });
    }
    try {
        const decoded = verify(token, process.env.SECRET_KEY);
        if (!decoded) {
            return res.status(401).json({ error: "Token inválido" });
        }
        req.userId = decoded.id;
        next();
    } catch (error) {
        return res.status(401).json({ error: "Token inválido" });
    }
}

export default authMiddleware;