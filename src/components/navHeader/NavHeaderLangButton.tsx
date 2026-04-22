import ButtonBase, { type ButtonBaseProps } from '$comps/ButtonBase';
import { useTranslation } from 'react-i18next';
import './NavHeaderLangButton.css';
import '$src/TextSizing.css'
import { useHighlight, type HighlightRefProp } from '$comps/buttons/useHighlight';
import { createButtonTextRef } from '$comps/buttons/HighlightBar';

type NavHeaderLangButtonProps = {
    langCode: string;
    buttonText: string;
} & ButtonBaseProps & HighlightRefProp


function NavHeaderLangButton({langCode, buttonText, ...rest} : NavHeaderLangButtonProps){

    const buttonTextRef = createButtonTextRef();

    const highlight = useHighlight({...rest, buttonTextRef});

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