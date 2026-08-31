import './App.css'
import NewHeader from '$comps/navHeader/NavHeader.tsx'
import About from '$comps/pages/about/About.tsx'
import { ROUTES } from './routes.ts';

import { Routes, Route, useLocation, Navigate } from "react-router-dom";

import { Games } from "$comps/pages/games/Games";
import { GamesEOE } from "$comps/pages/games/eoe/GamesEOE"
import { GamesGOTC } from "$comps/pages/games/gotc/GamesGOTC"
import { GamesAAA } from "$comps/pages/games/aaa/GamesAAA"
import { GamesLUN } from "$comps/pages/games/lun/GamesLUN"
import { GamesWEB } from "$comps/pages/games/web/GamesWEB"
import { GamesMEMALLOC } from "$comps/pages/games/memalloc/GamesMEMALLOC"
import { GamesPICO8 } from "$comps/pages/games/pico8/GamesPICO8"

import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { ArtAbout } from "$comps/pages/art/ArtAbout";
import { ArtNavHeader } from '$comps/navHeader/ArtNavHeader.tsx';
import { ArtDrawings } from '~/src/components/pages/art/ArtDrawings.tsx';
import { ArtDigital } from '~/src/components/pages/art/ArtDigital.tsx';
import { ExplicitLangProvider } from '$src/i18n/ExplicitLangProvider.tsx';
//import Music from "./pages/Music";

function App() {
  const location = useLocation();

  function ScrollToTop(){
    const { pathname } = useLocation();
    useEffect( () => { window.scrollTo( window.scrollX, 0 );}, [pathname])
    return null;
  }

  return (
    <ExplicitLangProvider>
      <div className="pageMargins">
            <ScrollToTop />
            <header>
                <NewHeader />
                <AnimatePresence>
                  <ArtNavHeader/>
                </AnimatePresence>
            </header>
            <main>
              {/* Allowing us to use a unique key for key, which is generated at random. Since we are changing the tree, we also need to tell it what location we are in now since that can't be auto reconciled anymore. Changing the tree lets us control the tree destruction time line with AnimatePresence before we make the new tree*/}
              <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                  <Route path={ROUTES.ABOUT} element={<About />}/>
                  <Route path={ROUTES.GAMES} element={<Games />}/>
                  <Route path={ROUTES.GAMES + ROUTES.GAMES_EOE} element={<GamesEOE />}/>
                  <Route path={ROUTES.GAMES + ROUTES.GAMES_GOTC} element={<GamesGOTC />}/>
                  <Route path={ROUTES.GAMES + ROUTES.GAMES_AAA} element={<GamesAAA />}/>
                  <Route path={ROUTES.GAMES + ROUTES.GAMES_LUN} element={<GamesLUN />}/>
                  <Route path={ROUTES.GAMES_LUN_LEGACY} element={<Navigate to={ROUTES.GAMES + ROUTES.GAMES_LUN} replace />}/>
                  <Route path={ROUTES.GAMES + ROUTES.GAMES_WEB} element={<GamesWEB />}/>
                  <Route path={ROUTES.GAMES + ROUTES.GAMES_MEMALLOC} element={<GamesMEMALLOC />}/>
                  <Route path={ROUTES.GAMES + ROUTES.GAMES_PICO8} element={<GamesPICO8 />}/>

                  <Route path={ROUTES.ART} element={<ArtAbout />}/>
                  <Route path={ROUTES.ART + ROUTES.ART_DRAWINGS} element={<ArtDrawings />}/>
                  <Route path={ROUTES.ART + ROUTES.ART_DIGITAL} element={<ArtDigital />}/>
                  {/*
                  <Route path={ROUTES.GAMES_GOTC} element={<GamesPageGOTC />}/>
                  <Route path={ROUTES.GAMES_WEB} element={<GamesPageWEB />}/>
                  <Route path={ROUTES.GAMES_PICO8} element={<GamesPagePICO8 />}/>
                  <Route path={ROUTES.GAMES_AAA} element={<GamesPageAAA />}/>
                  <Route path={ROUTES.GAMES_LUN} element={<GamesPageLUN />}/>

                  <Route path={ROUTES.ART} element={<Art />} />
                  <Route path={ROUTES.MUSIC} element={<Music />} />
                   */}
                </Routes>
              </AnimatePresence>
            </main>
      </div>
    </ExplicitLangProvider>
  )
}

export default App
