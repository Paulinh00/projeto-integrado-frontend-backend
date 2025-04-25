// src/components/MiniTelaEditar.jsx
import { useState } from "react";

export default function MiniTelaEditar({ userToEdit, onClose, onUpdated }) {
  const [user, setUser] = useState(userToEdit.user);
  const [email, setEmail] = useState(userToEdit.email);

  const handleUpdate = async () => {
    await fetch(`http://localhost:8800/usuarios/${userToEdit.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user, email }),
    }); // faz um put na API para atualizar o usuário

    onUpdated();
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Editar Usuário</h2>
        <input
          type="text"
          placeholder="Nome de usuário"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          className="w-full p-2 border rounded mb-2"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-600">
            Cancelar
          </button>
          <button onClick={handleUpdate} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
}
