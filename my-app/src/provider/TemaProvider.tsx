import { useState } from "react";
import { TemaContext } from "../contexts/TemaContext";
import type { Tema, TipoTemaProps } from "../types/types";

export function TemaProvider({ children }: TipoTemaProps) {
  const [tema, setTema] = useState<Tema>("light");

  function alternarTema() {
    setTema((temaAtual) => (temaAtual === "light" ? "dark" : "light"));
  }

  return (
    <TemaContext.Provider value={{ tema, alternarTema }}>
      {children}
    </TemaContext.Provider>
  );
}