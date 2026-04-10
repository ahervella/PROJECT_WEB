import { useTranslation } from "react-i18next"; 
import './TText.css'

type TTextProps = {
    locKey: string;
    className?: string;
}

export function getText( locKey: string ){
    const {t} = useTranslation();
    return t(locKey);
}

function TText( {locKey, className} : TTextProps ){
    return(
        <span className={`translationText ${className || ""} `}>{getText(locKey)}</span>
    )
}

export default TText;