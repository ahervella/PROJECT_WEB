import { type Variants } from "framer-motion";

export const PageVariants: Variants = {
        initial: {
            opacity: 0,
            x: 50,
            transition: {
            duration: 0.3,
            ease: [0, 0, 0, 1],//dramatic ease out
            }
        },
        enter: {
            opacity: 1,
            x: 0,
            transition: {
            duration: 0.5,
            delay: 0.1,
            ease: [0, 0, 0, 1],//dramatic ease out
            }
        }
    };