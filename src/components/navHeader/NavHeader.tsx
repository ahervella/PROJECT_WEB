import {useRef} from "react";
import './NavHeader.css';
import HeaderButton from './NavHeaderButton.tsx'
import HeaderLangButton from './NavHeaderLangButton.tsx'
import {ROUTES} from '$src/routes.ts'

function NavHeader() {
    const highlightRef = useRef<HTMLDivElement | null>(null)

    return (
        <header>
            <div className="topTitle">
                <h1>Alejandro Hervella</h1>
                
                <span>
                    <h3>
                        <HeaderLangButton langCode="en">eng</HeaderLangButton>
                        {"  |  "}
                        <HeaderLangButton langCode="es">esp</HeaderLangButton>
                    </h3>
                </span>
            </div>
            <div className="navBar">
                <hr className="line leftNavBar" />


                <nav className="navBarButtonGroup">
                    {/*Todo: bring this navBarHighlight out of this block so that nav exclusively has meta data to buttons and not the highlight too*/} 
                    <div ref={highlightRef} className="navBarHighlight"></div>

                    <HeaderButton highlightRef={highlightRef} titleLocKey="ABOUT" urlPath={ROUTES.ABOUT} isExternalLink={false} />

                    <HeaderButton highlightRef={highlightRef} titleLocKey="LINKEDIN" urlPath={ROUTES.LINKEDIN} isExternalLink={true} />

                    <HeaderButton highlightRef={highlightRef} titleLocKey="GITHUB" urlPath={ROUTES.GITHUB} isExternalLink={true} />

                    <HeaderButton highlightRef={highlightRef} titleLocKey="GAMES" urlPath={ROUTES.GAMES} isExternalLink={false} />

                    <HeaderButton highlightRef={highlightRef} titleLocKey="ART" urlPath={ROUTES.ART} isExternalLink={false} />

                    <HeaderButton highlightRef={highlightRef} titleLocKey="MUSIC" urlPath={ROUTES.MUSIC} isExternalLink={false} />
                </nav>
                    
                <hr className="line rightNavBar" />
            </div>
            
        </header>
  )
}

export default NavHeader
