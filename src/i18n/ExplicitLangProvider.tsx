import { useEffect, useState, type ReactNode } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import i18n from "./config";
import { ExplicitLangContext, LANG_QUERY_PARAM } from "./explicitLangContext";

// Once a language is chosen explicitly (either by clicking a language
// button, or by landing on a URL that already has `?lng=`), keep that
// `?lng=` param in the address bar as the user navigates the site, even
// though React Router drops search params on route changes by default.
// Landing on the site fresh with no `?lng=` (a real page load, which
// remounts this provider) forgets the explicit choice and lets the
// language detector take over again.
export function ExplicitLangProvider({ children }: { children: ReactNode }) {
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const [explicitLang, setExplicitLangState] = useState<string | null>(
        () => new URLSearchParams(window.location.search).get(LANG_QUERY_PARAM)
    );

    function setExplicitLang(langCode: string) {
        i18n.changeLanguage(langCode);
        setExplicitLangState(langCode);
        setSearchParams(prev => {
            const next = new URLSearchParams(prev);
            next.set(LANG_QUERY_PARAM, langCode);
            return next;
        }, { replace: true });
    }

    // React Router's <Link>/navigate only preserve the path you give them —
    // clicking a plain <Link to="/games"> drops any existing "?lng=..."
    // from the address bar. This effect re-runs on every route change and
    // puts "?lng=" back if it's missing, which is the only reason the
    // explicit choice appears "sticky" while browsing.
    useEffect(() => {
        if (!explicitLang || searchParams.get(LANG_QUERY_PARAM) === explicitLang) {
            return;
        }

        setSearchParams(prev => {
            const next = new URLSearchParams(prev);
            next.set(LANG_QUERY_PARAM, explicitLang);
            return next;
        }, { replace: true });
        // Only re-run when the route or the explicit choice changes, not on
        // every searchParams identity change (we're the ones setting it).
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.pathname, explicitLang]);

    return (
        <ExplicitLangContext.Provider value={setExplicitLang}>
            {children}
        </ExplicitLangContext.Provider>
    );
}
