import {useRef} from "react";
import './NavHeader.css';
import HeaderButton from './NavHeaderButton.tsx'
import {ROUTES} from '../../routes.ts'

function NavHeader() {
    const highlightRef = useRef<HTMLDivElement | null>(null)

    return (
        <header>
            <div className="topTitle">
                <h1>Alejandro Hervella</h1>
            </div>
            <div className="navBar">
                <hr className="line leftNavBar" />


                <nav className="navBarButtonGroup">
                    {/*Todo: bring this navBarHighlight out of this block so that nav exclusively has meta data to buttons and not the highlight too*/} 
                    <div ref={highlightRef} className="navBarHighlight"></div>

                    <HeaderButton highlightRef={highlightRef} buttonTitle="about" urlPath={ROUTES.ABOUT} isExternalLink={false} />
                    <HeaderButton highlightRef={highlightRef} buttonTitle="linkedIn" urlPath={ROUTES.LINKEDIN} isExternalLink={true} />
                    <HeaderButton highlightRef={highlightRef} buttonTitle="gitHub" urlPath={ROUTES.GITHUB} isExternalLink={true} />
                    <HeaderButton highlightRef={highlightRef} buttonTitle="videogames" urlPath={ROUTES.GAMES} isExternalLink={false} />
                    <HeaderButton highlightRef={highlightRef} buttonTitle="art" urlPath={ROUTES.GAMES} isExternalLink={false} />
                    <HeaderButton highlightRef={highlightRef} buttonTitle="music" urlPath={ROUTES.MUSIC} isExternalLink={false} />
                </nav>
                    
                <hr className="line rightNavBar" />
            </div>
            
        </header>
  )
}

export default NavHeader
