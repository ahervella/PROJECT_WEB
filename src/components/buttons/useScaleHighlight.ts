export type ScaleButtonRefProp = {
    scaleButtonRef: React.RefObject<HTMLSpanElement | null>;
}

export function useScaleHighlight( {scaleButtonRef} : ScaleButtonRefProp ){
    
    function onMouseEnter( event: React.MouseEvent<HTMLAnchorElement> ){
        if( scaleButtonRef?.current == null ){return;}
        
        scaleButtonRef.current.classList.toggle( 'scaleHighlight', true );
    }

    function onMouseExit( event: React.MouseEvent<HTMLAnchorElement> ){
        if( scaleButtonRef?.current == null ){return;}

        scaleButtonRef.current.classList.toggle( 'scaleHighlight', false );
    }

    return {onMouseEnter, onMouseExit}
}