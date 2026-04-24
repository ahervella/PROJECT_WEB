import "$src/TextSizing.css";
import { motion } from "framer-motion";

import { PageVariants } from '$src/constants.ts';

export type PageBaseProps = {
    children?: React.ReactNode;
}

export function PageBase( {children} : PageBaseProps ){

    return(          
        
        <motion.div variants={PageVariants} initial="initial" animate="enter" >
            {children}
        </motion.div>
    
    )
}