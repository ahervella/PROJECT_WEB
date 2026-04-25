import "./InfoPage.css"
import "$src/TextSizing.css"
import {TText, type TTextProps} from "$comps/TText";

export type InfoPageTextProps = TTextProps;

export function InfoPageText( {...rest} : InfoPageTextProps){
    return(
        <TText {...rest}className="textNorm IBM infoPageText" />
    )
}