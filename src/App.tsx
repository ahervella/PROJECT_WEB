import { useState } from 'react'
import './App.css'
import NewHeader from './components/navHeader/NavHeader.tsx'
import About from './components/pages/about/About.tsx'
import { ROUTES } from './routes.ts';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Games from "./components/pages/games/Games";
//import Art from "./pages/Art";
//import Music from "./pages/Music";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="pageMargins">
            <header>
                <NewHeader />
            </header>
            <main>
                <Routes>
                  <Route path={ROUTES.ABOUT} element={<About />} />
                  <Route path={ROUTES.GAMES} element={<Games />} />
                  {/*
                  <Route path={ROUTES.ART} element={<Art />} />
                  <Route path={ROUTES.MUSIC} element={<Music />} />
                   */}
                </Routes>
            </main>
      </div>
    </Router>

  )
}

export default App
