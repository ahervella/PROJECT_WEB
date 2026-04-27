import './NavHeader.css';
import {NavHeaderButton} from './NavHeaderButton.tsx'
import { HighlightBar, useCreateHighlightRef } from "$comps/buttons/HighlightBar.tsx";
import {ROUTES} from '$src/routes.ts'
import '$src/TextSizing.css';
import { useIsActiveURL } from '$comps/buttons/useNavigation';
import { motion } from 'framer-motion';
import { PageVariants } from '$src/constants.ts';

export function ArtNavHeader() {

    const highlightRef = useCreateHighlightRef();
    const isActive = useIsActiveURL(ROUTES.ART, false);

    return (
        <>{ isActive &&
            <motion.div variants={PageVariants} initial="initial" animate="enter">
                <div className="navBar">
                    <HighlightBar ref={highlightRef} />
                    <hr className="line rightNavBar" />

                    <nav className="navBarButtonGroup">

                        <NavHeaderButton highlightRef={highlightRef} titleLocKey="ART_ABOUT" urlPath={ROUTES.ART} isExternalLink={false} matchURLExactly={true}/>

                        <NavHeaderButton highlightRef={highlightRef} titleLocKey="ART_DRAWINGS" urlPath={ROUTES.ART + ROUTES.ART_DRAWINGS} isExternalLink={false} />

                        <NavHeaderButton highlightRef={highlightRef} titleLocKey="ART_ANIMATION" urlPath={ROUTES.ART + ROUTES.ART_ANIMATION} isExternalLink={false} />

                        <NavHeaderButton highlightRef={highlightRef} titleLocKey="ART_DIGITAL" urlPath={ROUTES.ART + ROUTES.ART_DIGITAL} isExternalLink={false} />

                    </nav>
                        
                    <hr className="line rightNavBar" />
                </div>
            </motion.div>
        }</>
    )
}
