import { InfoPageText } from '$comps/pages/InfoPageText';
import { InfoPageSection } from '$comps/pages/InfoPageSection';
import { PageBase } from '$comps/pages/PageBase';
import { InfoPageSectionGrid } from '$comps/pages/InfoPageSectionGrid';
import { InfoPageImg } from '$comps/pages/InfoPageImg';

// Import all images from the assets folder
const imgs = import.meta.glob('$assets/art/digital/*.{png,jpg,jpeg,svg}', { eager: true, as: 'url' });


export function ArtDigital(){

    const imgPaths = Object.values(imgs);

    return(
        <PageBase>
            <InfoPageSection>
                <InfoPageText locKey="ART_DIGITAL_BODY"/>
            </InfoPageSection>
            <InfoPageSectionGrid>
            {
                imgPaths.map( (imgPath, index) => (
                    <InfoPageImg width="200px" imgPath={imgPath} imgLocKey={`Digital Drawing ${index + 1}`} />
                )) 
            }
            </InfoPageSectionGrid>
        </PageBase>
    )

}