import { useTranslation } from "react-i18next"; 
import './TText.css'

export type TTextProps = {
    locKey: string;
    className?: string;
    ref?: React.RefObject<HTMLSpanElement | null>;
}

export function useLocText( locKey: string ){
    const {t} = useTranslation();
    return t(locKey, {interpolation: {escapeValue: false}});//return t(locKey);
}

export function TText( {locKey, className, ...rest} : TTextProps ){
    return(
        <span {...rest} className={`translationText ${className || ""} `} dangerouslySetInnerHTML={ {__html: useLocText(locKey)}}/>
    )
}