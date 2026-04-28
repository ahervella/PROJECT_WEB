export type ScaleButtonRefProp = {
    scaleButtonRef: React.RefObject<HTMLSpanElement | null>;
}

export function useScaleHighlight( {scaleButtonRef} : ScaleButtonRefProp ){
    
    function onMouseEnter(){
        if( scaleButtonRef?.current == null ){return;}
        
        scaleButtonRef.current.classList.toggle( 'scaleHighlight', true );
    }

    function onMouseExit(){
        if( scaleButtonRef?.current == null ){return;}

        scaleButtonRef.current.classList.toggle( 'scaleHighlight', false );
    }

    return {onMouseEnter, onMouseExit}
}