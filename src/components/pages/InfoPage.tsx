import './InfoPage.css'
import {PageVariants} from '$src/constants.ts'
import { motion } from "framer-motion"
import React from 'react'
import TText, { getText } from '$comps/TText.tsx'

export type InfoPageProps = {
    titleLocKey: string;
    imgTextGroups: ImgTextGroupProps[];
}

export type ImgTextGroupProps = {
    img: string;
    imgTitleLocKey: string;
    textLocKey: string;
}


function InfoPage( {titleLocKey, imgTextGroups} : InfoPageProps ){

    function populateGroups(){

        const elements: React.JSX.Element[] = [];
        var entry: ImgTextGroupProps;
        var alternated: boolean = false;
        for( let i: number = 0; i < imgTextGroups.length; i++){
            entry = imgTextGroups[i];
            elements.push(
                <div className={"infoPageGroup" + (alternated ? " alternated" : "") }>
                    <img
                        src={entry.img}
                        alt={ getText(entry.imgTitleLocKey) }
                        className="infoPageGroupImg" />
                        
                    <p className="infoPageGroupText">
                        <TText locKey={entry.textLocKey}/>
                    </p>
                </div>
            )

            alternated = !alternated;
        }

        return elements;
    }

    return(
        <motion.div variants={PageVariants} initial="initial" animate="enter">

            <TText className="infoPageTitle" locKey={titleLocKey} />
            {populateGroups()}
        </motion.div>

    )
}

export default InfoPage