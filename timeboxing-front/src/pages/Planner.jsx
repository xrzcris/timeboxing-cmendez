function Planner() {
  const hours = Array.from({ length: 19 }, (_, i) => i + 5);

  return (
    <div className="min-h-screen bg-[#A8D5D0] flex items-start justify-center py-8 px-4">
      <div className="w-full max-w-5xl bg-[#A8D5D0] rounded-lg shadow-md p-8">
        {/* Header */}
        <div className="mb-6 flex flex-col md:flex-row md:items-end md:justify-between">
          <h2 className="text-4xl font-bold text-gray-800 leading-tight">
            Daily Timeboxing<br />Planner
          </h2>
          <div className="mt-4 md:mt-0 flex items-center">
            <label className="font-semibold text-gray-800 mr-2">Date:</label>
            <div className="border-b-2 border-gray-800 px-4 py-1">
              <input 
                type="date" 
                className="bg-transparent focus:outline-none text-gray-800" 
              />
            </div>
          </div>
        </div>

        {/* Contenido en dos columnas */}
        <div className="flex flex-col md:flex-row gap-6">
          
          {/* Columna Izquierda - Prioridades y Brain Dump */}
          <div className="w-full md:w-1/3">
            {/* Top Priorities */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-800 mb-2 text-lg">Top Priorities</h3>
              <div className="space-y-2">
                <input 
                  type="text" 
                  placeholder="" 
                  className="w-full border-2 border-gray-800 bg-transparent px-3 py-3 focus:outline-none text-gray-800 placeholder-gray-600" 
                />
                <input 
                  type="text" 
                  placeholder="" 
                  className="w-full border-2 border-gray-800 bg-transparent px-3 py-3 focus:outline-none text-gray-800 placeholder-gray-600" 
                />
                <input 
                  type="text" 
                  placeholder="" 
                  className="w-full border-2 border-gray-800 bg-transparent px-3 py-3 focus:outline-none text-gray-800 placeholder-gray-600" 
                />
              </div>
            </div>

            {/* Brain Dump */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-2 text-lg">Brain Dump</h3>
              <textarea 
                placeholder="" 
                className="w-full border-2 border-gray-800 bg-transparent px-3 py-2 h-96 focus:outline-none text-gray-800 placeholder-gray-600 resize-none"
                style={{
                  backgroundImage: 'linear-gradient(#6B7280 1px, transparent 1px)',
                  backgroundSize: '100% 2rem',
                  lineHeight: '2rem'
                }}
              ></textarea>
            </div>
          </div>

          {/* Columna Derecha - Horario */}
          <div className="w-full md:w-2/3">
            <h3 className="font-semibold text-gray-800 mb-2 text-lg sr-only">Horario</h3>
            
            {/* Encabezados de la tabla */}
            <div className="flex mb-1">
              <div className="w-12"></div>
              <div className="flex-1 flex">
                <div className="flex-1 text-center font-semibold text-gray-800">:00</div>
                <div className="flex-1 text-center font-semibold text-gray-800">:30</div>
              </div>
            </div>

            {/* Tabla de horarios */}
            <div className="border-2 border-gray-800">
              <table className="w-full border-collapse">
                <tbody>
                  {hours.map((h) => (
                    <tr key={h} className="border-b border-gray-800 last:border-b-0">
                      <td className="border-r border-gray-800 px-3 py-2 w-12 text-center font-semibold text-gray-800 bg-[#9AC8C3]">
                        {h}
                      </td>
                      <td className="border-r border-gray-800 px-2 py-2 w-1/2">
                        <input 
                          type="text" 
                          placeholder="" 
                          className="w-full bg-transparent focus:outline-none text-gray-800 h-full" 
                        />
                      </td>
                      <td className="px-2 py-2 w-1/2">
                        <input 
                          type="text" 
                          placeholder="" 
                          className="w-full bg-transparent focus:outline-none text-gray-800 h-full" 
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Planner;