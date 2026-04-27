import { PageBase } from "$comps/pages/PageBase";
import { ROUTES } from "$src/routes";
import { InfoPageLinkText, type LinkCont } from "$comps/pages/InfoPageLinkText";
import { InfoPageImg } from "~/src/components/pages/InfoPageImg";
import aaaTitle from "$assets/games/aaa/aaa-title.png"
import aaaBanner from "$assets/games/aaa/aaa-banner.png"
import { InfoPageSection } from "~/src/components/pages/InfoPageSection";
//import { InfoPageText } from "~/src/components/pages/InfoPageText";
import { InfoPageVideo } from "~/src/components/pages/InfoPageVideo";

export function GamesAAA(){

    const links: LinkCont[] = [
        {externalUrl: ROUTES.GAMES_AAA_GITHUB, nameLocKey: "URL_GITHUB"},
        {externalUrl: ROUTES.GAMES_AAA_STEAM, nameLocKey: "URL_STEAM"}
    ]

    const slidesLink: LinkCont[] = [
        {externalUrl: ROUTES.GAMES_AAA_SLIDES, nameLocKey: "PROJ_AAA_SLIDES"}
    ]

    return (
        <PageBase prevPage={ROUTES.GAMES}>
            
            <InfoPageSection isVertical={true}>
                <InfoPageImg imgPath={aaaTitle} imgLocKey="PROJ_AAA" width={600}/>

                <InfoPageSection isNested={true}>
                    <InfoPageImg width={450} imgLocKey="PROJ_AAA" imgPath={aaaBanner}/>
                    <InfoPageLinkText linkConts={links} locKey="PROJ_AAA_BODY1" />

                </InfoPageSection>

            </InfoPageSection>

            <InfoPageSection>
                <InfoPageVideo videoURL={ROUTES.GAMES_AAA_STEAM_TRAILER} videoTitleLocKey="PROJ_AAA_TRAILER"/>
            </InfoPageSection>

            <InfoPageSection>
                <InfoPageLinkText linkConts={slidesLink} locKey="PROJ_AAA_BODY2"/>
                <InfoPageVideo videoURL={ROUTES.GAMES_AAA_STEAM_STREAM} videoTitleLocKey="PROJ_AAA_STREAM"/>
            </InfoPageSection>
        </PageBase>
    )
}
