
export const PageVariants = {
        initial: { opacity: 0, x: 50 },
        enter: {
            opacity: 1,
            x: 0,
            transition: {
            duration: 0.5,
            delay: .1,
            ease: [0, 0, 0, 1],//dramatic ease out
            }
        }
    };