import "./InfoPage.css"
import {TText} from "$comps/TText";
import "$src/TextSizing.css"

export type InfoPageSectionProps = {
    children?: React.ReactNode;
    className?: string;
    subtitleLocKey?: string;
    isVertical?: boolean;
    isNested?: boolean;
}

export function InfoPageSection( {children, className, subtitleLocKey, isVertical, isNested}: InfoPageSectionProps ) {

    const finalClassName = `infoPageSection
    ${className || ""}
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