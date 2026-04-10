import './ButtonBase.css'
import { useNavigate } from "react-router-dom";
import type { ButtonBaseProps } from './ButtonBase';
import ButtonBase from './ButtonBase';

export type NavButtonProps = {
    isExternalLink: boolean;
    urlPath: string;
} & ButtonBaseProps

function NavButton( { isExternalLink, urlPath, onClick, ...rest } : NavButtonProps ){
    const navigate = useNavigate();

    function navToPage(url : string){
        console.log("navigating to page: " + url);
        navigate( url );
    }

    return(
        <ButtonBase
            {...rest}
            onClick = { onClick? onClick : (isExternalLink ? undefined : () => navToPage(urlPath) ) } 
            target = {isExternalLink ? "_blank" : "_self" }
            href = { isExternalLink ? urlPath : undefined }
            />
    )
}

export default NavButton