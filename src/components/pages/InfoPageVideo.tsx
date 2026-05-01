import "./InfoPage.css"
import { useLocText } from "$comps/TText"

export type InfoPageVideoProps = {
    videoTitleLocKey: string;
    videoURL: string;
}

export function InfoPageVideo( {videoTitleLocKey, videoURL} : InfoPageVideoProps ) {
    const titleName = useLocText(videoTitleLocKey)

    return(
       <iframe className="infoPageVideo" width="560" height="315" src={videoURL} title={titleName} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen/>
    )
}