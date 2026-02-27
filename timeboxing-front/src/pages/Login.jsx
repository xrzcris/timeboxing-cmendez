import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría tu lógica de autenticación real
    navigate("/dashboard");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-[#A8D5D0] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[#A8D5D0]">
        {/* Card con borde negro */}
        <div className="border-2 border-gray-800 bg-[#A8D5D0] p-8">
          
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Timeboxing
            </h2>
            <p className="text-gray-700 text-sm">Ingresa para comenzar tu día</p>
          </div>

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Usuario */}
            <div>
              <label className="block font-semibold text-gray-800 mb-2">
                Usuario
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Tu nombre de usuario"
                className="w-full border-2 border-gray-800 bg-transparent px-4 py-3 focus:outline-none text-gray-800 placeholder-gray-600"
                required
              />
            </div>

            {/* Contraseña */}
            <div>
              <label className="block font-semibold text-gray-800 mb-2">
                Contraseña
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full border-2 border-gray-800 bg-transparent px-4 py-3 focus:outline-none text-gray-800 placeholder-gray-600"
                required
              />
            </div>


            {/* Botón */}
            <button
              type="submit"
              className="w-full bg-gray-800 text-white py-3 font-semibold border-2 border-gray-800 hover:bg-transparent hover:text-gray-800 transition duration-300"
            >
              Entrar
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center">
            <div className="flex-1 border-t-2 border-gray-800"></div>
            <span className="px-4 text-gray-700 text-sm">o</span>
            <div className="flex-1 border-t-2 border-gray-800"></div>
          </div>
        </div>

        {/* Footer decorativo */}
        <div className="text-center mt-6 text-gray-700 text-xs">
         Cristian Mendez LITIID52
        </div>
      </div>
    </div>
  );
}

export default Login;