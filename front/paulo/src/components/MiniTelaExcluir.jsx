import { useEffect, useState } from "react";

const MiniTelaExcluir = ({ onClose, onUserDeleted }) => {
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    fetch("http://localhost:8800/usuarios")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    const confirm = window.confirm("excluir este usuario?");
    if (!confirm) return;

    await fetch(`http://localhost:8800/usuarios/${id}`, {
      method: "DELETE",
    }); // faz um delete na API para excluir o usuário
    fetchUsers();       
    onUserDeleted();    
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white w-[500px] h-[500px] rounded-lg p-6 overflow-y-auto text-black">
        <h2 className="text-xl font-bold mb-4">Clique para Excluir Usuário</h2>
        {users.map((user) => (
          <div
            key={user.id}
            className="mb-2 p-2 border-b hover:bg-red-100 cursor-pointer rounded"
            onClick={() => handleDelete(user.id)}
          >
            <p><strong>{user.user}</strong></p>
            <p>{user.email}</p>
          </div>
        ))}
        <div className="flex justify-end mt-4">
          <button onClick={onClose} className="px-4 py-2 bg-gray-500 text-white rounded">
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export default MiniTelaExcluir;
