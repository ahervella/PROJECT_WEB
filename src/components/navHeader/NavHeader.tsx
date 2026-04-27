import './NavHeader.css';
import {NavHeaderButton} from './NavHeaderButton.tsx'
import HeaderLangButton from './NavHeaderLangButton.tsx'
import { HighlightBar, useCreateHighlightRef } from "$comps/buttons/HighlightBar.tsx";
import {ROUTES} from '$src/routes.ts'
import '$src/TextSizing.css';

function NavHeader() {

    const highlightRef = useCreateHighlightRef();

    const langHighlightRef = useCreateHighlightRef();

    return (
        <header>
            <div className="topTitle">
                <title>Alejandro Hervella | Portfolio</title>
                <h1 className={'textSiteTitle'}>Alejandro Hervella</h1>
                
                <span>
                    <HighlightBar ref={langHighlightRef}/>

                    <nav>
                        <HeaderLangButton langCode="en" buttonText='eng' highlightRef={langHighlightRef}/>
                        {"  |  "}
                        <HeaderLangButton langCode="es" buttonText='esp' highlightRef={langHighlightRef}/>
                    </nav>
                </span>
            </div>
            <div className="navBar">
                <hr className="line leftNavBar" />


                <nav className="navBarButtonGroup">
                    {/*Todo: bring this navBarHighlight out of this block so that nav exclusively has meta data to buttons and not the highlight too*/} 
                    <HighlightBar ref={highlightRef} />

                    <NavHeaderButton highlightRef={highlightRef} titleLocKey="ABOUT" urlPath={ROUTES.ABOUT} isExternalLink={false} matchURLExactly={true}/>

                    <NavHeaderButton highlightRef={highlightRef} titleLocKey="LINKEDIN" urlPath={ROUTES.LINKEDIN} isExternalLink={true} />

                    <NavHeaderButton highlightRef={highlightRef} titleLocKey="GITHUB" urlPath={ROUTES.GITHUB} isExternalLink={true} />

                    <NavHeaderButton highlightRef={highlightRef} titleLocKey="GAMES" urlPath={ROUTES.GAMES} isExternalLink={false} />

                    <NavHeaderButton highlightRef={highlightRef} titleLocKey="ART" urlPath={ROUTES.ART} isExternalLink={false} />

                    <NavHeaderButton highlightRef={highlightRef} titleLocKey="MUSIC" urlPath={ROUTES.MUSIC} isExternalLink={false} />
                </nav>
                    
                <hr className="line rightNavBar" />
            </div>
            
        </header>
  )
}

export default NavHeader
