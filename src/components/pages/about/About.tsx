import './About.css'
import profileImg from '$assets/profile.jpg'
import TText from '$comps/TText';
import { motion } from "framer-motion";

import { PageVariants } from '../../../constants.ts';

function About(){

    return(          
        
        <motion.div variants={PageVariants} initial="initial" animate="enter" >
            <div className="aboutGroup">
                    <div className="aboutGroupPhotoTextGroup">
                        <img src={profileImg} alt="Alejandro Hervella" className="aboutGroupPhoto" />
                        <p className="aboutGroupText"><TText locKey="ABOUT_BODY"/></p>
                    </div>
            </div>
        </motion.div>
    
    )
}

export default About;