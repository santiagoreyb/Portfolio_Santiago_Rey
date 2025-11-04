import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

function Contacto({ darkMode }) {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });
  const [enviando, setEnviando] = useState(false);
  const [estado, setEstado] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviando(true);
    setEstado(null);

    emailjs
      .send(
        "service_sw205xk", // ✅ Service ID
        "template_dzxzifl", // ✅ Template ID
        formData,
        "usZ3hrzW63tuE5iHP" // ✅ Public Key
      )
      .then(
        () => {
          setEstado("success");
          setFormData({ nombre: "", email: "", mensaje: "" });
        },
        (error) => {
          console.error("Error al enviar:", error);
          setEstado("error");
        }
      )
      .finally(() => setEnviando(false));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`w-[90%] max-w-2xl mx-auto mt-20 mb-10 p-8 rounded-2xl shadow-md border backdrop-blur-md ${
        darkMode
          ? "bg-[#0f172a]/80 border-cyan-500/30"
          : "bg-[#cdd3e1] border-gray-300"
      }`}
    >
      <h2
        className={`text-3xl md:text-4xl font-bold text-center mb-6 ${
          darkMode ? "text-white" : "text-gray-800"
        }`}
      >
        📬 Contáctame
      </h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 text-sm md:text-base"
      >
        {/* Nombre */}
        <div className="flex flex-col">
          <label
            htmlFor="nombre"
            className={`${darkMode ? "text-cyan-200" : "text-gray-700"} mb-1`}
          >
            Tu nombre
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            required
            value={formData.nombre}
            onChange={handleChange}
            className={`p-3 rounded-lg border outline-none transition-all duration-300 ${
              darkMode
                ? "bg-[#1e293b] border-cyan-500/30 text-white focus:border-cyan-400"
                : "bg-white border-gray-300 text-gray-800 focus:border-cyan-500"
            }`}
            placeholder="Ej: Santiago Rey"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label
            htmlFor="email"
            className={`${darkMode ? "text-cyan-200" : "text-gray-700"} mb-1`}
          >
            Tu email o forma de contacto
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className={`p-3 rounded-lg border outline-none transition-all duration-300 ${
              darkMode
                ? "bg-[#1e293b] border-cyan-500/30 text-white focus:border-cyan-400"
                : "bg-white border-gray-300 text-gray-800 focus:border-cyan-500"
            }`}
            placeholder="ejemplo@email.com"
          />
        </div>

        {/* Mensaje */}
        <div className="flex flex-col">
          <label
            htmlFor="mensaje"
            className={`${darkMode ? "text-cyan-200" : "text-gray-700"} mb-1`}
          >
            Tu mensaje
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            required
            rows="5"
            value={formData.mensaje}
            onChange={handleChange}
            className={`p-3 rounded-lg border outline-none resize-none transition-all duration-300 ${
              darkMode
                ? "bg-[#1e293b] border-cyan-500/30 text-white focus:border-cyan-400"
                : "bg-white border-gray-300 text-gray-800 focus:border-cyan-500"
            }`}
            placeholder="Escribe tu mensaje aquí..."
          ></textarea>
        </div>

        {/* Botón */}
        <button
          type="submit"
          disabled={enviando}
          className={`mt-4 py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
            enviando
              ? "opacity-70 cursor-not-allowed"
              : darkMode
              ? "bg-cyan-500 hover:bg-cyan-400 text-black"
              : "bg-cyan-600 hover:bg-cyan-500 text-white"
          }`}
        >
          {enviando ? "Enviando..." : "Enviar mensaje"}
        </button>
      </form>

      {/* Mensajes de estado */}
      {estado === "success" && (
        <p
          className={`mt-4 text-center font-medium ${
            darkMode ? "text-green-400" : "text-green-600"
          }`}
        >
          ✅ ¡Mensaje enviado con éxito!
        </p>
      )}
      {estado === "error" && (
        <p
          className={`mt-4 text-center font-medium ${
            darkMode ? "text-red-400" : "text-red-600"
          }`}
        >
          ❌ Ocurrió un error al enviar. Intenta de nuevo.
        </p>
      )}
    </motion.div>
  );
}

export default Contacto;
