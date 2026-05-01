import "./InfoPage.css"
import { useLocText } from "$comps/TText"
import { useContext, useEffect, useRef } from "react";
import { ImgBrowserContext } from "~/src/components/pages/imgBrowser/ImgBrowserContext";

export type InfoPageImgProps = {
    imgPath: string;
    imgLocKey: string;
    className?: string
    width?: number | string;
    height?: number | string;
}

export function InfoPageImg( {imgPath, imgLocKey, className, width, height}: InfoPageImgProps ){
    const titleName = useLocText( imgLocKey);

    let finalWidth = width || "min-content";
    if( width == undefined && height == undefined ){
        finalWidth = "300px";
    }

    const finalHeight = height || "min-content";

    const imgBrowserContext = useContext(ImgBrowserContext);
    const browserIndexRef = useRef<number|undefined>(undefined);

    useEffect(() => {
        if( browserIndexRef != undefined){
            browserIndexRef.current = imgBrowserContext?.registerImg({imgPath, imgLocKey});
        }
    }, []);

    function onClick(){
        if( imgBrowserContext == null
            || browserIndexRef?.current == null
        ){return;}

        imgBrowserContext.openBrowser(browserIndexRef.current);
    }

    return(
        <img onClick={onClick}
        className={`infoPageImg ${className || "" }`}
        src={imgPath} alt={titleName}
        style={{ height: finalHeight, width: finalWidth }} />
    )
}