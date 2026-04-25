import { createContext } from "react";


export type ImgBrowserContextProps = {
    imgs: ImgContainer[];
    activeIndex: number | null;
    registerImg: ( img: ImgContainer) => number;
    openBrowser: ( imgIndex: number) => void;
    closeBrowser: () => void;
} | null;

export type ImgContainer = {
    imgPath: string;
    imgLocKey: string;
}

export const ImgBrowserContext = createContext<ImgBrowserContextProps>(null);