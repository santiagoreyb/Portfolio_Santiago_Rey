import { useState } from "react";
import { motion } from "framer-motion";
import colpensiones from "../assets/pictures/colpensiones.png";
import freelance from "../assets/pictures/freelance.png"; // 🔹 Logo genérico

function Experiencia({ darkMode, lang}) {
  const [isOpen, setIsOpen] = useState(true);

  // Traducciones de texto fijo
  const titles = {
    es: {
      experience: "💼 Experiencia",
      close: "Cerrar sección",
      open: "Abrir sección",
    },
    en: {
      experience: "💼 Experience",
      close: "Close section",
      open: "Open section",
    },
  };

  // Contenido bilingüe
  const experiences = [
    {
      company: "Colpensiones",
      role: {
        es: "Desarrollador Full Stack e Ingeniero de Automatización",
        en: "Full Stack Developer and Automation Engineer",
      },
      date: {
        es: "Bogotá, Colombia · Feb 2025 – Presente",
        en: "Bogotá, Colombia · Feb 2025 – Present",
      },
      logo: colpensiones,
      description: {
        es: [
          "Optimizé la eficiencia tecnológica interna desarrollando y manteniendo aplicaciones con .NET (C#), Angular, TypeScript y SQL Server/Sybase, reduciendo los tiempos de proceso en un 30%.",
          "Diseñé e implementé APIs REST seguras y escalables, fortaleciendo la comunicación entre sistemas y mejorando la interoperabilidad entre las plataformas digitales institucionales.",
          "Mejoré la calidad del software integrando pruebas unitarias y de integración automatizadas, disminuyendo los errores en producción en un 25%.",
          "Fomenté prácticas ágiles participando activamente en Scrum, logrando ciclos de entrega más cortos y una mejor alineación con los objetivos del negocio.",
          "Apoyé el despliegue exitoso de soluciones en la nube, documentando los procesos técnicos y garantizando la estabilidad en los entornos productivos.",
        ],
        en: [
          "Optimized internal technological efficiency by developing and maintaining applications using .NET (C#), Angular, TypeScript, and SQL Server/Sybase, reducing processing times by 30%.",
          "Designed and implemented secure, scalable REST APIs, strengthening system communication and improving interoperability across institutional digital platforms.",
          "Enhanced software quality by integrating automated unit and integration tests, reducing production errors by 25%.",
          "Promoted agile practices by actively participating in Scrum, achieving shorter delivery cycles and better alignment with business goals.",
          "Supported successful cloud solution deployments, documenting technical processes and ensuring stability in production environments.",
        ],
      },
      logos: [
        "icon-angularjs",
        "icon-typescript",
        "icon-net-framework",
        "icon-c-sharp-logo",
        "icon-microsoft-sql-server",
        "icon-azure-1",
      ],
      technologies: ["Angular", "TypeScript", ".NET", "C#", "SQL Server", "Azure"],
    },
    {
      company: "AWAQ Organization",
      role: {
        es: "Desarrollador y Scrum Master",
        en: "Developer and Scrum Master",
      },
      date: {
        es: "Bogotá, Colombia · Feb 2024 – Nov 2024",
        en: "Bogotá, Colombia · Feb 2024 – Nov 2024",
      },
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8KDK0j2hil__W4A_3wg4HPedq-PqBuiLB3w&s",
      description: {
        es: [
          "Lideré el desarrollo del videojuego educativo 3D 'EcoGuardians' utilizando Unity (C#), lo que aumentó la interacción de los usuarios y promovió la conciencia ambiental entre jóvenes.",
          "Optimicé el rendimiento del juego y la experiencia del usuario, mejorando los tiempos de carga y la fluidez multiplataforma.",
          "Dirigí un equipo multidisciplinario bajo la metodología Scrum, cumpliendo el 100% de los objetivos de cada sprint y consolidando una cultura de colaboración técnica.",
        ],
        en: [
          "Led the development of the 3D educational video game 'EcoGuardians' using Unity (C#), increasing user engagement and promoting environmental awareness among youth.",
          "Optimized game performance and user experience by improving loading times and cross-platform smoothness.",
          "Managed a multidisciplinary team under the Scrum methodology, meeting 100% of sprint objectives and fostering a strong culture of technical collaboration.",
        ],
      },
      logos: [
        "icon-unity",
        "icon-net-framework",
        "icon-c-sharp-logo",
        "icon-blender-3d",
        "icon-react",
        "icon-javascript",
        "icon-adobe-illustrator",
        "icon-adobe-photoshop"
      ],
      technologies: ["Unity", ".NET", "C#", "Blender", "React", "JavaScript", "Adobe Illustrator", "Adobe Photoshop"],
    },
    {
      company: "Freelance",
      role: {
        es: "Desarrollador Full Stack Independiente",
        en: "Independent Full Stack Developer",
      },
      date: {
        es: "Bogotá, Colombia · Ene 2023 – Dic 2023",
        en: "Bogotá, Colombia · Jan 2023 – Dec 2023",
      },
      logo: freelance,
      description: {
        es: [
          "Desarrollé soluciones personalizadas para clientes en los sectores educativo y tecnológico, utilizando .NET, Java, Python, C++ y JavaScript, garantizando aplicaciones funcionales, seguras y escalables.",
          "Implementé arquitecturas modulares y APIs REST, mejorando la integración entre sistemas y la eficiencia en el mantenimiento de proyectos.",
          "Optimizé interfaces y flujos de usuario aplicando principios de UX/UI y diseño responsivo, incrementando la satisfacción de los usuarios finales.",
          "Gestioné proyectos bajo metodologías ágiles, asegurando entregas a tiempo y comunicación efectiva con los clientes.",
        ],
        en: [
          "Developed customized solutions for clients in the educational and tech sectors using .NET, Java, Python, C++, and JavaScript, ensuring functional, secure, and scalable applications.",
          "Implemented modular architectures and REST APIs, improving system integration and project maintenance efficiency.",
          "Optimized interfaces and user flows using UX/UI principles and responsive design, increasing end-user satisfaction.",
          "Managed projects under agile methodologies, ensuring timely deliveries and effective client communication.",
        ],
      },
      logos: [
        "icon-net-framework",
        "icon-java-coffee-cup-logo",
        "icon-python",
        "icon-c-plus-plus-logo",
        "icon-javascript",
      ],
      technologies: [".NET", "Java", "Python", "C++", "JavaScript"],
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
          {titles[lang].experience}
        </h2>

        <button
          onClick={() => setIsOpen((s) => !s)}
          aria-expanded={isOpen}
          className="absolute right-2 top-0 text-3xl md:text-4xl font-bold hover:bg-white/5 transition"
          title={isOpen ? titles[lang].close : titles[lang].open}
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
        className={`transition-all duration-700 ease-in-out ${
          isOpen
            ? "max-h-none mt-6 opacity-100 overflow-visible"
            : "max-h-0 mt-0 opacity-0 overflow-hidden"
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
                        {exp.role[lang]}
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
                        {exp.date[lang]}
                      </p>
                    </div>
                  </div>

                  <ul
                    className={`list-disc list-inside mb-4 leading-relaxed space-y-2 ml-1 ${
                      darkMode ? "text-[#C4D7E9]" : "text-[#2b3a50]"
                    }`}
                  >
                    {exp.description[lang].map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>

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
