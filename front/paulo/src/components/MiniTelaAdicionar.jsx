import { useState } from "react";

const MiniTelaAdicionar = ({ onClose, onAdded }) => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    try {
      await fetch("http://localhost:8800/usuarios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user, email }),
      }); // Faz um POST na API para adicionar o usuário

      
      onAdded(); // Atualiza a lista no App
      onClose(); // Fecha a mini tela
    } catch (err) {
      alert("Erro ao adicionar usuário.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white w-[500px] h-[500px] rounded-lg p-6 text-black">
        <h2 className="text-xl font-bold mb-4">Adicionar Usuário</h2>
        <input
          type="text"
          placeholder="Nome de usuário"
          className="w-full p-2 mb-4 border rounded"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-4 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="flex justify-end gap-2 mt-6">
          <button onClick={onClose} className="px-4 py-2 bg-gray-400 text-white rounded">
            Cancelar
          </button>
          <button onClick={handleSubmit} className="px-4 py-2 bg-green-500 text-white rounded">
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
};

export default MiniTelaAdicionar;
