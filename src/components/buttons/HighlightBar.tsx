import "./HighlightBar.css";
import {useRef} from "react";

export type HighlightBarProps ={
    ref: React.Ref<HTMLDivElement>
}

export function HighlightBar( {...rest} : HighlightBarProps){
    return(
        <div {...rest} className="navBarHighlight" />
    )
}

export const useCreateHighlightRef = () => useRef<HTMLDivElement | null>(null);

export const useCreateButtonTextRef = () => useRef<HTMLSpanElement | null>(null);