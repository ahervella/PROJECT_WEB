import {InfoPageText, type InfoPageTextProps} from "./InfoPageText"
import {InfoPageSection} from "./InfoPageSection"
import { StandaloneLinkButton } from "$comps/buttons/StandaloneLinkButton";

export type InfoPageLinkTextProps = {
    linkConts: LinkCont[];
} & InfoPageTextProps

export type LinkCont = {
    externalUrl: string;
    nameLocKey: string;
}

export function InfoPageLinkText( {linkConts, ...rest} : InfoPageLinkTextProps ){

    const buttons = linkConts.map( cont =>
        <StandaloneLinkButton key={cont.externalUrl+cont.nameLocKey} urlPath={cont.externalUrl} locKey={cont.nameLocKey} isExternalLink={true} />
    )

    return(
        <InfoPageSection className="linkTextWrapper" isNested={true} isVertical={true}>
            <div className="linkTextButtons">
                {buttons}
            </div>
            <InfoPageText {...rest} />
        </InfoPageSection>
    )
}