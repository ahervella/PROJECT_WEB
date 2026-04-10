import './NavHeaderButton.css';
import type { NavButtonProps } from '$comps/NavButton.tsx';
import NavButton from '$comps/NavButton.tsx';
import TText from '$comps/TText.tsx';
import {useEffect} from "react"
import {ROUTES} from '$src/routes.ts'

import { useLocation } from "react-router-dom";

type NavHeaderButtonProps = {
    highlightRef: React.RefObject<HTMLDivElement | null>;
    titleLocKey: string;
} & NavButtonProps

function NavHeaderButton( { highlightRef, titleLocKey, urlPath, ...rest}: NavHeaderButtonProps ) {

    function highlightButton(event : React.MouseEvent<HTMLAnchorElement> ){
        if( highlightRef.current == null ){return;}

        const btn = event.currentTarget;
        const buttonRect = btn.getBoundingClientRect();

        const buttonText = btn.querySelector(".navBarButtonText");
        if( buttonText == null ){return;}
        const buttonTextRect = buttonText.getBoundingClientRect();

        highlightRef.current.style.width = `${buttonRect.width}px`;

        //highlightRef.current.style.height = `${(buttonRect.height - buttonTextRect.height)/2 + buttonTextRect.height}px`;
        
        const h = buttonRect.height - ((buttonRect.height - buttonTextRect.height)/2 + buttonTextRect.height)
        highlightRef.current.style.height = `${h}px`;

        highlightRef.current.style.transform = `
            translate(
                ${btn.offsetLeft}px,
                ${btn.offsetHeight - h}px
            )
        `;
    }

    function clearHighlight(event: React.MouseEvent<HTMLAnchorElement>){
        if( highlightRef.current == null ){return;}

        highlightRef.current.style.height = "0";
    }


    const currLocation = useLocation();
    useEffect( ()=> {console.log (currLocation)}, [currLocation]);

    const isActive = urlPath == ROUTES.ABOUT ?
    currLocation.pathname == urlPath :
    currLocation.pathname.startsWith(urlPath);

    return(
        <NavButton
            {...rest}
            onMouseEnter = {highlightButton}
            onMouseLeave = {clearHighlight}
            urlPath={urlPath}
            className = {`navBarButton ${ isActive ? "active" : ""}`}
            >
                <h2 className = {`navBarButtonText ${ isActive ? "active" : ""}`}>
                    <TText locKey={titleLocKey} />
                </h2>
        </NavButton>
    )
}

export default NavHeaderButton
