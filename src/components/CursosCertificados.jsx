import { useState } from "react";
import { motion } from "framer-motion";

import google from "../assets/pictures/google.png";
import ibm from "../assets/pictures/ibm.png";
import redhat from "../assets/pictures/redhat.png";
import samsung from "../assets/pictures/samsung.png";
import sena from "../assets/pictures/sena.png";
import uniandes from "../assets/pictures/uniandes.png";
import piloto from "../assets/pictures/piloto.png";
import redhatpdf from "../assets/certificados/redhat.pdf";
import pilotopdf from "../assets/certificados/piloto.pdf";
import senapdf from "../assets/certificados/sena.pdf";

function CursosCertificados({ darkMode }) {
  const [isOpen, setIsOpen] = useState(true);

  const cursos = [
    // Desarrollo
    {
      area: "Desarrollo",
      role: "CET - TIC Desarrollo Web Front-End con HTML, CSS y JavaScript (React)",
      company: "Universidad de Los Andes",
      date: "Oct 2025",
      logo: uniandes,
      insights: [
        "Desarrollo de interfaces web interactivas.",
        "Manejo de componentes, hooks y estados en React.",
      ],
      insignia: "https://wallet.xertify.co/certificates/2A0EAF66A002",
      technologies: ["HTML5", "CSS", "JavaScript", "React"],
      logos: ["icon-html-5", "icon-css3", "icon-javascript", "icon-react"],
    },
    {
      area: "Desarrollo",
      role: "Diplomado en Programación y Codificación",
      company: "Samsung Electronics Colombia",
      date: "Jun 2021",
      logo: samsung,
      insights: [
        "Fundamentos de programación en C y C++.",
        "Diseño de soluciones interactivas con Arduino y Scratch.",
      ],
      insignia: "https://wallet.xertify.co/certificates/EFA11D1AA001?viewMode=regular",
      technologies: ["C++", "Arduino", "UX Design", "Problem Solving"],
      logos: [
        "icon-c-plus-plus-logo",
        "icon-arduino",
        "icon-external-ui-design-ux-and-ui-icons-flaticons-lineal-color-flat-icons-2",
        "icon-brain-3",
      ],
    },
    {
      area: "Desarrollo",
      role: "Análisis para el desarrollo móvil con App Inventor",
      company: "SENA",
      date: "Sep 2020",
      logo: sena,
      insights: [
        "Desarrollo de aplicaciones móviles usando App Inventor.",
        "Introducción al diseño visual de interfaces y lógica de bloques.",
      ],
      insignia: senapdf,
      technologies: ["App Inventor", "Android", "UI Design"],
      logos: [
        "icon-android-os",
        "icon-android-os",
        "icon-external-ui-design-ux-and-ui-icons-flaticons-lineal-color-flat-icons-2",
      ],
    },
    {
      area: "Desarrollo",
      role: "IoT: Programación con Arduinos y Raspberry Pi",
      company: "Universidad Piloto de Colombia",
      date: "Oct 2019",
      logo: piloto,
      insights: [
        "Desarrollo de proyectos IoT con Arduino y Raspberry Pi.",
        "Integración de sensores y sistemas embebidos.",
      ],
      insignia: pilotopdf,
      technologies: ["Arduino", "Raspberry Pi", "IoT"],
      logos: [
        "icon-arduino",
        "icon-external-raspberry-pi-is-a-small-and-affordable-computer-that-you-can-use-to-learn-programming-logo-color-tal-revivo",
        "icon-external-iot-fintech-becris-lineal-color-becris",
      ],
    },
    // Cloud
    {
      area: "Cloud",
      role: "Google Cloud Computing Foundations Certificate",
      company: "Google",
      date: "Jul 2025",
      logo: google,
      insights: [
        "Fundamentos de Cloud Computing y servicios de GCP.",
        "Implementación de soluciones en Cloud Run, Cloud Engine, Firestore, Dataflow, etc.",
      ],
      insignia:
        "https://www.credly.com/badges/56df403f-bc3f-4289-a7d9-88213affe407/linked_in_profile",
      technologies: ["GCP", "Cloud Run", "Compute Engine", "Firestore", "Storage"],
      logos: [
        "icon-google-cloud",
        "icon-google-cloud-run-svgrepo-com",
        "icon-google-compute-engine",
        "icon-cloud-firestore",
        "icon-cloud-storage",
      ],
    },
    {
      area: "Cloud",
      role: "Cloud Computing con Azure y AWS",
      company: "Universidad de Los Andes",
      date: "Jul 2025",
      logo: uniandes,
      insights: [
        "Arquitectura y servicios de Azure y AWS.",
        "Administración y gobernanza en Azure y AWS.",
        "DevOps y automatización.",
      ],
      insignia: "",
      technologies: ["Azure", "AWS"],
      logos: ["icon-azure-1", "icon-amazon-web-services"],
    },
    // Metodologías
    {
      area: "Metodologías Ágiles",
      role: "Agile Explorer",
      company: "IBM",
      date: "Jun 2025",
      logo: ibm,
      insights: [
        "Gestión ágil con Scrum y Design Thinking.",
        "Aplicación de metodologías ágiles en desarrollo de software.",
      ],
      insignia:
        "https://www.credly.com/badges/23152632-a3a0-4bf7-9002-f4dac255380c/linked_in_profile",
      technologies: ["Scrum", "Agile", "Project Management"],
      logos: [
        "icon-external-scrum-agile-flaticons-lineal-color-flat-icons-6",
        "icon-external-scrum-agile-flaticons-lineal-color-flat-icons-6",
        "icon-problem-solving",
      ],
    },
    // Sistemas
    {
      area: "Sistemas Operativos",
      role: "Red Hat System Administration I (RH124)",
      company: "Red Hat",
      date: "May 2023",
      logo: redhat,
      insights: [
        "Administración básica de sistemas Linux Red Hat.",
        "Gestión de usuarios, archivos, procesos y permisos.",
      ],
      insignia: redhatpdf,
      technologies: ["Linux", "Red Hat", "SysAdmin"],
      logos: ["icon-linux", "icon-red-hat", "icon-settings-3"],
    },
    // Computación Cuántica
    {
      area: "Computación Cuántica",
      role: "Introducción a Computación Cuántica",
      company: "Universidad de Los Andes",
      date: "Jul 2025",
      logo: uniandes,
      insights: [
        "Qubits y circuitos cuánticos.",
        "Entrenamiento y protocolos cuánticos.",
        "Algoritmo Grover y práctica con Qiskit.",
      ],
      insignia: "",
      technologies: ["Qubits", "Circuitos Cuánticos", "Qiskit"],
      logos: [
        "icon-75-percents",
        "icon-external-circuit-future-shopping-becris-lineal-color-becris",
        "icon-python",
      ],
    },
  ];

  // 🔹 Orden personalizado de áreas
  const ordenAreas = [
    "Desarrollo",
    "Computación Cuántica",
    "Cloud",
    "Metodologías Ágiles",
    "Sistemas Operativos",
    
  ];

  // 🔹 Agrupar cursos y ordenar según el orden personalizado
  const areasOrdenadas = Object.entries(
    cursos.reduce((acc, curso) => {
      acc[curso.area] = acc[curso.area] ? [...acc[curso.area], curso] : [curso];
      return acc;
    }, {})
  ).sort((a, b) => ordenAreas.indexOf(a[0]) - ordenAreas.indexOf(b[0]));

  return (
    <div
      className={`w-[90%] max-w-6xl mx-auto pt-5 transition-all duration-300 ${
        isOpen ? "min-h-screen" : "h-auto"
      }`}
    >
      <div className="relative mb-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-wide text-center">
          📜 Cursos & Certificados
        </h2>
        <button
          onClick={() => setIsOpen((s) => !s)}
          aria-expanded={isOpen}
          className="absolute right-2 top-0 text-3xl md:text-4xl font-bold hover:bg-white/5 transition"
        >
          {isOpen ? "−" : "+"}
        </button>
      </div>

      <div
        className={`mx-auto h-[2px] w-full rounded-full ${
          darkMode ? "bg-cyan-300/50" : "bg-[#93B4D4]"
        }`}
      ></div>

      <div
        className={`overflow-hidden transition-all duration-700 ease-in-out ${
          isOpen ? "max-h-[5000px] mt-2 opacity-100" : "max-h-0 mt-0 opacity-0"
        }`}
      >
        <div className="columns-1 md:columns-2 gap-6 space-y-6 mt-10">
          {areasOrdenadas.map(([area, cursosFiltrados], index) => (
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
              <h3
                className={`text-2xl font-semibold mb-6 text-center ${
                  darkMode ? "text-cyan-300" : "text-[#0369A1]"
                }`}
              >
                {area}
              </h3>

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

                    <ul
                      className={`list-disc list-inside text-sm space-y-1 mb-3 ${
                        darkMode ? "text-[#C4D7E9]" : "text-[#334155]"
                      }`}
                    >
                      {exp.insights.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>

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
          ))}
        </div>
      </div>
    </div>
  );
}

export default CursosCertificados;
