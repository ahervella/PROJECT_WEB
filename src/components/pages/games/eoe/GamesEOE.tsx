import { ROUTES } from '../../../../routes.ts'
import GamesPage from '../GamesPage.tsx'
import type {ImgTextGroupProps} from '../GamesPage.tsx'
import eoeTall from '$assets/games/eoe/eoe-tall.jpg'
import eoeScreenshot from '$assets/games/eoe/eoe-screenshot.png'

function GamesPageEOE(){
    const groups : ImgTextGroupProps[] = [
        {
            img : eoeTall,
            imgTitleLocKey : "GAMES_EOE_TITLE",
            textLocKey : "GAMES_EOE_BODY"
        },
        {
            img: eoeScreenshot,
            imgTitleLocKey: "GAMES_EOE_TITLE",
            textLocKey: "GAMES_EOE_BODY"
        }
    ]

    return (
        <GamesPage titleLocKey="GAMES_EOE_TITLE" imgTextGroups={groups}/>
    )
}

export default GamesPageEOE