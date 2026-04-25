import { PageBase } from "$comps/pages/PageBase";
import { InfoPageSection } from "$comps/pages/InfoPageSection";
import { InfoPageImg } from "$comps/pages/InfoPageImg";

import eoeTall from "$assets/games/eoe/eoe-tall.jpg"
import eoeScreenshot from "$assets/games/eoe/eoe-screenshot.png"
import { InfoPageText } from "$comps/pages/InfoPageText";

export function GamesEOE(){

    return (
        <PageBase>
            <InfoPageSection subtitleLocKey="GAMES_EOE_TITLE">
                <InfoPageImg imgPath={eoeTall} titleLocKey="GAMES_EOE_TITLE1"/>
                <InfoPageText locKey="GAMES_EOE_BODY1"/>
            </InfoPageSection>

            <InfoPageSection>
                <InfoPageText locKey="GAMES_EOE_BODY2"/>
                <InfoPageImg imgPath={eoeScreenshot} titleLocKey="GAMES_EOE_TITLE2" />
            </InfoPageSection>

            <InfoPageSection>
                <InfoPageImg imgPath={eoeScreenshot} titleLocKey="GAMES_EOE_TITLE" />
                <InfoPageImg imgPath={eoeTall} titleLocKey="GAMES_EOE_TITLE"/>
            </InfoPageSection>
        </PageBase>
    )
}