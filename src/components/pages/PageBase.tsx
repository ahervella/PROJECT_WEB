import "$src/TextSizing.css";
import { motion } from "framer-motion";

import { PageVariants } from '$src/constants.ts';
import { ImgBrowserProvider } from "$comps/pages/imgBrowser/ImgBrowserProvider";
import { ImgBrowser } from "$comps/pages/imgBrowser/ImgBrowser";

export type PageBaseProps = {
    children?: React.ReactNode;
}

export function PageBase( {children} : PageBaseProps ){

    return(          
        <motion.div variants={PageVariants} initial="initial" animate="enter" >
            <ImgBrowserProvider>

                <ImgBrowser/>
                {children}
            </ImgBrowserProvider>
        </motion.div>
    
    )
}