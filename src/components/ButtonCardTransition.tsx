"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

const ButtonCardTransition = ({ children }: { children: ReactNode }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.1, duration: 0.6, ease: "easeInOut" },
        }}
        exit={{
          opacity: 0,
          transition: { duration: 0.3, ease: "easeIn" },
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default ButtonCardTransition;
