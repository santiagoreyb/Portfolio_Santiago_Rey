import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contacto({ darkMode }) {
  const [isOpen, setIsOpen] = useState(true);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(""), 4000);
      })
      .catch(() => {
        setStatus("error");
        setTimeout(() => setStatus(""), 4000);
      });
  };

  return (
    <div
      className={`w-[90%] max-w-6xl mx-auto pt-8 transition-all duration-300 ${
        isOpen ? "min-h-screen" : "h-auto"
      }`}
    >
      {/* Encabezado */}
      <div className="relative mb-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-wide text-center">
          📬 Contáctame
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
          isOpen ? "max-h-[5000px] mt-8 opacity-100" : "max-h-0 mt-0 opacity-0"
        }`}
      >
        {/* Contenedor del formulario */}
        <div
          className={`max-w-2xl mx-auto rounded-3xl shadow-xl p-5 transition-all ${
            darkMode
              ? "bg-[#0b1c2c] text-white shadow-cyan-900/40"
              : "bg-[#d3daeb] text-gray-900 shadow-gray-400/40"
          }`}
        >
          <p
            className={`text-center text-base md:text-lg mb-4 leading-relaxed ${
              darkMode ? "text-cyan-100/90" : "text-gray-700"
            }`}
          >
            Si deseas colaborar, tienes alguna pregunta o solo quieres saludar,
            ¡escríbeme un mensaje!
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <label className="flex flex-col">
              <span className="font-semibold mb-1">Nombre</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className={`p-3 rounded-xl border focus:outline-none focus:ring-2 ${
                  darkMode
                    ? "bg-[#112233] border-gray-600 focus:ring-cyan-400"
                    : "bg-white border-gray-400 focus:ring-[#93B4D4]"
                }`}
              />
            </label>

            <label className="flex flex-col">
              <span className="font-semibold mb-1">
                Tu email o forma en la que quieres ser contactado
              </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className={`p-3 rounded-xl border focus:outline-none focus:ring-2 ${
                  darkMode
                    ? "bg-[#112233] border-gray-600 focus:ring-cyan-400"
                    : "bg-white border-gray-400 focus:ring-[#93B4D4]"
                }`}
              />
            </label>

            <label className="flex flex-col">
              <span className="font-semibold mb-1">Mensaje</span>
              <textarea
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                required
                className={`p-3 rounded-xl border focus:outline-none focus:ring-2 resize-none ${
                  darkMode
                    ? "bg-[#112233] border-gray-600 focus:ring-cyan-400"
                    : "bg-white border-gray-400 focus:ring-[#93B4D4]"
                }`}
              />
            </label>

            <button
              type="submit"
              disabled={status === "sending"}
              className={`mt-4 w-full rounded-xl py-3 font-semibold transition-all ${
                darkMode
                  ? "bg-cyan-500 hover:bg-cyan-600 text-white"
                  : "bg-[#93B4D4] hover:bg-[#7fa3ca] text-black"
              }`}
            >
              {status === "sending"
                ? "Enviando..."
                : status === "success"
                ? "✅ Enviado correctamente"
                : status === "error"
                ? "❌ Error al enviar"
                : "Enviar mensaje"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
