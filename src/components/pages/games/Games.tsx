import './Games.css'
import GamesEntryButton from './GamesEntryButton.tsx'
import {ROUTES} from './../../../routes.ts'

function Games(){


    return(
        <div className="gamesGroup">
            <div className="gamesHalfGroup">
                <div className="gamesHalfGroupTitle">
                    <p>Professional Projects</p>
                </div>

                <GamesEntryButton
                    yearSpan='2023 - 2026'
                    gameTitle='Echoes of Elysium'
                    isExternalLink={true}
                    urlPath={ROUTES.EOE}
                />

                <GamesEntryButton
                    yearSpan='2019 - 2021'
                    gameTitle='Game of Thrones: Conquest'
                    isExternalLink={true}
                    urlPath={ROUTES.GOTC}
                />

                {/*
                <a target="_blank" href="https://www.echoes.games/" className="gamesEntryGroup">
                    <div className="EntryGroupTitle">
                        2023 - 2026
                    </div>
                    <div className="gamesEntryGroupBox">
                        Echoes of Elysium
                    </div>
                </a>
                
                <a target="_blank" href="https://www.gotconquest.com/" className="gamesEntryGroup">
                    <div className="EntryGroupTitle">
                        2019 - 2021
                    </div>
                    <div className="gamesEntryGroupBox">
                        Game of Thrones: Conquest
                    </div>
                </a>
                 */}
            </div>

            <div className="lineVertical gamesLineCenter">
                <hr/>
            </div>

            <div className="gamesHalfGroup">
                <div className="gamesHalfGroupTitle">
                    <p>Personal Projects</p>
                </div>

                <GamesEntryButton
                    yearSpan='2025 - [present]'
                    gameTitle='Pico 8 Project'
                    isExternalLink={true}
                    urlPath={ROUTES.PICO8}
                />

                <GamesEntryButton
                    yearSpan='2022 - 2023'
                    gameTitle='Aliens After Ava'
                    isExternalLink={true}
                    urlPath={ROUTES.AAA}
                />

                <GamesEntryButton
                    yearSpan='2019-2021'
                    gameTitle='Lunarnaut'
                    isExternalLink={true}
                    urlPath={ROUTES.LUNARNAUT}
                />


                {/*
                <a target="_blank" href="https://www.echoes.games/" className="gamesEntryGroup">
                    <div className="EntryGroupTitle">
                        2025 - [present]
                    </div>
                    <div className="gamesEntryGroupBox">
                        Echoes of Elysium
                    </div>
                </a>

                <a target="_blank" href="https://www.echoes.games/" className="gamesEntryGroup">
                    <div className="EntryGroupTitle">
                        2022 - 2023
                    </div>
                    <div className="gamesEntryGroupBox">
                        Aliens After Ava
                    </div>
                </a>

                <a target="_blank" href="https://www.echoes.games/" className="gamesEntryGroup">
                    <div className="EntryGroupTitle">
                        2019 - 2021
                    </div>
                    <div className="gamesEntryGroupBox">
                        Lunarnaut
                    </div>
                </a>
                */}

            </div>
        </div>
    )
}

export default Games;