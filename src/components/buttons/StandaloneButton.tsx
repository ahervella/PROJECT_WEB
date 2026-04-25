import './StandaloneButton.css'
import { ButtonBase, type ButtonBaseProps } from '$comps/buttons/ButtonBase'
import { HighlightBar, useCreateHighlightRef, useCreateButtonTextRef } from '$comps/buttons/HighlightBar'
import { useHighlight } from '$comps/buttons/useHighlight'
import { TText } from '$comps/TText'
import '$src/TextSizing.css'

type StandaloneButtonProps = {
    locKey: string;
} & ButtonBaseProps

export function StandaloneButton( { locKey, className, ...rest }: StandaloneButtonProps ){

    const highlightRef = useCreateHighlightRef();
    const buttonTextRef = useCreateButtonTextRef();

    const highlight = useHighlight({ highlightRef, buttonTextRef });

    return(
        <ButtonBase {...rest} {...highlight} className={`standaloneButton ${className || ""} `}>
            <HighlightBar ref={highlightRef}/>
            <TText ref={buttonTextRef} locKey={locKey} className="textNorm"/>
        </ButtonBase>
    )
}
