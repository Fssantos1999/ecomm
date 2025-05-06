export function validateCustomer(req, res, next) {
    const { name, email, password, birthdate } = req.body;
  
    if (!name || String(name).trim().length < 2) {
      return res.status(400).json({ error: "Nome é obrigatório e deve ter ao menos 3 caracteres." });
    }
  
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: "Email inválido." });
    }
  
    if (!password || String(password).length < 6) {
      return res.status(400).json({ error: "A senha deve ter pelo menos 6 caracteres." });
    }
  
    if (!birthdate || !isValidBirthdate(birthdate)) {
      return res.status(400).json({ error: "Voce tem que ser maior de 18 anos" });
    }
  
    next();
  }
  
  function isValidBirthdate(dateString) {
    const birthDate = new Date(dateString);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
  
    return (
      birthDate instanceof Date &&
      !isNaN(birthDate) &&
      (age > 18 || (age === 18 && m >= 0))
    );
  }
  