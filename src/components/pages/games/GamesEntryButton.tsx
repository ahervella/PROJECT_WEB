import './GamesEntryButton.css'
//TODO: get this stuff from the root so renaming and moving things is easier
import type {NavButtonProps} from '../../NavButton.tsx'
import NavButton from '../../NavButton.tsx'
import TText from '../../TText.tsx'

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