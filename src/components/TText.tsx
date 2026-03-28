import { useTranslation } from "react-i18next"; 
import './TText.css'

type TTextProps = {
    locKey: string;
}

function TText( {locKey} : TTextProps ){

    const {t} = useTranslation();

    return(
        <span className="translationText">{t(locKey)}</span>
    )
}

export default TText;