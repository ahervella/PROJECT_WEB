import { useMemo, useRef, useState, type RefObject } from "react";
import { ImgBrowserContext } from "./ImgBrowserContext";

export type ImgBrowserProviderProps = {
    children?: React.ReactNode;
} 

export function ImgBrowserProvider( {children} : ImgBrowserProviderProps ){
    const [imgs, setImg] = useState<string[]>([]);
    const [activeIndex, setIndex] = useState<number|null>(null);
    
    const imgCountRef = useRef(0);

    function registerImg( imgPath: string ) : number {
        const index = imgCountRef.current;
        imgCountRef.current += 1;
        setImg( prevImgs => [...prevImgs, imgPath]);
        
        return index;
    }

    function openBrowser( imgIndex: number ){
        setIndex( imgIndex );
    }

    function closeBrowser(){
        setIndex( null );
    }

    const value = useMemo(() => ({
        imgs,
        activeIndex,
        registerImg,
        openBrowser,
        closeBrowser
    }), [imgs, activeIndex]);

    return(
        <ImgBrowserContext.Provider value={value}>
            {children}
        </ImgBrowserContext.Provider>
    )
}