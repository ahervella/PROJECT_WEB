export interface IHighlightable {
    highlightRef: React.RefObject<HTMLDivElement | null>;
}

export function useHighlight( {highlightRef} : IHighlightable ){

    function onMouseEnter( event: React.MouseEvent<HTMLAnchorElement> ){
        if( highlightRef?.current == null ){return;}

        const btn = event.currentTarget;
        const buttonRect = btn.getBoundingClientRect();

        const buttonText = btn.querySelector(".groupTextButtonText");
        if (buttonText == null) { return; }
        const buttonTextRect = buttonText.getBoundingClientRect();

        highlightRef.current.style.width = `${buttonRect.width}px`;

        const h = buttonRect.height - ((buttonRect.height - buttonTextRect.height) / 2 + buttonTextRect.height);
        highlightRef.current.style.height = `${h}px`;

        highlightRef.current.style.transform = `
            translate(
                ${btn.offsetLeft}px,
                ${btn.offsetHeight - h}px
            )
        `;
    }

    function onMouseLeave( event: React.MouseEvent<HTMLAnchorElement> ){

        if( highlightRef?.current == null ){return;}

        highlightRef.current.style.height = "0";
    }

    return { onMouseEnter, onMouseLeave };
}