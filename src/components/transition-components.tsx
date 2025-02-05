import { JSX } from "react";

import { motion } from "framer-motion";

interface Props {
    children: JSX.Element;
}

export default function Transition({children}: Props) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 1,
                delay: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
            }}
        >
            {children}
        </motion.div>
    )
}

