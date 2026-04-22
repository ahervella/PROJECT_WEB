import "./HighlightBar.css";
import {useRef} from "react";

export type HighlightBarProps ={
    ref?: React.Ref<HTMLDivElement>
}

export function HighlightBar( {...rest} : HighlightBarProps){
    return(
        <div {...rest} className="navBarHighlight" />
    )
}

export const createHighlightRef = () => useRef<HTMLDivElement | null>(null);

export const createButtonTextRef = () => useRef<HTMLSpanElement | null>(null);