import { useState } from "react";
import { motion } from "framer-motion";
import excelencia from "../assets/certificados/excelencia.pdf";
import hackathon from "../assets/certificados/hackathon.pdf";
import olimpiadas from "../assets/certificados/olimpiadas.pdf";
import excelencia11 from "../assets/certificados/excelencia11.pdf";
function Reconocimientos({ darkMode }) {
  const [isOpen, setIsOpen] = useState(true);

  const reconocimientos = [
    {
      titulo: "🎓 Mención de Honor por proyecto de grado destacado",
      entidad: "Pontificia Universidad Javeriana",
      fecha: "Mar 2025",
      descripcion:
        "Reconocimiento otorgado por alcanzar una altísima calidad académica en mi trabajo de grado, de acuerdo con lo establecido en el Numeral 99 del Reglamento de Estudiantes.",
      insignia:
        "https://wallet.xertify.co/certificates/FB4B8666A003?r=1",
    },
    {
      titulo: "🏅 Reconocimientos a la excelencia académica",
      entidad: "Pontificia Universidad Javeriana",
      fecha: "2021 - 2024",
      descripcion:
        "Otorgado la 'Constancia de Excelencia Académica' durante toda mi carrera de pregrado, un reconocimiento concedido semestralmente a los estudiantes con un promedio ponderado acumulado superior al límite establecido por el Vicerrector Académico, a propuesta del Consejo de la Facultad.",
      insignia: excelencia,
    },
    {
      titulo: "🥈 Segundo puesto Hackathon Ciber Pro Challenge",
      entidad: "Pontificia Universidad Javeriana",
      fecha: "May 2021",
      descripcion:
        "Reconocimiento otorgado por la Facultad de Ingeniería por mi participación en la Hackathon Ciber Pro Challenge 2021, formando parte del equipo Fsociety, con el cual obtuvimos el segundo puesto. Este evento se llevó a cabo durante 36 horas, del 23 al 25 de abril de 2021, destacando mi compromiso, entrega y dedicación.",
      insignia: hackathon,
    },
    {
      titulo: "🎖️ Beneficiario de la Beca Ingresa a la Javeriana",
      entidad: "Pontificia Universidad Javeriana",
      fecha: "2021",
      descripcion:
        "Fui beneficiario de la Beca Ingresa otorgada por la Pontificia Universidad Javeriana, un reconocimiento que premia la excelencia académica y apoya a estudiantes con dificultades económicas. Recibí este beneficio gracias a mi desempeño académico, compromiso con el aprendizaje y determinación para superar obstáculos.",
      insignia: "",
    },
    {
      titulo:
        "🏆 Primer Lugar en la Prueba Clasificatoria de Olimpiadas Colombianas de Matemáticas 2020 (Nivel Superior)",
      entidad: "Universidad Antonio Nariño",
      fecha: "Mar 2020",
      descripcion:
        "Primer puesto en la prueba clasificatoria nacional de las Olimpiadas Colombianas de Matemáticas 2020, demostrando habilidades analíticas y pensamiento lógico en nivel superior.",
      insignia: olimpiadas,
    },
    {
      titulo:
        "🎓 Reconocimiento a la Excelencia Académica en Grado 11",
      entidad: "Colegio Colsubsidio",
      fecha: "Dic 2020",
      descripcion:
        "Otorgado por la vivencia del perfil del estudiante y mis altos resultados académicos durante la educación media, reflejando liderazgo, compromiso y excelencia integral.",
      insignia: excelencia11,
    },
  ];

  return (
    <div
      className={`w-[90%] max-w-6xl mx-auto pt-5 transition-all duration-300 ${
        isOpen ? "min-h-screen" : "h-auto"
      }`}
    >
      {/* Encabezado */}
      <div className="relative mb-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-wide text-center">
          🏅 Honors & Awards
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
        <div className="flex flex-col gap-6 mt-10">
          {reconocimientos.map((rec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 rounded-2xl shadow-lg backdrop-blur-md border transition-all duration-300 ${
                darkMode
                  ? "bg-[#0f172a] border-cyan-500/30 hover:border-cyan-400/60"
                  : "bg-[#D9DEE8] border-[#93B4D4] hover:border-[#7CA5CE]"
              }`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3
                    className={`text-xl font-semibold mb-2 ${
                      darkMode ? "text-cyan-300" : "text-[#0369A1]"
                    }`}
                  >
                    {rec.titulo}
                  </h3>
                  <p
                    className={`text-sm ${
                      darkMode ? "text-[#C4D7E9]" : "text-[#334155]"
                    }`}
                  >
                    {rec.entidad} · {rec.fecha}
                  </p>
                </div>

                {rec.insignia && (
                  <a
                    href={rec.insignia}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-3 py-1.5 rounded-lg shadow-lg backdrop-blur-md border text-xs font-medium whitespace-nowrap transition-all duration-300 ${
                      darkMode
                        ? "bg-cyan-400/10 border-cyan-400/40 text-cyan-300 hover:bg-cyan-400/20"
                        : "bg-cyan-100 border-cyan-300 text-cyan-700 hover:bg-cyan-200"
                    }`}
                  >
                    🎖️ Ver certificado
                  </a>
                )}
              </div>

              <p
                className={`mt-3 text-sm ${
                  darkMode ? "text-[#C4D7E9]" : "text-[#334155]"
                }`}
              >
                {rec.descripcion}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Reconocimientos;
