import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {useEffect} from "react"

export interface INavigable {
    isExternalLink: boolean;
    urlPath: string;
}

export interface INavigableSelectActive extends INavigable {
    matchURLExactly?: boolean;
}

export function useIsActiveURL( urlPath: string, matchURLExactly?: boolean){
    const currLocation = useLocation();
    useEffect( ()=> {console.log (currLocation)}, [currLocation]);

    if( matchURLExactly ){
        return currLocation.pathname == urlPath;
    }

    return currLocation.pathname.startsWith(urlPath);
}

export function useNavigation( { isExternalLink, urlPath } : INavigable ){
    return useNavigationSelectActive( {isExternalLink, urlPath} );
}

export function useNavigationSelectActive( {isExternalLink, urlPath, matchURLExactly}: INavigableSelectActive ){
    
    const navigate = useNavigate();

    const onClick = isExternalLink ? undefined : () => navigate( urlPath );
    const href = isExternalLink ? urlPath : undefined;
    const target = isExternalLink ? "_blank" : "_self";

    const isActive = useIsActiveURL( urlPath, matchURLExactly );

    return { onClick, href, target, isActive };
}