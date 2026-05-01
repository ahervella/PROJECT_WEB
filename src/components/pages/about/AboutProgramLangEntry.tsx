import { TText, useLocText } from "$src/components/TText";
import "$src/TextSizing.css"
import "./AboutProgramLangEntry.css"

export type AboutProgramLangEntryProps = {
    imgPath: string;
    locKey: string;
}

export function AboutProgramLangEntry({locKey, imgPath} : AboutProgramLangEntryProps){

    return(
        <div className="programLangEntry">
            <img className="programLangEntryIcon" src={imgPath} alt={useLocText(locKey)}/>
            <TText locKey={locKey} className="textNorm IBM"/>
        </div>
    )
}