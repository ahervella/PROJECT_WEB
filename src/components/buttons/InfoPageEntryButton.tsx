import './InfoPageEntryButton.css'
//TODO: get this stuff from the root so renaming and moving things is easier
import {ButtonBase, type ButtonBaseProps} from '$comps/buttons/ButtonBase.tsx'
import { HighlightBar, useCreateHighlightRef, useCreateButtonTextRef } from '$comps/buttons/HighlightBar';
import { useHighlight } from '$comps/buttons/useHighlight';
import {TText, getText} from '$comps/TText.tsx'
import "$src/TextSizing.css";
import { useNavigation, type INavigable } from '$comps/buttons/useNavigation';
import type { CSSProperties } from 'react';

type InfoPageEntryButtonProps = {
    yearStart?: number;
    yearEnd?: number;
    imgPath?: string;
    imgOffsetX?: string;
    imgOffsetY?: string;
    locKey: string;
} & ButtonBaseProps & INavigable

function InfoPageEntryButton( {yearStart, yearEnd, imgPath, locKey, imgOffsetX, imgOffsetY, ...rest} : InfoPageEntryButtonProps){
    
    const highlightRef = useCreateHighlightRef();
    const buttonTextRef = useCreateButtonTextRef();

    const highlight = useHighlight({highlightRef, buttonTextRef});
    const navigation = useNavigation({...rest});

    const yearEndStr = yearEnd? yearEnd : <TText locKey='PRESENT'/>;

    const imgStyle : CSSProperties = { objectPosition: `${imgOffsetX || "50%"} ${imgOffsetY || "50%"}`};

    return(
        <ButtonBase {...rest} {...highlight} {...navigation} className = "entryGroup" >
            {
                imgPath &&
                <>
                    <img className="imgBox" src={imgPath} alt={getText(locKey)} style={imgStyle}/>
                    <HighlightBar ref={highlightRef}/>
                    {
                        yearStart &&
                        <div className="textSmall yearText">{yearStart} - {yearEndStr}</div>
                    }
                    <TText className="textNorm" ref={buttonTextRef} locKey={locKey}/>
                </>
            }
            {   
                imgPath == undefined &&
                <div className="textNorm entryGroupBox">
                    <HighlightBar ref={highlightRef}/>
                    {
                        yearStart &&
                        <div className="textSmall yearText">{yearStart} - {yearEndStr}</div>
                    }
                    <TText ref={buttonTextRef} locKey={locKey}/>
                </div>
            }

        </ButtonBase>
    )
}

export default InfoPageEntryButton;