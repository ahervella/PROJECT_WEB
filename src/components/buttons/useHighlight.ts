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
        if( highlightRef.current.offsetParent == null ){return;}

        console.log( "hello world")

        const buttonTextRect = buttonTextRef.current.getBoundingClientRect();

        const highlightParentRef = highlightRef.current.offsetParent.getBoundingClientRect();
        const parentOffsettingX = - highlightParentRef.x;
        const parentOffsettingY = - highlightParentRef.y;

        highlightRef.current.style.width = `${buttonTextRect.width}px`;

        const currHeight = highlightRef.current.clientHeight;
        const reposition = currHeight > 0;

        highlightRef.current.classList.toggle('reposition', reposition);

        highlightRef.current.classList.toggle( 'showHeight', true );


        highlightRef.current.style.transform = `
            translate(
                ${buttonTextRect.left + parentOffsettingX}px,
                ${buttonTextRect.bottom + parentOffsettingY}px
            )
        `;
    }

    function onMouseLeave(){

        if( highlightRef?.current == null ){return;}

        highlightRef.current.classList.toggle( 'showHeight', false );
    }

    return { onMouseEnter, onMouseLeave };
}

