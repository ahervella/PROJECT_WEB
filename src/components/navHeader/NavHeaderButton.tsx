import {ButtonBase, type ButtonBaseProps} from '$comps/buttons/ButtonBase.tsx'

import { useCreateButtonTextRef } from '$comps/buttons/HighlightBar';
import { type HighlightRefProp, useHighlight } from '$comps/buttons/useHighlight';
import { useNavigationSelectActive, type INavigableSelectActive } from '$comps/buttons/useNavigation';

import './NavHeaderButton.css';
import {TText} from '$comps/TText.tsx';
import '$src/TextSizing.css';

export type NavHeaderButtonProps = {
    titleLocKey: string;
    className?: string;
} & ButtonBaseProps & HighlightRefProp & INavigableSelectActive

export function NavHeaderButton( { highlightRef, titleLocKey, urlPath, isExternalLink, matchURLExactly, className, ...rest}: NavHeaderButtonProps ) {

    const buttonTextRef = useCreateButtonTextRef();

    const highlight = useHighlight({highlightRef, buttonTextRef});
    const { isActive, ...navigationProps } = useNavigationSelectActive({urlPath, isExternalLink, matchURLExactly});

    const finalClassName = `navBarButton
        ${className || ""}
        ${isActive ? "active" : ""}`;

    return(
        <ButtonBase
            {...rest} {...highlight} {...navigationProps}
            className = {finalClassName}
            >
                <TText ref={buttonTextRef} locKey={titleLocKey} className = {`textHeader navBarButtonText ${ isActive ? "active" : ""}`}/>
        </ButtonBase>
    )
}
