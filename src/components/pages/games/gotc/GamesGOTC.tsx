import { PageBase } from "$comps/pages/PageBase";
import { InfoPageSection } from "$comps/pages/InfoPageSection";
import { InfoPageImg } from "$comps/pages/InfoPageImg";
import { InfoPageLinkText, type LinkCont } from "$comps/pages/InfoPageLinkText";
import { InfoPageText } from "$comps/pages/InfoPageText";
import { ROUTES } from "$src/routes";

import gotcBanner from "$assets/games/gotc/gotc-banner.jpg"

export function GamesGOTC(){

    const gotcLinks: LinkCont[] = [
        {externalUrl: ROUTES.GAMES_GOTC_SITE, nameLocKey: "URL_WEBSITE"},
        {externalUrl: ROUTES.GAMES_GOTC_APPSTORE, nameLocKey: "URL_APPSTORE"}
    ]

    return (
        <PageBase prevPage={ROUTES.GAMES}>
            <InfoPageSection subtitleLocKey="GAMES_GOTC_TITLE">
                <InfoPageImg imgPath={gotcBanner} imgLocKey="GAMES_GOTC_TITLE"/>
                <InfoPageLinkText linkConts={gotcLinks} locKey="GAMES_GOTC_BODY1"/>
            </InfoPageSection>

            <InfoPageSection subtitleLocKey="TITLE_CONTRIBUTIONS">
                <InfoPageText locKey="GAMES_GOTC_BODY_CON"/>
            </InfoPageSection>

        </PageBase>
    )
}
