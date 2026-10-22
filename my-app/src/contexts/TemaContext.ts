import { createContext } from "react";
import type { Tema } from "../types/types";

type TipoTemaContext = {
    tema: Tema;
    alternarTema: () => void;
};

export const TemaContext = createContext<TipoTemaContext | undefined>(
    undefined
);