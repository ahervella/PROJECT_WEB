import './NavButton.css'
import { useNavigate } from "react-router-dom";

export type NavButtonProps = {
    children?: React.ReactNode;
    isExternalLink: boolean;
    urlPath: string; 
    onMouseEnter?: (event : React.MouseEvent<HTMLAnchorElement>) => void;
    onClick?: () => void;
    className?: string;
}

function NavButton( {children, isExternalLink, urlPath, onMouseEnter, onClick, className } : NavButtonProps ){
    const navigate = useNavigate();

    return(
        <a
            onMouseEnter = {onMouseEnter ? onMouseEnter : undefined}
            onClick = { onClick? onClick : (isExternalLink ? undefined : () => navigate(urlPath) ) } 
            target = {isExternalLink ? "_blank" : "_self" }
            href = { isExternalLink ? urlPath : undefined }
            className = {`navButton ${className || ""} `}
            >
                {children}
        </a>
    )
}

export default NavButton