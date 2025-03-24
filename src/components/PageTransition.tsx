"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

const PageTransition = ({ children }: { children: ReactNode }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }} // Começa ligeiramente deslocado para baixo e menor
        animate={{
          opacity: 1,
          y: 0, // Desloca para a posição original
          scale: 1, // Aumenta ao tamanho normal
          transition: { delay: 0.1, duration: 0.5, ease: "easeOut" },
        }}
        exit={{
          opacity: 0,
          y: -20, // Desloca para cima ao sair
          scale: 0.95,
          transition: { duration: 0.3, ease: "easeIn" },
        }}
        className="product-item" // Classe para estilização
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
