import { PageBase } from "$comps/pages/PageBase";
import { ROUTES } from "$src/routes";
import { InfoPageLinkText, type LinkCont } from "$comps/pages/InfoPageLinkText";
import { InfoPageSection } from "$comps/pages/InfoPageSection";

export function GamesMEMALLOC(){

    const links: LinkCont[] = [
        {externalUrl: ROUTES.MEMALLOC, nameLocKey: "URL_GITHUB"}
    ]

    return (
        <PageBase prevPage={ROUTES.GAMES}>
            <InfoPageSection subtitleLocKey="PROJ_MEMALLOC">
                <InfoPageLinkText linkConts={links} locKey="PROJ_MEMALLOC_BODY" />
            </InfoPageSection>
        </PageBase>
    )
}
