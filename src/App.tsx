import { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaTimes } from "react-icons/fa";

export default function CoxinhaLandingPage() {
  const [showGallery, setShowGallery] = useState(false);

  const galleryImages = [
    "https://i.pinimg.com/736x/0e/57/3a/0e573abf0eb237f0e0acdba8e78259b0.jpg",
    "https://i.pinimg.com/474x/af/c5/4d/afc54d46d2698a70cba6ed9d6cfe69d2.jpg",
    "https://i.pinimg.com/736x/f2/65/2b/f2652beb1bc93bf4c6fc1745e33f7dd0.jpg",
    "https://i.pinimg.com/736x/a9/c4/d7/a9c4d7ee0e30e4ddb019fec2079c2e21.jpg",
    "https://i.pinimg.com/736x/2c/16/b6/2c16b665654c9cf49a113a827e110125.jpg",
    "https://i.pinimg.com/736x/0b/04/8f/0b048f9e1dee49be463aa2695234c4c2.jpg",
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-yellow-100 to-orange-200">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/5549988401271?text=Quero%20a%20melhor%20coxinha%20do%20Brasil!"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-50 rounded-full bg-green-500 p-4 text-white shadow-lg transition duration-300 hover:bg-green-600"
      >
        <FaWhatsapp size={28} />
      </a>

      {/* Instagram Button */}
      <a
        href="https://www.instagram.com/macaxeira_oficial_?igsh=NjMwZHpvbnM5N3p0"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 right-4 z-50 rounded-full bg-pink-500 p-4 text-white shadow-lg transition duration-300 hover:bg-pink-600"
      >
        <FaInstagram size={28} />
      </a>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-between px-6 py-16 pb-20 md:flex-row md:px-20">
        <div className="text-center md:w-1/2 md:text-left">
          <motion.h1
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-extrabold text-orange-700 md:text-6xl"
          >
            A melhor <span className="text-orange-500">Coxinha</span> da sua
            vida é na <span className="text-orange-600">Coxiê</span>!
          </motion.h1>
          <p className="mt-6 text-lg text-orange-800">
            Crocante por fora, cremosa por dentro. Peça agora no WhatsApp e
            receba onde estiver.
          </p>
          <motion.a
            href="https://wa.me/5549988401271?text=Quero%20a%20melhor%20coxinha%20do%20Brasil!"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="mt-8 inline-block rounded-xl bg-orange-500 px-6 py-3 text-lg font-semibold text-white shadow-lg hover:bg-orange-600"
          >
            Pedir no WhatsApp
          </motion.a>
        </div>

        {/* Imagem da Coxinha */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-10 flex cursor-pointer justify-center md:mt-0 md:w-1/2"
          onClick={() => setShowGallery(true)}
        >
          <img
            src="https://i.pinimg.com/736x/0e/57/3a/0e573abf0eb237f0e0acdba8e78259b0.jpg"
            alt="Coxinha deliciosa"
            className="w-72 drop-shadow-2xl md:w-96"
          />
        </motion.div>
      </section>

      {/* Galeria Modal */}
      {showGallery && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/80 px-4 py-8"
          onClick={() => setShowGallery(false)}
        >
          <button
            className="sticky right-4 top-4 z-50 self-end text-2xl text-white hover:text-red-400"
            onClick={() => setShowGallery(false)}
          >
            <FaTimes />
          </button>
          <div
            className="mb-24 mt-4 grid w-full max-w-4xl grid-cols-1 gap-4 rounded-2xl bg-white/10 p-4 backdrop-blur-lg sm:grid-cols-2 md:grid-cols-3"
            onClick={(e) => e.stopPropagation()}
          >
            {galleryImages.map((src, index) => (
              <motion.img
                key={index}
                src={src}
                alt={`Coxinha ${index + 1}`}
                className="rounded-xl shadow-xl transition duration-300 hover:scale-105"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Rodapé fixo */}
      <footer className="fixed bottom-0 left-0 z-40 w-full bg-yellow-50 py-4 text-center text-sm text-orange-500 shadow-md">
        © 2025 Coxiê. Feito com amor e recheio ♥
      </footer>
    </div>
  );
}
