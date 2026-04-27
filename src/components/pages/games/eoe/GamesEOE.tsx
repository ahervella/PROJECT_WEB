import { PageBase } from "$comps/pages/PageBase";
import { InfoPageSection } from "$comps/pages/InfoPageSection";
import { InfoPageImg } from "$comps/pages/InfoPageImg";

import eoeTall from "$assets/games/eoe/eoe-tall.jpg"
import { InfoPageText } from "$comps/pages/InfoPageText";
import { InfoPageLinkText, type LinkCont} from "$comps/pages/InfoPageLinkText";
import { ROUTES } from "$src/routes";
import { InfoPageVideo } from "$comps/pages/InfoPageVideo";

export function GamesEOE(){

    const eoeLinks: LinkCont[] = [
        {externalUrl: ROUTES.GAMES_EOE_SITE, nameLocKey: "URL_WEBSITE"},
        {externalUrl: ROUTES.GAMES_EOE_STEAM, nameLocKey: "URL_STEAM"},
        {externalUrl: ROUTES.GAMES_EOE_LORIC, nameLocKey: "URL_LORIC"}
    ]

    return (
        <PageBase prevPage={ROUTES.GAMES}>
            <InfoPageSection subtitleLocKey="GAMES_EOE_TITLE">
                <InfoPageImg imgPath={eoeTall} imgLocKey="GAMES_EOE_IMG_COVER_ART"/>

                <InfoPageLinkText linkConts={eoeLinks} locKey="GAMES_EOE_BODY1"/>
            </InfoPageSection>

            <InfoPageSection>
                <InfoPageText locKey="GAMES_EOE_BODY2"/>
                
                <InfoPageVideo videoURL={ROUTES.GAMES_EOE_VIDEO_TRAILER} videoTitleLocKey="GAMES_EOE_TITLE_TRAILER" />
            </InfoPageSection>

            <InfoPageSection >
                <InfoPageVideo videoURL={ROUTES.GAMES_EOE_ANDREA} videoTitleLocKey="GAMES_EOE_TITLE_ANDREA" />
                <InfoPageText locKey="GAMES_EOE_BODY_ANDREA"/>
            </InfoPageSection>

            <InfoPageSection subtitleLocKey="GAMES_EOE_TITLE_CON">
                <InfoPageText locKey="GAMES_EOE_BODY_CON"/>
            </InfoPageSection>
            
        </PageBase>
    )
}