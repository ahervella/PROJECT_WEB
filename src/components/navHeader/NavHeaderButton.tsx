import {ButtonBase, type ButtonBaseProps} from '$comps/buttons/ButtonBase.tsx'

import { createButtonTextRef } from '$comps/buttons/HighlightBar';
import { type HighlightRefProp, useHighlight } from '$comps/buttons/useHighlight';
import { useNavigation, type INavigable } from '$comps/buttons/useNavigation';

import './NavHeaderButton.css';
import TText from '$comps/TText.tsx';
import '$src/TextSizing.css';

type NavHeaderButtonProps = {
    titleLocKey: string;
} & ButtonBaseProps & HighlightRefProp & INavigable

export function NavHeaderButton( { highlightRef, titleLocKey, urlPath, ...rest}: NavHeaderButtonProps ) {

    const buttonTextRef = createButtonTextRef();

    const highlight = useHighlight({highlightRef, buttonTextRef});
    const navigation = useNavigation({urlPath, ...rest});

    return(
        <ButtonBase
            {...rest} {...highlight} {...navigation}
            className = {`navBarButton ${ navigation.isActive ? "active" : ""}`}
            >
                <TText ref={buttonTextRef} locKey={titleLocKey} className = {`textHeader navBarButtonText ${ navigation.isActive ? "active" : ""}`}/>
        </ButtonBase>
    )
}
