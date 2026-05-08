import { PageBase } from "$comps/pages/PageBase";
import { ROUTES } from "$src/routes";
import { InfoPageLinkText, type LinkCont } from "$comps/pages/InfoPageLinkText";
import { InfoPageSection } from "$comps/pages/InfoPageSection";
import { InfoPageText } from "$comps/pages/InfoPageText";

import picoConcept1 from "$assets/games/pico8/pico-concept1.png";
import picoConcept2 from "$assets/games/pico8/pico-concept2.png";
import { InfoPageImg } from "$comps/pages/InfoPageImg";
import { InfoPageSectionGrid } from "$comps/pages/InfoPageSectionGrid";

export function GamesPICO8(){

    const links: LinkCont[] = [
        {externalUrl: ROUTES.PICO8, nameLocKey: "URL_GITHUB"},
        {externalUrl: ROUTES.GAMES_PICO8_SITE, nameLocKey: "PROJ_PICO8_SITE"}
    ]

    return (
        <PageBase prevPage={ROUTES.GAMES}>

            <InfoPageSectionGrid subtitleLocKey="PROJ_PICO8">
                <InfoPageImg width={400} imgPath={picoConcept1} imgLocKey="PROJ_PICO8_TITLE_IMG"/>
                <InfoPageImg width={400} imgPath={picoConcept2} imgLocKey="PROJ_PICO8_TITLE_IMG"/>
            </InfoPageSectionGrid>

            <InfoPageSection >
                <InfoPageLinkText linkConts={links} locKey="PROJ_PICO8_BODY1" />
            </InfoPageSection>

            <InfoPageSection subtitleLocKey="PROJ_PICO8_TITLE_CONCEPT">
                <InfoPageText locKey="PROJ_PICO8_BODY2"/>
            </InfoPageSection>

            <InfoPageSection subtitleLocKey="PROJ_PICO8_TITLE_GOAL">
                <InfoPageText locKey="PROJ_PICO8_BODY3"/>
            </InfoPageSection>

            <InfoPageSection subtitleLocKey="PROJ_PICO8_TITLE_LUA">
                <InfoPageText locKey="PROJ_PICO8_BODY4"/>
            </InfoPageSection>
        </PageBase>
    )
}
