import "./InfoPage.css"
import "$src/TextSizing.css"
import {TText, type TTextProps} from "$comps/TText";

export type InfoPageTextProps = TTextProps;

export function InfoPageText( { className,  ...rest} : InfoPageTextProps){

    return(
        <TText {...rest} className={`infoPageText ${className || "textNorm IBM"}`} />
    )
}