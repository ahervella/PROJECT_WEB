import { ButtonBase, type ButtonBaseProps } from '$comps/buttons/ButtonBase';
import { useTranslation } from 'react-i18next';
import './NavHeaderLangButton.css';
import '$src/TextSizing.css'
import { useHighlight, type HighlightRefProp } from '$comps/buttons/useHighlight';
import { useCreateButtonTextRef } from '$comps/buttons/HighlightBar';

type NavHeaderLangButtonProps = {
    langCode: string;
    buttonText: string;
} & ButtonBaseProps & HighlightRefProp


function NavHeaderLangButton({langCode, buttonText, highlightRef, ...rest} : NavHeaderLangButtonProps){

    const buttonTextRef = useCreateButtonTextRef();

    const highlight = useHighlight({highlightRef, buttonTextRef});

    const { i18n } = useTranslation();
    const isActive = i18n.language == langCode;
    
    return(
        <ButtonBase {...rest} {...highlight}
        className = "navHeaderLangButton" onClick={ () => i18n.changeLanguage(langCode)}>
            <div className = {`textSmall navHeaderLangButtonBackground ${ isActive ? "active" : ""}`}>
                <span ref={buttonTextRef}>{buttonText}</span>
            </div>
        </ButtonBase>
    )
}

export default NavHeaderLangButton