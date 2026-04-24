import {ButtonBase, type ButtonBaseProps} from '$comps/buttons/ButtonBase.tsx'

import { createButtonTextRef } from '$comps/buttons/HighlightBar';
import { type HighlightRefProp, useHighlight } from '$comps/buttons/useHighlight';
import { useNavigation, type INavigable } from '$comps/buttons/useNavigation';

import './NavHeaderButton.css';
import {TText} from '$comps/TText.tsx';
import '$src/TextSizing.css';

export type NavHeaderButtonProps = {
    titleLocKey: string;
} & ButtonBaseProps & HighlightRefProp & INavigable

export function NavHeaderButton( { highlightRef, titleLocKey, urlPath, isExternalLink, ...rest}: NavHeaderButtonProps ) {

    const buttonTextRef = createButtonTextRef();

    const highlight = useHighlight({highlightRef, buttonTextRef});
    const { isActive, ...navigationProps } = useNavigation({urlPath, isExternalLink});

    return(
        <ButtonBase
            {...rest} {...highlight} {...navigationProps}
            className = {`navBarButton ${ isActive ? "active" : ""}`}
            >
                <TText ref={buttonTextRef} locKey={titleLocKey} className = {`textHeader navBarButtonText ${ isActive ? "active" : ""}`}/>
        </ButtonBase>
    )
}
