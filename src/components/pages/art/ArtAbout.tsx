import { PageBase } from "$comps/pages/PageBase";
import { InfoPageSection } from "~/src/components/pages/InfoPageSection";
import { InfoPageText } from "~/src/components/pages/InfoPageText";

export function ArtAbout(){
    return (
        <PageBase>
            <InfoPageSection subtitleLocKey="ART_ABOUT_TITLE">
                <InfoPageText locKey="ART_ABOUT_BODY"/>
            </InfoPageSection>
        </PageBase>
    )
}