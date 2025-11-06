import { useState } from "react";
import { motion } from "framer-motion";
import colpensiones from "../assets/pictures/colpensiones.png";

function Experiencia({ darkMode }) {
  const [isOpen, setIsOpen] = useState(true);

  const experiences = [
    {
      company: "Colpensiones",
      role: "Desarrollador Full-Stack",
      date: "Bogotá, Colombia · Feb 2025 - Actualidad",
      logo: colpensiones,
      description: [
        "Desarrollo y mantenimiento de sistemas de gestión de procesos con .NET, C#, Angular y SQL Server.",
        "Implementación de APIs REST y automatización de flujos para mejorar eficiencia y seguridad.",
        "Optimización de consultas y procedimientos almacenados en SQL Server.",
      ],
      logos: [
        "icon-angularjs",
        "icon-typescript",
        "icon-net-framework",
        "icon-c-sharp-logo",
        "icon-microsoft-sql-server",
      ],
      technologies: ["Angular", "Typescript", ".Net", "C#", "Sql Server"],
    },
    {
      company: "AWAQ ONGD",
      role: "Desarrollador de Videojuegos",
      date: "Feb 2024 - Nov 2024",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8KDK0j2hil__W4A_3wg4HPedq-PqBuiLB3w&s",
      description: [
        "Desarrollo del videojuego educativo 3D “EcoGuardians” en Unity y C#, enfocado en conciencia ambiental.",
        "Diseño de mecánicas interactivas y UX/UI.",
        "Colaboración en sprints ágiles, control de versiones y documentación técnica.",
      ],
      logos: [
        "icon-unity",
        "icon-react",
        "icon-javascript",
        "icon-net-framework",
        "icon-c-sharp-logo",
      ],
      technologies: ["Unity", "React", "JavaScript", ".Net", "C#"],
    },
  ];

  return (
    <div
      className={`w-[90%] max-w-6xl mx-auto pt-0 transition-all duration-300 ${
        isOpen ? "min-h-screen" : "h-auto"
      }`}
    >
      {/* Encabezado */}
      <div className="relative mb-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-wide text-center" aria-hidden>
          💼 Experiencia
        </h2>

        {/* Toggle button */}
        <button
          onClick={() => setIsOpen((s) => !s)}
          aria-expanded={isOpen}
          className="absolute right-2 top-0 text-3xl md:text-4xl font-bold hover:bg-white/5 transition"
          title={isOpen ? "Cerrar sección" : "Abrir sección"}
        >
          {isOpen ? "−" : "+"}
        </button>
      </div>

      {/* Línea decorativa */}
      <div
        className={`mx-auto h-[2px] w-full rounded-full ${
          darkMode ? "bg-cyan-300/50" : "bg-gray-700"
        }`}
      ></div>

      {/* Contenido */}
      <div
        className={`overflow-hidden transition-all duration-700 ease-in-out ${
          isOpen ? "max-h-[2000px] mt-6 opacity-100" : "max-h-0 mt-0 opacity-0"
        }`}
      >
        <div className="relative flex flex-col items-start">
          {/* Línea lateral */}
          <div className="absolute left-5 top-0 bottom-10 w-[3px] bg-gradient-to-b from-cyan-300/50 to-blue-600 rounded-full"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative flex items-start mb-20 w-full"
            >
              {/* Círculo */}
              <div className="ml-[4px] w-8 h-8 rounded-full bg-[#0f172a] border-4 border-cyan-400 shadow-[0_0_20px_#22d3ee] z-10"></div>

              {/* Tarjeta */}
              <div className="ml-12 flex-1">
                <div
                  className={`p-6 rounded-2xl shadow-lg backdrop-blur-md border transition-all duration-300 ${
                    darkMode
                      ? "bg-[#0f172a] border-cyan-500/30 hover:border-cyan-400/60"
                      : "bg-[#DCE3F2] border-[#b6c2d9] hover:border-[#8ca3c6]"
                  }`}
                >
                  {/* Encabezado */}
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="w-13 h-13 object-contain rounded-md"
                    />
                    <div>
                      <h3
                        className={`text-xl font-semibold ${
                          darkMode ? "text-cyan-300" : "text-[#2B4162]"
                        }`}
                      >
                        {exp.role}
                      </h3>
                      <p
                        className={`text-sm ${
                          darkMode ? "text-[#C4D7E9]" : "text-[#3b4c63]"
                        }`}
                      >
                        {exp.company}
                      </p>
                      <p
                        className={`text-xs ${
                          darkMode ? "text-[#C4D7E9]" : "text-[#516078]"
                        }`}
                      >
                        {exp.date}
                      </p>
                    </div>
                  </div>

                  {/* Descripción */}
                  <ul
                    className={`list-disc list-inside mb-4 leading-relaxed space-y-2 ml-1 ${
                      darkMode ? "text-[#C4D7E9]" : "text-[#2b3a50]"
                    }`}
                  >
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>

                  {/* Tecnologías */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm border ${
                          darkMode
                            ? "bg-cyan-400/10 border-cyan-400/40 text-cyan-300"
                            : "bg-[#edf2f9] border-[#b6c2d9] text-[#345678]"
                        }`}
                      >
                        <svg className="w-5 h-5" aria-hidden="true">
                          <use href={`/portfolio.min.svg#${exp.logos[i]}`} />
                        </svg>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiencia;
