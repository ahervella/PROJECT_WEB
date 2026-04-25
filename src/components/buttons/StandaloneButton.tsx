import './StandaloneButton.css'
import { ButtonBase, type ButtonBaseProps } from '$comps/buttons/ButtonBase'
import { HighlightBar, useCreateHighlightRef, useCreateButtonTextRef } from '$comps/buttons/HighlightBar'
import { useHighlight } from '$comps/buttons/useHighlight'
import { TText } from '$comps/TText'
import '$src/TextSizing.css'

export type StandaloneButtonProps = {
    locKey: string;
    textClassName?: string;
} & ButtonBaseProps

export function StandaloneButton( { locKey, className, textClassName, ...rest }: StandaloneButtonProps ){

    const highlightRef = useCreateHighlightRef();
    const buttonTextRef = useCreateButtonTextRef();

    const highlight = useHighlight({ highlightRef, buttonTextRef });

    const finalButtonClassName = `standaloneButton ${className || ""} `;
    const finalTextClassName = `${textClassName || "textSmall"} `

    return(
        <ButtonBase {...rest} {...highlight} className={finalButtonClassName}>
            <HighlightBar ref={highlightRef}/>
            <TText className={finalTextClassName} ref={buttonTextRef} locKey={locKey} />
        </ButtonBase>
    )
}
