import './App.css'
import NewHeader from '$comps/navHeader/NavHeader.tsx'
import About from '$comps/pages/about/About.tsx'
import { ROUTES } from './routes.ts';

import { Routes, Route, useLocation } from "react-router-dom";

import Games from "$comps/pages/games/Games";
import GamesPageEOE from "$comps/pages/games/eoe/GamesPageEOE"

import { AnimatePresence } from 'framer-motion';
//import Art from "./pages/Art";
//import Music from "./pages/Music";

function App() {
  const location = useLocation();

  return (

      <div className="pageMargins">
            <header>
                <NewHeader />
            </header>
            <main>
              {/* Allowing us to use a unique key for key, which is generated at random. Since we are changing the tree, we also need to tell it what location we are in now since that can't be auto reconciled anymore. Changing the tree lets us control the tree destruction time line with AnimatePresence before we make the new tree*/}
              <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                  <Route path={ROUTES.ABOUT} element={<About />} />
                  <Route path={ROUTES.GAMES} element={<Games />} />
                  {/*
                  <Route path={ROUTES.ART} element={<Art />} />
                  <Route path={ROUTES.MUSIC} element={<Music />} />
                   */}
                </Routes>
              </AnimatePresence>
            </main>
      </div>
  )
}

export default App
