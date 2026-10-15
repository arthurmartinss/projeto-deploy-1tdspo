import { Outlet } from "react-router";
import type { LayoutProps } from "../../types/types";
import Cabecalho from "../Cabecalho";
import Rodape from "../Rodape";

export function Layout({ tema }: LayoutProps) {
  return (
    <div className={tema} data-theme={tema}>
      <Cabecalho />
      <Outlet />
      <Rodape />
    </div>
  );
}