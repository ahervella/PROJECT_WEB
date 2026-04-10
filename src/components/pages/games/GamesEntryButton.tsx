import './GamesEntryButton.css'
//TODO: get this stuff from the root so renaming and moving things is easier
import type {NavButtonProps} from '$comps/NavButton.tsx'
import NavButton from '$comps/NavButton.tsx'
import TText from '$comps/TText.tsx'

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
                <div className="EntryGroupTitle">{yearStart} - {yearEndStr}</div>
                <div className="gamesEntryGroupBox"><TText locKey={gameLocKey}/></div>
        </NavButton>
    )
}

export default GamesEntry;