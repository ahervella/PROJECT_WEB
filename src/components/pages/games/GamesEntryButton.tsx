import './GamesEntryButton.css'
//TODO: get this stuff from the root so renaming and moving things is easier
import type {NavButtonProps} from '../../NavButtonBase.tsx'
import NavButtonBase from '../../NavButtonBase.tsx'

type GamesEntryProps = {
    yearSpan: string;
    gameTitle: string;
} & NavButtonProps

function GamesEntry( {yearSpan, gameTitle, ...rest} : GamesEntryProps){
    
    return(
        <NavButtonBase
            {...rest}
            className = "gamesEntryGroup"
            >
                <div className="EntryGroupTitle"> {yearSpan} </div>
                <div className="gamesEntryGroupBox"> {gameTitle} </div>
        </NavButtonBase>
    )
}

export default GamesEntry;