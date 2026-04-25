import { createContext } from "react";


export type ImgBrowserContextProps = {
    imgs: string[];
    activeIndex: number | null;
    registerImg: ( imgPath: string) => number;
    openBrowser: ( imgIndex: number) => void;
    closeBrowser: () => void;
} | null;

export const ImgBrowserContext = createContext<ImgBrowserContextProps>(null);