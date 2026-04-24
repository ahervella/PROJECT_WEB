import './GamesEntryButton.css'
//TODO: get this stuff from the root so renaming and moving things is easier
import {ButtonBase, type ButtonBaseProps} from '$comps/buttons/ButtonBase.tsx'
import { HighlightBar, createHighlightRef, createButtonTextRef } from '$comps/buttons/HighlightBar';
import { useHighlight } from '$comps/buttons/useHighlight';
import {TText} from '$comps/TText.tsx'
import "$src/TextSizing.css";
import { useNavigation, type INavigable } from '$comps/buttons/useNavigation';

type GamesEntryProps = {
    yearStart: number;
    yearEnd?: number;
    gameLocKey: string;
} & ButtonBaseProps & INavigable

function GamesEntry( {yearStart, yearEnd, gameLocKey, ...rest} : GamesEntryProps){
    
    const highlightRef = createHighlightRef();
    const buttonTextRef = createButtonTextRef();

    const highlight = useHighlight({highlightRef, buttonTextRef});
    const navigation = useNavigation({...rest});

    const yearEndStr = yearEnd? yearEnd : <TText locKey='PRESENT'/>;


    return(
        <ButtonBase {...rest} {...highlight} {...navigation} className = "gamesEntryGroup" >
                <div className="textNorm EntryGroupTitle">{yearStart} - {yearEndStr}</div>
                <div className="textNorm gamesEntryGroupBox">
                    <HighlightBar ref={highlightRef}/>
                    <TText ref={buttonTextRef} locKey={gameLocKey}/>
                </div>
        </ButtonBase>
    )
}

export default GamesEntry;