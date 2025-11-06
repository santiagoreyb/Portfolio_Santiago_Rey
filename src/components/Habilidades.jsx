import { useState, useEffect, useRef } from "react"; 
import { motion } from "framer-motion";

function Habilidades({ darkMode }) {
  const [isOpen, setIsOpen] = useState(true);

  const categorias = [
    {
      titulo: "💻 Frontend",
      tecnologias: [
        { nombre: "React", logo: "icon-react" },
        { nombre: "JavaScript", logo: "icon-javascript" },
        { nombre: "TypeScript", logo: "icon-typescript" },
        { nombre: "HTML5", logo: "icon-html" },
        { nombre: "CSS3", logo: "icon-css" },
        { nombre: "Tailwind", logo: "icon-tailwind" },
        { nombre: "Framer Motion", logo: "icon-framer" },
      ],
    },
    {
      titulo: "⚙️ Backend",
      tecnologias: [
        { nombre: "Node.js", logo: "icon-nodejs" },
        { nombre: "Express", logo: "icon-express" },
        { nombre: "C#", logo: "icon-csharp" },
        { nombre: ".NET", logo: "icon-dotnet" },
        { nombre: "Java", logo: "icon-java" },
        { nombre: "Python (básico)", logo: "icon-python" },
      ],
    },
    {
      titulo: "🤖 Inteligencia Artificial",
      tecnologias: [
        { nombre: "TensorFlow", logo: "icon-tensorflow" },
        { nombre: "PyTorch", logo: "icon-pytorch" },
        { nombre: "Scikit-learn", logo: "icon-scikitlearn" },
        { nombre: "Keras", logo: "icon-keras" },
        { nombre: "OpenCV", logo: "icon-opencv" },
        { nombre: "Pandas", logo: "icon-pandas" },
        { nombre: "NumPy", logo: "icon-numpy" },
        { nombre: "IA Generativa", logo: "icon-ai" },
      ],
    },
    {
      titulo: "☁️ Cloud",
      tecnologias: [
        { nombre: "Google Cloud Platform", logo: "icon-gcp" },
        { nombre: "Microsoft Azure", logo: "icon-azure" },
        { nombre: "Firebase", logo: "icon-firebase" },
        { nombre: "Firestorage", logo: "icon-firestorage" },
        { nombre: "Cloud Functions", logo: "icon-cloudfunctions" },
        { nombre: "Kubernetes", logo: "icon-kubernetes" },
      ],
    },
    {
      titulo: "🧩 DevOps",
      tecnologias: [
        { nombre: "Docker", logo: "icon-docker" },
        { nombre: "Git", logo: "icon-git" },
        { nombre: "GitHub", logo: "icon-github" },
        { nombre: "GitHub Actions", logo: "icon-githubactions" },
        { nombre: "CI/CD", logo: "icon-cicd" },
        { nombre: "Linux", logo: "icon-linux" },
        { nombre: "Bash", logo: "icon-bash" },
      ],
    },
    {
      titulo: "🖥️ Sistemas Operativos",
      tecnologias: [
        { nombre: "Ubuntu", logo: "icon-ubuntu" },
        { nombre: "Linux", logo: "icon-linux" },
        { nombre: "Apache", logo: "icon-apache" },
        { nombre: "Windows Server", logo: "icon-windowsserver" },
      ],
    },
    {
      titulo: "📊 SAP (básico)",
      tecnologias: [
        { nombre: "SAP Fiori", logo: "icon-sapfiori" },
        { nombre: "SAP BTP", logo: "icon-sapbtp" },
      ],
    },
    {
      titulo: "🗄️ Bases de Datos",
      tecnologias: [
        { nombre: "PostgreSQL", logo: "icon-postgresql" },
        { nombre: "MongoDB", logo: "icon-mongodb" },
        { nombre: "MySQL", logo: "icon-mysql" },
        { nombre: "Firebase", logo: "icon-firebase" },
      ],
    },
    {
      titulo: "📱 Desarrollo Móvil",
      tecnologias: [
        { nombre: "Android", logo: "icon-android" },
        { nombre: "iOS", logo: "icon-ios" },
        { nombre: "Kotlin", logo: "icon-kotlin" },
        { nombre: "Dart", logo: "icon-dart" },
        { nombre: "Flutter (básico)", logo: "icon-flutter" },
      ],
    },
    {
      titulo: "🛠️ Herramientas",
      tecnologias: [
        { nombre: "VS Code", logo: "icon-vscode" },
        { nombre: "IntelliJ", logo: "icon-intellij" },
        { nombre: "Office", logo: "icon-office" },
        { nombre: "Jira", logo: "icon-jira" },
        { nombre: "Trello", logo: "icon-trello" },
        { nombre: "Figma", logo: "icon-figma" },
        { nombre: "Vite", logo: "icon-vite" },
      ],
    },
  ];

  return (
    <div
      className={`w-[90%] max-w-6xl mx-auto pt-10 transition-all duration-300 ${
        isOpen ? "min-h-screen" : "h-auto"
      }`}
    >
      <div className="relative mb-6">
        <h2
          className={`text-3xl md:text-4xl font-bold tracking-wide text-center ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          🧠 Habilidades Técnicas
        </h2>

        <button
          onClick={() => setIsOpen((s) => !s)}
          aria-expanded={isOpen}
          className={`absolute right-2 top-0 text-3xl md:text-4xl font-bold ${
            darkMode
              ? "text-white hover:bg-white/10"
              : "text-gray-700 hover:bg-gray-300/50"
          } transition px-2 rounded-md`}
          title={isOpen ? "Cerrar sección" : "Abrir sección"}
        >
          {isOpen ? "−" : "+"}
        </button>
      </div>

      <div
        className={`mx-auto h-[2px] w-full rounded-full ${
          darkMode ? "bg-cyan-300/50" : "bg-gray-500/40"
        }`}
      ></div>

      <div
        className={`overflow-hidden transition-all duration-700 ease-in-out ${
          isOpen ? "max-h-[5000px] mt-6 opacity-100" : "max-h-0 mt-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-4 mt-10">
          {categorias.map((cat, idx) => (
            <Categoria
              key={idx}
              categoria={cat}
              darkMode={darkMode}
              delay={idx * 0.1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Categoria({ categoria, darkMode, delay }) {
  const containerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    const el = containerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
  };

  useEffect(() => {
    checkScroll();
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scroll = (direction) => {
    const el = containerRef.current;
    const amount = 300;
    el.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`relative rounded-2xl shadow-md border pt-5 transition-all duration-300 backdrop-blur-md ${
        darkMode
          ? "bg-[#0f172a]/80 border-cyan-500/30 hover:border-cyan-400/60"
          : "bg-[#cdd3e1] border-gray-300 hover:border-gray-400"
      }`}
    >
      <h3
        className={`text-xl font-semibold mb-3 ${
          darkMode ? "text-cyan-300" : "text-gray-800"
        }`}
      >
        {categoria.titulo}
      </h3>

      <div className="relative">
        {canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full font-bold text-xl ${
              darkMode
                ? "bg-black/50 hover:bg-black/70 text-white"
                : "bg-gray-400/60 hover:bg-gray-500 text-gray-900"
            }`}
          >
            ‹
          </button>
        )}

        <div
          ref={containerRef}
          className="flex gap-2 overflow-x-auto scrollbar-hide scroll-smooth px-15"
        >
          {categoria.tecnologias.map((tech, i) => (
            <div
              key={i}
              className={`flex flex-col items-center justify-center min-w-[90px] px-3 py-2 rounded-xl border transition-all duration-300 ${
                darkMode
                  ? "bg-cyan-400/10 border-cyan-400/40 text-cyan-300 hover:bg-cyan-400/20"
                  : "bg-cyan-100 border-cyan-300 text-cyan-700 hover:bg-cyan-200"
              }`}
            >
              <svg className="w-9 h-9 mb-1" aria-hidden="true">
                <use href={`/portfolio.min.svg#${tech.logo}`} />
              </svg>
              <span className="text-xs font-medium">{tech.nombre}</span>
            </div>
          ))}
        </div>

        {canScrollRight && (
          <button
            onClick={() => scroll("right")}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full font-bold text-xl ${
              darkMode
                ? "bg-black/50 hover:bg-black/70 text-white"
                : "bg-gray-400/60 hover:bg-gray-500 text-gray-900"
            }`}
          >
            ›
          </button>
        )}
      </div>
    </motion.div>
  );
}

export default Habilidades;
