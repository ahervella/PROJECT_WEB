import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "./i18n/config.ts";
import App from './App.tsx'
import React from "react";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* in case slow internet and downloading translation json or other assets */}
    <React.Suspense fallback={
      <div>
        Loading...
      </div>
    }>
      <App />
    </React.Suspense>
  </StrictMode>
)
