import { useState } from "react";
import { motion } from "framer-motion";
import excelencia from "../assets/certificados/excelencia.pdf";
import hackathon from "../assets/certificados/hackathon.pdf";
import olimpiadas from "../assets/certificados/olimpiadas.pdf";
import excelencia11 from "../assets/certificados/excelencia11.pdf";

function Reconocimientos({ darkMode, lang}) {
  const [isOpen, setIsOpen] = useState(true);

  const reconocimientos = [
    {
      titulo: {
        es: "🎓 Mención de Honor por proyecto de grado destacado",
        en: "🎓 Honor Mention for Outstanding Graduation Project",
      },
      entidad: { es: "Pontificia Universidad Javeriana", en: "Pontificia Universidad Javeriana" },
      fecha: "Mar 2025",
      descripcion: {
        es: "Reconocimiento otorgado por alcanzar una altísima calidad académica en mi trabajo de grado, de acuerdo con lo establecido en el Numeral 99 del Reglamento de Estudiantes.",
        en: "Recognition awarded for achieving outstanding academic quality in my graduation project, according to Numeral 99 of the Student Regulations.",
      },
      insignia: "https://wallet.xertify.co/certificates/FB4B8666A003?r=1",
    },
    {
      titulo: { es: "🏅 Reconocimientos a la excelencia académica", en: "🏅 Academic Excellence Awards" },
      entidad: { es: "Pontificia Universidad Javeriana", en: "Pontificia Universidad Javeriana" },
      fecha: "2021 - 2024",
      descripcion: {
        es: "Otorgado la 'Constancia de Excelencia Académica' durante toda mi carrera de pregrado, un reconocimiento concedido semestralmente a los estudiantes con un promedio ponderado acumulado superior al límite establecido por el Vicerrector Académico.",
        en: "Awarded the 'Academic Excellence Certificate' throughout my undergraduate career, given semesterly to students with a cumulative GPA above the limit set by the Academic Vice-Rector.",
      },
      insignia: excelencia,
    },
    {
      titulo: { es: "🥈 Segundo puesto Hackathon Ciber Pro Challenge", en: "🥈 Second Place Hackathon Ciber Pro Challenge" },
      entidad: { es: "Pontificia Universidad Javeriana", en: "Pontificia Universidad Javeriana" },
      fecha: "May 2021",
      descripcion: {
        es: "Reconocimiento otorgado por la Facultad de Ingeniería por mi participación en la Hackathon Ciber Pro Challenge 2021...",
        en: "Recognition awarded by the Faculty of Engineering for my participation in the Hackathon Ciber Pro Challenge 2021...",
      },
      insignia: hackathon,
    },
    {
      titulo: { es: "🎖️ Beneficiario de la Beca Ingresa a la Javeriana", en: "🎖️ Beneficiary of the Ingresa Scholarship at Javeriana" },
      entidad: { es: "Pontificia Universidad Javeriana", en: "Pontificia Universidad Javeriana" },
      fecha: "2021",
      descripcion: {
        es: "Fui beneficiario de la Beca Ingresa otorgada por la Pontificia Universidad Javeriana...",
        en: "I was the beneficiary of the Ingresa Scholarship awarded by Pontificia Universidad Javeriana...",
      },
      insignia: "",
    },
    {
      titulo: { es: "🏆 Primer Lugar en Olimpiadas Colombianas de Matemáticas 2020", en: "🏆 First Place in Colombian Mathematics Olympiad 2020" },
      entidad: { es: "Universidad Antonio Nariño", en: "Universidad Antonio Nariño" },
      fecha: "Mar 2020",
      descripcion: {
        es: "Primer puesto en la prueba clasificatoria nacional de las Olimpiadas Colombianas de Matemáticas 2020...",
        en: "First place in the national qualifying test of the Colombian Mathematics Olympiad 2020...",
      },
      insignia: olimpiadas,
    },
    {
      titulo: { es: "🎓 Reconocimiento a la Excelencia Académica en Grado 11", en: "🎓 Academic Excellence Recognition in 11th Grade" },
      entidad: { es: "Colegio Colsubsidio", en: "Colegio Colsubsidio" },
      fecha: "Dic 2020",
      descripcion: {
        es: "Otorgado por la vivencia del perfil del estudiante y mis altos resultados académicos durante la educación media...",
        en: "Awarded for living the student profile and achieving high academic results during high school...",
      },
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
          {lang === "es" ? "🏅 Reconocimientos" : "🏅 Honors & Awards"}
        </h2>

        {/* Botón + / − */}
        <button
          onClick={() => setIsOpen((s) => !s)}
          aria-expanded={isOpen}
          className="absolute right-2 top-0 text-3xl md:text-4xl font-bold hover:bg-white/5 transition"
          title={isOpen ? (lang === "es" ? "Cerrar sección" : "Close section") : (lang === "es" ? "Abrir sección" : "Open section")}
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
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
              <div>
                <h3
                  className={`text-xl font-semibold mb-2 ${
                    darkMode ? "text-cyan-300" : "text-[#0369A1]"
                  }`}
                >
                  {rec.titulo[lang]}
                </h3>
                <p
                  className={`text-sm ${
                    darkMode ? "text-[#C4D7E9]" : "text-[#334155]"
                  }`}
                >
                  {rec.entidad[lang]} · {rec.fecha}
                </p>
              </div>

              {rec.insignia && (
                <a
                  href={rec.insignia}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-2 sm:mt-0 self-start sm:self-auto px-3 py-1.5 rounded-lg shadow-lg backdrop-blur-md border text-xs font-medium whitespace-nowrap transition-all duration-300 ${
                    darkMode
                      ? "bg-cyan-400/10 border-cyan-400/40 text-cyan-300 hover:bg-cyan-400/20"
                      : "bg-cyan-100 border-cyan-300 text-cyan-700 hover:bg-cyan-200"
                  }`}
                >
                  🎖️ {lang === "es" ? "Ver certificado" : "View Certificate"}
                </a>
              )}
            </div>


              <p
                className={`mt-3 text-sm ${
                  darkMode ? "text-[#C4D7E9]" : "text-[#334155]"
                }`}
              >
                {rec.descripcion[lang]}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Reconocimientos;
