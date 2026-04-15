import { useNavigate } from "react-router-dom";

export interface INavigable {
    isExternalLink: boolean;
    urlPath: string;
}

export function useNavigation( { isExternalLink, urlPath } : INavigable ){
    
    const navigate = useNavigate();

    const onClick = isExternalLink ? undefined : () => navigate( urlPath );
    const href = isExternalLink ? urlPath : undefined;
    const target = isExternalLink ? "_blank" : "_self";

    return { onClick, href, target };
}