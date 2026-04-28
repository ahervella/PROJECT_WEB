export type HighlightRefProp = {
    highlightRef: React.RefObject<HTMLDivElement | null>;
}

export type ButtonTextRefProp = {
    buttonTextRef: React.RefObject<HTMLSpanElement | null>;
}

export interface IHighlightable extends HighlightRefProp, ButtonTextRefProp {}

export function useHighlight( {highlightRef, buttonTextRef} : IHighlightable ){

    function onMouseEnter(){
        if( highlightRef?.current == null || buttonTextRef?.current == null ){return;}
        if( highlightRef.current.parentElement == null ){return;}

        console.log( "hello world")

        const buttonTextRect = buttonTextRef.current.getBoundingClientRect();
        const highlightParentRef = highlightRef.current.parentElement.getBoundingClientRect();
        highlightRef.current.style.width = `${buttonTextRect.width}px`;

        const currHeight = highlightRef.current.clientHeight;
        const reposition = currHeight > 0;

        highlightRef.current.classList.toggle('reposition', reposition);

        highlightRef.current.classList.toggle( 'showHeight', true );

        highlightRef.current.style.transform = `
            translate(
                ${-highlightParentRef.x + buttonTextRect.left}px,
                ${-highlightParentRef.y + buttonTextRect.bottom}px
            )
        `;
    }

    function onMouseLeave(){

        if( highlightRef?.current == null ){return;}

        highlightRef.current.classList.toggle( 'showHeight', false );
    }

    return { onMouseEnter, onMouseLeave };
}

