import { useState, useEffect } from "react";
import MiniTelaAdicionar from "./components/MiniTelaAdicionar";
import MiniTelaExcluir from "./components/MiniTelaExcluir";
import MiniTelaEditar from "./components/MiniTelaEditar";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showAdd, setShowAdd] = useState(false);
  const [showList, setShowList] = useState(false);
  const [userToEdit, setUserToEdit] = useState(null); // Novo estado para edição

  const fetchUsers = () => {
    fetch("http://localhost:8800/usuarios")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleViewMore = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="relative z-10 min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-4xl p-6 bg-white shadow-lg rounded-xl">
        <h1 className="text-2xl font-bold text-center mb-4">Lista de Usuarios do Paulo</h1>

        <div className="flex justify-center gap-4 mb-6">
          <button 
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700"
            onClick={() => setShowAdd(true)}
          >
            Adicionar Usuário
          </button>

          <button 
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700"
            onClick={() => setShowList(true)}
          >
            Excluir
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {users.map((user) => (
            <div key={user.id} className="p-4 border rounded-lg shadow-md bg-gray-50">
              <p className="text-gray-700">Email: {user.email}</p>
              <p className="text-gray-700">User: {user.user}</p>
              <div className="flex gap-2 mt-2">
                <button 
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
                  onClick={() => handleViewMore(user)}
                >
                  Ver Mais
                </button>
                <button
                  className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-700"
                  onClick={() => setUserToEdit(user)}
                >
                  Editar
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedUser && (
          <div className="mt-6 p-4 bg-gray-200 border rounded-lg shadow-lg">
            <h2 className="text-xl font-bold">Detalhes do Usuário</h2>
            <p><strong>Email:</strong> {selectedUser.email}</p>
            <p><strong>User:</strong> {selectedUser.user}</p>
            <button 
              className="mt-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700"
              onClick={() => setSelectedUser(null)}
            >
              Fechar
            </button>
          </div>
        )}
      </div>

      {showAdd && (
        <MiniTelaAdicionar onClose={() => setShowAdd(false)} onAdded={fetchUsers} />
      )}

      {showList && (
        <MiniTelaExcluir onClose={() => setShowList(false)} onUserDeleted={fetchUsers} />
      )}

      {userToEdit && (
        <MiniTelaEditar userToEdit={userToEdit} onClose={() => setUserToEdit(null)} onUpdated={fetchUsers} />
      )}
    </div>
  );
}

export default App;
