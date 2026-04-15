import './GamesEntryButton.css'
//TODO: get this stuff from the root so renaming and moving things is easier
import type {NavButtonProps} from '$comps/NavButton.tsx'
import NavButton from '$comps/NavButton.tsx'
import TText from '$comps/TText.tsx'
import "$src/TextSizing.css";

type GamesEntryProps = {
    yearStart: number;
    yearEnd?: number;
    gameLocKey: string;
} & NavButtonProps

function GamesEntry( {yearStart, yearEnd, gameLocKey, ...rest} : GamesEntryProps){
    
    const yearEndStr = yearEnd? yearEnd : <TText locKey='PRESENT'/>;
    return(
        <NavButton
            {...rest}
            className = "gamesEntryGroup"
            >
                <div className="textNorm EntryGroupTitle">{yearStart} - {yearEndStr}</div>
                <div className="textNorm gamesEntryGroupBox"><TText locKey={gameLocKey}/></div>
        </NavButton>
    )
}

export default GamesEntry;