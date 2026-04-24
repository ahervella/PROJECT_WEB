import "./InfoPage.css"
import { getText } from "$comps/TText"

export type InfoPageImgProps = {
    imgPath: string;
    titleLocKey: string;
    width?: number | string;
    height?: number | string;
}

export function InfoPageImg( {imgPath, titleLocKey, width, height}: InfoPageImgProps ){
    const titleName = getText( titleLocKey);

    let finalWidth = width || "min-content";
    if( width == undefined && height == undefined ){
        finalWidth = "300px";
    }

    const finalHeight = height || "min-content";

    return(
        <img className="infoPageImg" src={imgPath} alt={titleName} style={{ height: finalHeight, width: finalWidth }} />
    )
}