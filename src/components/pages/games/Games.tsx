import './Games.css'
import GamesEntryButton from './GamesEntryButton.tsx'
import {ROUTES} from '$src/routes.ts'
import { PageVariants } from '$src/constants.ts';
import {TText} from "$comps/TText.tsx";
import { motion } from "framer-motion";

export function Games(){

    return(
        <motion.div variants={PageVariants} initial="initial" animate="enter">
            <div className="gamesGroup">
                <div className="gamesHalfGroup">
                    <div className="textNorm gamesHalfGroupTitle">
                        <p><TText locKey="GAMES_PRO_PROJS"/></p>
                    </div>

                    <GamesEntryButton
                        yearStart={2023}
                        yearEnd={2026}
                        gameLocKey='Echoes of Elysium'
                        isExternalLink={false}
                        urlPath={ROUTES.GAMES + ROUTES.GAMES_EOE}
                    />

                    <GamesEntryButton
                        yearStart={2019}
                        yearEnd={2021}
                        gameLocKey='Game of Thrones: Conquest'
                        isExternalLink={false}
                        urlPath={ROUTES.GAMES + ROUTES.GAMES_GOTC}
                    />

                </div>

                <div className="lineVertical gamesLineCenter"/>

                <div className="gamesGridWrapper">
                    <div className="textNorm gamesHalfGroupTitle">
                        <p><TText locKey="GAMES_PERSONAL_PROJS"/></p>
                    </div>

                    <div className="gamesGridGroup">
                        <GamesEntryButton
                            yearStart={2026}
                            gameLocKey='PROJ_WEB'
                            isExternalLink={false}
                            urlPath={ROUTES.GAMES + ROUTES.GAMES_WEB}
                        />

                        <GamesEntryButton
                            yearStart={2025}
                            gameLocKey='PROJ_PICO8'
                            isExternalLink={false}
                            urlPath={ROUTES.GAMES + ROUTES.GAMES_PICO8}
                        />

                        <GamesEntryButton
                            yearStart={2022}
                            yearEnd={2023}
                            gameLocKey='Aliens After Ava'
                            isExternalLink={false}
                            urlPath={ROUTES.GAMES + ROUTES.GAMES_AAA}
                        />

                        <GamesEntryButton
                            yearStart={2019}
                            yearEnd={2021}
                            gameLocKey='Lunarnaut'
                            isExternalLink={false}
                            urlPath={ROUTES.GAMES + ROUTES.GAMES_LUN}
                        />
                    </div>

                </div>
            
            </div>

        </motion.div>
    )
}