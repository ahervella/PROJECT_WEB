import "./InfoPage.css"
import {TText} from "$comps/TText";
import "$src/TextSizing.css"

export type InfoPageSectionProps = {
    children?: React.ReactNode;
    className?: string;
    subtitleLocKey?: string;
    centerItems?: boolean;
    isVertical?: boolean;
    isNested?: boolean;
}

export function InfoPageSection( {children, className, subtitleLocKey, centerItems, isVertical, isNested}: InfoPageSectionProps ) {

    const finalClassName = `infoPageSection
    ${className || ""}
    ${centerItems? "centerItems" : ""}
    ${isVertical ? "vertical" : ""}
    ${isNested ? "" : "bottomDividerMargin"}`;

    return(
        <div>
            { subtitleLocKey &&
                <TText locKey={subtitleLocKey} className="infoPageSectionSubtitle textNorm" />
            }
            <div className={finalClassName}>
                {children}
            </div>
        </div>
    )
}