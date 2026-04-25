import "$src/TextSizing.css";
import { motion } from "framer-motion";

import { PageVariants } from '$src/constants.ts';
import { ImgBrowserProvider } from "$comps/pages/imgBrowser/ImgBrowserProvider";
import { ImgBrowser } from "$comps/pages/imgBrowser/ImgBrowser";
import { StandaloneButton } from "$comps/buttons/StandaloneButton";
import { useNavigation } from "$comps/buttons/useNavigation";

export type PageBaseProps = {
    prevPage?: string;
    children?: React.ReactNode;
}

export function PageBase( {children, prevPage} : PageBaseProps ){

    const navigation = useNavigation( { isExternalLink: false, urlPath: prevPage?? ""} );

    return(          
        <motion.div variants={PageVariants} initial="initial" animate="enter" >
            <ImgBrowserProvider>
            {   prevPage &&
                <span className="infoPageBackButtonDiv">
                    <StandaloneButton className="infoPageBackButton" {...navigation} locKey="BUTTON_BACK" />
                </span>
            }

                <ImgBrowser/>
                {children}
            </ImgBrowserProvider>
        </motion.div>
    
    )
}