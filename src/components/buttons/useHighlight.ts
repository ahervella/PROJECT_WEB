export type HighlightRefProp = {
    highlightRef: React.RefObject<HTMLDivElement | null>;
}

export type ButtonTextRefProp = {
    buttonTextRef: React.RefObject<HTMLSpanElement | null>;
}

export interface IHighlightable extends HighlightRefProp, ButtonTextRefProp {}

export function useHighlight( {highlightRef, buttonTextRef} : IHighlightable ){

    function onMouseEnter( event: React.MouseEvent<HTMLAnchorElement> ){
        if( highlightRef?.current == null || buttonTextRef?.current == null ){return;}

        console.log( "hello world")

        const buttonTextRect = buttonTextRef.current.getBoundingClientRect();

        highlightRef.current.style.width = `${buttonTextRect.width}px`;

        const currHeight = highlightRef.current.clientHeight;
        const reposition = currHeight > 0;

        highlightRef.current.classList.toggle('reposition', reposition);

        highlightRef.current.classList.toggle( 'showHeight', true );


        console.log( "current height:" + highlightRef.current.style.height);

        highlightRef.current.style.transform = `
            translate(
                ${buttonTextRect.left}px,
                ${buttonTextRect.bottom}px
            )
        `;
    }

    function onMouseLeave( event: React.MouseEvent<HTMLAnchorElement> ){

        if( highlightRef?.current == null ){return;}

        highlightRef.current.classList.toggle( 'showHeight', false );
    }

    return { onMouseEnter, onMouseLeave };
}

