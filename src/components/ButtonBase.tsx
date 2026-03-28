import './ButtonBase.css'

export type ButtonBaseProps = {
    children?: React.ReactNode; 
    onMouseEnter?: (event : React.MouseEvent<HTMLAnchorElement>) => void;
    onClick?: () => void;
    target?: string;
    href?: string;
    className?: string;
}

function ButtonBase( {children, onMouseEnter, onClick, target, href, className } : ButtonBaseProps ){

    return(
        <a
            onMouseEnter = {onMouseEnter ? onMouseEnter : undefined}
            onClick = { onClick? onClick : undefined } 
            target = { target? target : undefined }
            href = { href? href : undefined }
            className = {`buttonBase ${className || ""} `}
            >
                {children}
            </a>
    )
}

export default ButtonBase