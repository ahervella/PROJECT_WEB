import { useNavigate } from "react-router-dom";
import {ROUTES} from '$src/routes.ts'
import { useLocation } from "react-router-dom";
import {useEffect} from "react"

export interface INavigable {
    isExternalLink: boolean;
    urlPath: string;
}

export function useNavigation( { isExternalLink, urlPath } : INavigable ){
    
    const navigate = useNavigate();

    const onClick = isExternalLink ? undefined : () => navigate( urlPath );
    const href = isExternalLink ? urlPath : undefined;
    const target = isExternalLink ? "_blank" : "_self";


    const currLocation = useLocation();
    useEffect( ()=> {console.log (currLocation)}, [currLocation]);

    const isActive = urlPath == ROUTES.ABOUT ?
        currLocation.pathname == urlPath :
        currLocation.pathname.startsWith(urlPath);

    return { onClick, href, target, isActive };
}