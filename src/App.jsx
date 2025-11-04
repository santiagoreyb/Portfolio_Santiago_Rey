import { useState, useEffect } from "react";
import Header from "./components/Header";
import Perfil from "./components/Perfil";
import Experiencia from "./components/Experiencia";
import Educacion from "./components/Educacion";
import CursosCertificados from "./components/CursosCertificados";
import Proyectos from "./components/Proyectos";
import Habilidades from "./components/Habilidades";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    if (darkMode) {
      root.classList.add("dark");
      body.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      body.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen ">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="max-w-6xl mx-auto px-4">
        <section id= "perfil">
          <Perfil darkMode={darkMode} />
        </section>
        <section id= "experiencia">
          <Experiencia darkMode={darkMode} />
        </section>
        <Educacion darkMode={darkMode} />
        <CursosCertificados darkMode={darkMode} />
        <Proyectos darkMode={darkMode} />
        <Habilidades darkMode={darkMode} />
        <Contacto darkMode={darkMode} />
      </main>
      <Footer darkMode={darkMode}></Footer>
    </div>
  );
}

export default App;
