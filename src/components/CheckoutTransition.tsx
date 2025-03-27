import { motion, AnimatePresence } from "framer-motion";

interface CheckoutTransitionProps {
  onAnimationEnd: () => void;
}

export default function CheckoutTransition({
  onAnimationEnd,
}: CheckoutTransitionProps) {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative w-full h-full flex items-center justify-center">
        <AnimatePresence>
          <motion.div
            className="absolute bg-primary rounded-full"
            initial={{
              scale: 0,
              borderRadius: "100%",
              width: "50px",
              height: "50px",
            }}
            animate={{ scale: 30, borderRadius: "50%" }}
            exit={{ scale: 0, borderRadius: "0%" }}
            transition={{ duration: 2 }}
            onAnimationComplete={() => {
              onAnimationEnd();
            }}
          />
        </AnimatePresence>

        {/* Texto "Compra Finalizada" */}
        <AnimatePresence>
          <motion.span
            className="absolute text-2xl font-bold text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Compra finalizada
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}
