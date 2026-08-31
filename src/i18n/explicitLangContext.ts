import { createContext, useContext } from "react";

export const LANG_QUERY_PARAM = "lng";

// Default no-op so the hook is safe to call outside the provider (e.g. in tests).
export const ExplicitLangContext = createContext<(langCode: string) => void>(() => {});

export function useSetExplicitLang() {
    return useContext(ExplicitLangContext);
}
