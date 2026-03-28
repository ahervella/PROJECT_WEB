import ButtonBase, { type ButtonBaseProps } from './../ButtonBase';
import { useTranslation } from 'react-i18next';
import './NavHeaderLangButton.css';

type NavHeaderLangButtonProps = {
    langCode: string
} & ButtonBaseProps


function NavHeaderLangButton({langCode, ...rest} : NavHeaderLangButtonProps){

    const { i18n } = useTranslation();
    
    return(
        <ButtonBase {...rest} className = "navHeaderLangButton" onClick={ () => i18n.changeLanguage(langCode)}/>
    )
}

export default NavHeaderLangButton