'use client'

import { createContext, useContext, useState } from 'react'

type Lang = 'es' | 'en'

interface LangCtx {
  lang: Lang
  setLang: (l: Lang) => void
}

const Ctx = createContext<LangCtx>({ lang: 'es', setLang: () => {} })

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('es')
  return <Ctx.Provider value={{ lang, setLang }}>{children}</Ctx.Provider>
}

export const useLang = () => useContext(Ctx)
