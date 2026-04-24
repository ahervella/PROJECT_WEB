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
                        isExternalLink={true}
                        urlPath={ROUTES.GOTC}
                    />

                </div>

                <div className="lineVertical gamesLineCenter">
                    <hr/>
                </div>

                <div className="gamesHalfGroup">
                    <div className="textNorm gamesHalfGroupTitle">
                        <p><TText locKey="GAMES_PERSONAL_PROJS"/></p>
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