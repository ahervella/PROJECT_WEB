import "./InfoPage.css"
import { getText } from "$comps/TText"
import { useContext, useEffect, useRef } from "react";
import { ImgBrowserContext } from "~/src/components/pages/imgBrowser/ImgBrowserContext";

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

    const imgBrowserContext = useContext(ImgBrowserContext);
    const browserIndexRef = useRef<number|null>(null);

    useEffect(() => {
      browserIndexRef.current = imgBrowserContext?.registerImg(imgPath);
    }, []);

    function onClick(){
        if( imgBrowserContext == null
            || browserIndexRef?.current == null
        ){return;}

        imgBrowserContext.openBrowser(browserIndexRef.current);
    }

    return(
        <img onClick={onClick} className="infoPageImg" src={imgPath} alt={titleName} style={{ height: finalHeight, width: finalWidth }} />
    )
}