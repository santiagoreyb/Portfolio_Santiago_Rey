import { useState } from "react";
import { motion } from "framer-motion";
import javeriana from "../assets/javeriana.png";

function CursosCertificados({ darkMode }) {
  const [isOpen, setIsOpen] = useState(true);

  const areas = ["Desarrollo", "SAP", "Cloud"];

  const cursos = [
    {
      area: "Desarrollo",
      role: "Curso de React Avanzado",
      company: "Udemy",
      date: "2024",
      logo: javeriana,
      insights: ["Hooks, Context API, optimización de rendimiento."],
      insignia: "",
      technologies: ["React", "Hooks", "Context API"],
      logos: ["icon-react", "icon-hooks", "icon-context"],
    },
    {
      area: "Cloud",
      role: "Certificación JavaScript",
      company: "freeCodeCamp",
      date: "2023",
      logo: javeriana,
      insights: ["DOM, ES6+, y programación funcional."],
      insignia: "",
      technologies: ["JavaScript", "ES6", "DOM"],
      logos: ["icon-javascript", "icon-es6", "icon-dom"],
    },
    {
      area: "SAP",
      role: "Consultor SAP FI",
      company: "SAP Learning Hub",
      date: "2024",
      logo: javeriana,
      insights: ["Gestión financiera y contabilidad en SAP."],
      insignia: "",
      technologies: ["SAP FI", "Contabilidad", "Gestión Financiera"],
      logos: ["icon-sap", "icon-accounting", "icon-finance"],
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
        <h2 className="text-3xl md:text-4xl font-bold tracking-wide text-center">
          📜 Cursos & Certificados
        </h2>

        {/* Botón + / − */}
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
          darkMode ? "bg-cyan-300/50" : "bg-[#93B4D4]"
        }`}
      ></div>

      {/* Contenido */}
      <div
        className={`overflow-hidden transition-all duration-700 ease-in-out ${
          isOpen ? "max-h-[5000px] mt-6 opacity-100" : "max-h-0 mt-0 opacity-0"
        }`}
      >
        {/* Grid estilo collage */}
        <div className="columns-1 md:columns-2 gap-6 space-y-6 mt-10">
          {areas.map((area, index) => {
            const cursosFiltrados = cursos.filter((curso) => curso.area === area);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`break-inside-avoid p-6 rounded-2xl shadow-lg backdrop-blur-md border transition-all duration-300 ${
                  darkMode
                    ? "bg-[#0f172a] border-cyan-500/30 hover:border-cyan-400/60"
                    : "bg-[#D9DEE8] border-[#93B4D4] hover:border-[#7CA5CE]"
                }`}
              >
                {/* Título del área */}
                <h3
                  className={`text-2xl font-semibold mb-6 text-center ${
                    darkMode ? "text-cyan-300" : "text-[#0369A1]"
                  }`}
                >
                  {area}
                </h3>

                {/* Mini-tarjetas dentro */}
                <div className="flex flex-col gap-5">
                  {cursosFiltrados.map((exp, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      className={`p-5 rounded-xl border transition-all duration-300 ${
                        darkMode
                          ? "bg-[#1a2541] border-cyan-400/30 hover:border-cyan-400/60"
                          : "bg-[#CBD4E1] border-[#93B4D4] hover:border-[#7CA5CE]"
                      }`}
                    >
                      {/* Encabezado */}
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="flex items-center gap-3">
                          <img
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            className="w-12 h-12 object-contain rounded-md"
                          />
                          <div>
                            <h4
                              className={`text-lg font-semibold ${
                                darkMode ? "text-cyan-300" : "text-[#1E293B]"
                              }`}
                            >
                              {exp.role}
                            </h4>
                            <p
                              className={`text-sm ${
                                darkMode ? "text-[#C4D7E9]" : "text-[#334155]"
                              }`}
                            >
                              {exp.company}
                            </p>
                            <p
                              className={`text-xs ${
                                darkMode ? "text-[#C4D7E9]" : "text-[#334155]"
                              }`}
                            >
                              {exp.date}
                            </p>
                          </div>
                        </div>

                        {/* Botón insignia */}
                        {exp.insignia && (
                          <a
                            href={exp.insignia}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`px-3 py-1.5 rounded-lg shadow-lg backdrop-blur-md border text-xs font-medium whitespace-nowrap transition-all duration-300 ${
                              darkMode
                                ? "bg-cyan-400/10 border-cyan-400/40 text-cyan-300 hover:bg-cyan-400/20"
                                : "bg-cyan-100 border-cyan-300 text-cyan-700 hover:bg-cyan-200"
                            }`}
                          >
                            🏅 Ver insignia
                          </a>
                        )}
                      </div>

                      {/* Descripción */}
                      <ul
                        className={`list-disc list-inside text-sm space-y-1 mb-3 ${
                          darkMode ? "text-[#C4D7E9]" : "text-[#334155]"
                        }`}
                      >
                        {exp.insights.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>

                      {/* Tecnologías */}
                      {exp.technologies && (
                        <div className="flex flex-wrap gap-2 mt-2">
                          {exp.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm border transition-all duration-300 ${
                                darkMode
                                  ? "bg-cyan-400/10 border-cyan-400/40 text-cyan-300 hover:bg-cyan-400/20"
                                  : "bg-cyan-100 border-cyan-300 text-cyan-700 hover:bg-cyan-200"
                              }`}
                            >
                              <svg className="w-5 h-5" aria-hidden="true">
                                <use href={`/portfolio.min.svg#${exp.logos[i]}`} />
                              </svg>
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CursosCertificados;
