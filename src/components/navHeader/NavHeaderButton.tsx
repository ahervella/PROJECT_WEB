import './NavHeaderButton.css';
import type { NavButtonProps } from '../NavButtonBase.tsx';
import NavButton from '../NavButtonBase.tsx';

type NavHeaderButtonProps = {
    highlightRef: React.RefObject<HTMLDivElement | null>;
    buttonTitle: string;
} & NavButtonProps

function NavHeaderButton( { highlightRef, buttonTitle, ...rest}: NavHeaderButtonProps ) {

    function highlightButton(event : React.MouseEvent<HTMLAnchorElement> ){
        if( highlightRef.current == null ){return;}

        const btn = event.currentTarget;
        const buttonRect = btn.getBoundingClientRect();

        const buttonText = btn.querySelector(".navBarButtonText");
        if( buttonText == null ){return;}
        const buttonTextRect = buttonText.getBoundingClientRect();

        highlightRef.current.style.width = `${buttonRect.width}px`;

        highlightRef.current.style.height = `${(buttonRect.height - buttonTextRect.height)/2 + buttonTextRect.height}px`;
        
        highlightRef.current.style.transform = `
            translate(
                ${btn.offsetLeft}px,
                ${btn.offsetTop}px
            )
        `;
    }

    return(
        <NavButton
            {...rest}
            onMouseEnter = {highlightButton}
            className = "navBarButton"
            >
                <h2 className="navBarButtonText">{buttonTitle}</h2>
        </NavButton>
    )
}

export default NavHeaderButton
