import { db } from "../db.js";

export const getUsers = (req, res) => {
  const query = "SELECT * FROM usuarios";
  db.query(query, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};

export const addUser = (req, res) => {
  const { user, email } = req.body;

  const query = `
    INSERT INTO usuarios (user, email)
    VALUES (?, ?)
  `;

  const values = [user, email];

  db.query(query, values, (err, result) => {
    if (err) {
      console.log("Erro ao adicionar usuário:", err);
      return res.status(500).json(err);
    }
    return res.status(201).json({ id: result.insertId });
  });
};

export const deleteUser = (req, res) => {
  const id = req.params.id;
  const query = "DELETE FROM usuarios WHERE id = ?";
  db.query(query, [id], (err) => {
    if (err) return res.status(500).json(err);
    return res.json({ message: "Usuário excluído com sucesso" });
  });
};

export const updateUser = (req, res) => {
  const id = req.params.id;
  const { user, email } = req.body;

  const query = "UPDATE usuarios SET user = ?, email = ? WHERE id = ?";
  const values = [user, email, id];

  db.query(query, values, (err, result) => {
    if (err) {
      console.log("Erro ao atualizar usuário:", err);
      return res.status(500).json(err);
    }
    return res.status(200).json({ message: "Usuário atualizado com sucesso" });
  });
};

