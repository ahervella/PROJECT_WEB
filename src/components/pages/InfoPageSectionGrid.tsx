import { InfoPageSection, type InfoPageSectionProps } from "./InfoPageSection";

export type InfoPageSectionGridProps = {
    children? : React.ReactNode;
    className?: string;
} & InfoPageSectionProps

export function InfoPageSectionGrid({children, className} : InfoPageSectionGridProps){

    return (
        <InfoPageSection className={`grid ${className || ""}`} >
            {children}
        </InfoPageSection>
    )
}