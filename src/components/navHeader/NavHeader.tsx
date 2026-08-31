import './NavHeader.css';
import {NavHeaderButton} from './NavHeaderButton.tsx'
import HeaderLangButton from './NavHeaderLangButton.tsx'
import { HighlightBar, useCreateHighlightRef } from "$comps/buttons/HighlightBar.tsx";
import { TText } from "$comps/TText.tsx";
import {ROUTES} from '$src/routes.ts'
import '$src/TextSizing.css';
import globe from "$assets/globe.svg"

function NavHeader() {

    const highlightRef = useCreateHighlightRef();

    const langHighlightRef = useCreateHighlightRef();

    return (
        <header>
            <div className="topTitle">
                <title>Alejandro Hervella</title>
                <h1 className={'textSiteTitle'}>
                    <a href={ROUTES.ABOUT} className='titleLink'><TText locKey="SITE_TITLE" /></a>
                </h1>
                
                <span className='langNavBar'>
                    {/* Class on nav bar needed to avoid edge case of having containing block be viewport and css and javascript disagree on parent positioning since javascript devault gives an empty /body parent that defaults to browser margins of 8, 8*/}
                        <HighlightBar ref={langHighlightRef}/>
                        <img src={globe} width={25} height={25} />
                        <nav >
                            <HeaderLangButton langCode="en" buttonText='eng' highlightRef={langHighlightRef}/>
                            {"  |  "}
                            <HeaderLangButton langCode="es" buttonText='esp' highlightRef={langHighlightRef}/>
                        </nav>
                </span>
            </div>
            <div className="navBar">
                <hr className="line leftNavBar" />

                <HighlightBar ref={highlightRef} />

                <nav className="navBarButtonGroup">

                    <NavHeaderButton highlightRef={highlightRef} titleLocKey="ABOUT" urlPath={ROUTES.ABOUT} isExternalLink={false} matchURLExactly={true}/>

                    <NavHeaderButton highlightRef={highlightRef} titleLocKey="GAMES" urlPath={ROUTES.GAMES} isExternalLink={false} />

                    <NavHeaderButton highlightRef={highlightRef} titleLocKey="LINKEDIN" urlPath={ROUTES.LINKEDIN} isExternalLink={true} />

                    <NavHeaderButton highlightRef={highlightRef} titleLocKey="GITHUB" urlPath={ROUTES.GITHUB} isExternalLink={true} />

                    {/*
                    <NavHeaderButton highlightRef={highlightRef} titleLocKey="ART" urlPath={ROUTES.ART} isExternalLink={false} />

                    <NavHeaderButton highlightRef={highlightRef} titleLocKey="MUSIC" urlPath={ROUTES.MUSIC} isExternalLink={false} />
                    */}
                </nav>
                    
                <hr className="line rightNavBar" />
            </div>
            
        </header>
  )
}

export default NavHeader
