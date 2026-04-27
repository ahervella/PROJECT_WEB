import { PageBase } from "$comps/pages/PageBase";
import { ROUTES } from "$src/routes";
import { InfoPageLinkText, type LinkCont } from "$comps/pages/InfoPageLinkText";
import lunTitle from "$assets/games/lun/lun-title.png"
import lunBanner from "$assets/games/lun/lun-banner.png"
import { InfoPageSection } from "$comps/pages/InfoPageSection";
import { InfoPageImg } from "$comps/pages/InfoPageImg";
import { InfoPageText } from "$comps/pages/InfoPageText";
import { InfoPageVideo } from "$comps/pages/InfoPageVideo";

export function GamesLUN(){

    const links: LinkCont[] = [
        {externalUrl: ROUTES.LUNARNAUT, nameLocKey: "URL_GITHUB"}
    ]

    return (
        <PageBase prevPage={ROUTES.GAMES}>
            <InfoPageSection isVertical={true}>
                
                <InfoPageImg imgPath={lunTitle} imgLocKey="PROJ_LUN" width={600}/>

                <InfoPageSection isNested={true}>
                    <InfoPageImg imgLocKey="PROJ_LUN" imgPath={lunBanner}/>
                    <InfoPageLinkText linkConts={links} locKey="PROJ_LUN_BODY1" />
                </InfoPageSection>

            </InfoPageSection>

            <InfoPageSection subtitleLocKey="PROJ_LUN_TITLE_UNITY" isVertical={true}>
                <InfoPageText locKey="PROJ_LUN_BODY2" />
                <InfoPageVideo videoURL={ROUTES.GAMES_LUN_UNITY_DEMO} videoTitleLocKey="PROJ_LUN_TITLE_UNITY"/>
            </InfoPageSection>

            <InfoPageSection isVertical={true} subtitleLocKey="PROJ_LUN_TITLE_GODOT">
                <InfoPageText locKey="PROJ_LUN_BODY3" />
                <InfoPageVideo videoURL={ROUTES.GAMES_LUN_GODOT_DEMO} videoTitleLocKey="PROJ_LUN_TITLE_GODOT"/>
            </InfoPageSection>
        </PageBase>
    )
}
