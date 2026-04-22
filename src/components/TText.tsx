import { useTranslation } from "react-i18next"; 
import './TText.css'

type TTextProps = {
    locKey: string;
    className?: string;
    ref?: React.RefObject<HTMLSpanElement | null>;
}

export function getText( locKey: string ){
    const {t} = useTranslation();
    return t(locKey);
}

export function TText( {locKey, className, ref} : TTextProps ){
    return(
        <span ref={ref} className={`translationText ${className || ""} `}>{getText(locKey)}</span>
    )
}

export default TText;