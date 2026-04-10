import './Games.css'
import GamesEntryButton from './GamesEntryButton.tsx'
import {ROUTES} from '$src/routes.ts'
import { PageVariants } from '$src/constants.ts';

import { delay, easeIn, easeInOut, motion } from "framer-motion";

function Games(){

    return(
        <motion.div variants={PageVariants} initial="initial" animate="enter">
            <div className="gamesGroup">
                <div className="gamesHalfGroup">
                    <div className="gamesHalfGroupTitle">
                        <p>Professional Projects</p>
                    </div>

                    <GamesEntryButton
                        yearStart={2023}
                        yearEnd={2026}
                        gameLocKey='Echoes of Elysium'
                        isExternalLink={true}
                        urlPath={ROUTES.EOE}
                    />

                    <GamesEntryButton
                        yearStart={2019}
                        yearEnd={2021}
                        gameLocKey='Game of Thrones: Conquest'
                        isExternalLink={true}
                        urlPath={ROUTES.GOTC}
                    />

                </div>

                <div className="lineVertical gamesLineCenter">
                    <hr/>
                </div>

                <div className="gamesHalfGroup">
                    <div className="gamesHalfGroupTitle">
                        <p>Personal Projects</p>
                    </div>
                    
                    <GamesEntryButton
                        yearStart={2026}
                        gameLocKey='WEB_PROJ'
                        isExternalLink={true}
                        urlPath={ROUTES.PICO8}
                    />
                    
                    <GamesEntryButton
                        yearStart={2025}
                        gameLocKey='PICO_PROJ'
                        isExternalLink={true}
                        urlPath={ROUTES.PICO8}
                    />

                    <GamesEntryButton
                        yearStart={2022}
                        yearEnd={2023}
                        gameLocKey='Aliens After Ava'
                        isExternalLink={true}
                        urlPath={ROUTES.AAA}
                    />

                    <GamesEntryButton
                        yearStart={2019}
                        yearEnd={2021}
                        gameLocKey='Lunarnaut'
                        isExternalLink={true}
                        urlPath={ROUTES.LUNARNAUT}
                    />

                </div>
            
            </div>

        </motion.div>
    )
}

export default Games;