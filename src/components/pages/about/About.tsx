import { PageBase } from '$comps/pages/PageBase.tsx';

import './About.css'
import profileImg from '$assets/profile.jpg'
import "$src/TextSizing.css";

import {InfoPageSection} from "$comps/pages/InfoPageSection";
import {InfoPageImg} from "$comps/pages/InfoPageImg.tsx"
import {InfoPageText} from "$comps/pages/InfoPageText.tsx"

function About(){

    return(          
        <PageBase>

            <InfoPageSection>
                <InfoPageImg imgPath={profileImg} imgLocKey="Alejandro Hervella" />
                <InfoPageText locKey="ABOUT_BODY" />
            </InfoPageSection>
            
        </PageBase>
    
    )
}

export default About;