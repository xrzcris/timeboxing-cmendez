import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#A8D5D0] flex items-center justify-center px-4">
      <div className="w-full max-w-md border-2 border-gray-800 bg-[#A8D5D0] p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Dashboard
        </h2>
        <p className="text-gray-700 mb-6">
          Bienvenido. Aquí verás tus estadísticas pronto.
        </p>
        <button
          onClick={() => navigate("/planner")}
          className="w-full bg-gray-800 text-white py-2 border-2 border-gray-800 hover:bg-transparent hover:text-gray-800 transition"
        >
          Ir al Planificador
        </button>
        <button
          onClick={() => navigate("/")}
          className="w-full mt-3 text-gray-800 underline text-sm"
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  );
}

export default Dashboard;