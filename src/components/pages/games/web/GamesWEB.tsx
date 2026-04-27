import { PageBase } from "$comps/pages/PageBase";
import { ROUTES } from "$src/routes";
import { InfoPageLinkText, type LinkCont } from "$comps/pages/InfoPageLinkText";
import { InfoPageSection } from "~/src/components/pages/InfoPageSection";

export function GamesWEB(){

    const links: LinkCont[] = [
            {externalUrl: ROUTES.WEBPAGE, nameLocKey: "URL_GITHUB"}
        ]
    
    return (
        <PageBase prevPage={ROUTES.GAMES}>
            <InfoPageSection subtitleLocKey="PROJ_WEB">
                <InfoPageLinkText linkConts={links} locKey="PROJ_WEB_BODY" />
            </InfoPageSection>
        </PageBase>
    )
}
