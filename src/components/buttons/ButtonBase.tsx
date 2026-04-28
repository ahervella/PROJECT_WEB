import './ButtonBase.css'

export type ButtonBaseProps = {
    children?: React.ReactNode; 
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    onClick?: () => void;
    target?: string;
    href?: string;
    className?: string;
    ref?: React.Ref<HTMLAnchorElement | null>;
}

export function ButtonBase( { children, className, ...rest } : ButtonBaseProps ){

    return(
        <a
            {...rest}
            className = {`buttonBase ${className || ""} `}
            >
                {children}
            </a>
    )
}