import './Games.css'
import InfoPageEntryButton from '$comps/buttons/InfoPageEntryButton.tsx'
import {ROUTES} from '$src/routes.ts'
import { PageVariants } from '$src/constants.ts';
import {TText} from "$comps/TText.tsx";
import { motion } from "framer-motion";

import eoeImg from "$assets/games/eoe/eoe-tall.jpg"
import gotcImg from "$assets/games/gotc/gotc-banner.jpg"
import aaaImg from "$assets/games/aaa/aaa-banner.png"
import lunImg from "$assets/games/lun/lun-banner.png"
import pico8Img from "$assets/games/pico8/pico-concept2.png"

export function Games(){

    return(
        <motion.div variants={PageVariants} initial="initial" animate="enter">
            <div className="gamesGroup">
                <div className="gamesHalfGroup">
                    <div className="textNorm gamesHalfGroupTitle">
                        <p><TText locKey="GAMES_PRO_PROJS"/></p>
                    </div>

                    <InfoPageEntryButton
                        yearStart={2023}
                        yearEnd={2026}
                        locKey='Echoes of Elysium'
                        isExternalLink={false}
                        urlPath={ROUTES.GAMES + ROUTES.GAMES_EOE}
                        imgPath={eoeImg}
                        imgOffsetY="70%"
                    />

                    <InfoPageEntryButton
                        yearStart={2019}
                        yearEnd={2021}
                        locKey='Game of Thrones: Conquest'
                        isExternalLink={false}
                        urlPath={ROUTES.GAMES + ROUTES.GAMES_GOTC}
                        imgPath={gotcImg}
                        imgOffsetY="85%"
                    />

                </div>

                <div className="lineVertical gamesLineCenter"/>

                <div className="gamesGridWrapper">
                    <div className="textNorm gamesHalfGroupTitle">
                        <p><TText locKey="GAMES_PERSONAL_PROJS"/></p>
                    </div>

                    <div className="gamesGridGroup">
                        <InfoPageEntryButton
                            yearStart={2026}
                            locKey='PROJ_WEB'
                            isExternalLink={false}
                            urlPath={ROUTES.GAMES + ROUTES.GAMES_WEB}
                        />

                        <InfoPageEntryButton
                            yearStart={2025}
                            locKey='PROJ_PICO8'
                            isExternalLink={false}
                            urlPath={ROUTES.GAMES + ROUTES.GAMES_PICO8}
                            imgPath={pico8Img}
                        />

                        <InfoPageEntryButton
                            yearStart={2022}
                            yearEnd={2023}
                            locKey='Aliens After Ava'
                            isExternalLink={false}
                            urlPath={ROUTES.GAMES + ROUTES.GAMES_AAA}
                            imgPath={aaaImg}
                        />

                        <InfoPageEntryButton
                            yearStart={2019}
                            yearEnd={2021}
                            locKey='Lunarnaut'
                            isExternalLink={false}
                            urlPath={ROUTES.GAMES + ROUTES.GAMES_LUN}
                            imgPath={lunImg}
                            imgOffsetY="10%"
                        />
                    </div>

                </div>
            
            </div>

        </motion.div>
    )
}