import "./ImgBrowser.css"
import { TText } from "$src/components/TText";

import { useContext, useEffect } from "react";
import { ImgBrowserContext } from "$comps/pages/imgBrowser/ImgBrowserContext";
import { motion } from "framer-motion";
import { PageVariants } from "$src/constants";
import { StandaloneButton } from "~/src/components/buttons/StandaloneButton";

export function ImgBrowser(){

    const imgBrowserContext = useContext(ImgBrowserContext);

    function onCloseButtonClick(){
        imgBrowserContext?.closeBrowser();
    }

    function onLeftButtonClick(){
        if( imgBrowserContext?.activeIndex == null ){return;}

        const length = imgBrowserContext.imgs.length;
        const newIndex = imgBrowserContext.activeIndex - 1;
        imgBrowserContext.openBrowser( newIndex % length );
    }
        
    function onRightButtonClick(){
        if( imgBrowserContext?.activeIndex == null ){return;}

        const length = imgBrowserContext.imgs.length;
        const newIndex = imgBrowserContext.activeIndex + 1;
        imgBrowserContext.openBrowser( newIndex % length );
    }

    useEffect( () => {
        function onEsc( e: KeyboardEvent ){
            if( e.key === "Escape" ){imgBrowserContext?.closeBrowser()}
        }

        function onLeft( e: KeyboardEvent ){
            if( e.key === "ArrowLeft" ){onLeftButtonClick()}
        }

        function onRight( e: KeyboardEvent ){
            if( e.key === "ArrowRight" ){onRightButtonClick()}
        }

        window.addEventListener( "keydown", onEsc);
        window.addEventListener( "keydown", onLeft);
        window.addEventListener( "keydown", onRight);

        return () => {
            window.removeEventListener( "keydown", onEsc);
            window.removeEventListener( "keydown", onLeft);
            window.removeEventListener( "keydown", onRight);
        }
    })


    let currImgPath = "";
    let currImgLocKey = "";

    if( imgBrowserContext != null && imgBrowserContext?.activeIndex !== null ){
        const currImg = imgBrowserContext.imgs[imgBrowserContext.activeIndex];
        currImgPath = currImg.imgPath;
        currImgLocKey = currImg.imgLocKey;
    }

    return(
        <>
            { imgBrowserContext != null && imgBrowserContext?.activeIndex !== null &&
                <motion.div className="imgBrowser" variants={PageVariants} initial="initial" animate="enter" >
                    <StandaloneButton className="imgBrowserButton closeButton" locKey="X" onClick={onCloseButtonClick}/>

                    <div className="marginedContent">
                        <StandaloneButton className="imgBrowserButton" locKey={"<<"} onClick={onLeftButtonClick}/>

                        <div className="imgTextGroup">
                            <img className="img" src={currImgPath} alt="" />
                            <TText className="textNorm" locKey={currImgLocKey}/>
                        </div>

                        <StandaloneButton className="imgBrowserButton" locKey=">>" onClick={onRightButtonClick}/>
                    </div>
                </motion.div>
            }
        </>
        
    )   
}