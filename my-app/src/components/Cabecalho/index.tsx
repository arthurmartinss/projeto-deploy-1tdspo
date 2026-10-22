import { useContext } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { TemaContext } from "../../contexts/TemaContext";
import Menu from "../Menu/Menu";

export default function Cabecalho() {
  const { tema, alternarTema } = useContext(TemaContext);
  const proximoTema = tema === "light" ? "escuro" : "claro";

  return (
    <header>
      <h1>mesbla</h1>

      <Menu />

      <button
        type="button"
        onClick={alternarTema}
        aria-label={`Ativar tema ${proximoTema}`}
        title={`Ativar tema ${proximoTema}`}
      >
        {tema === "light" ? <FaMoon aria-hidden="true" /> : <FaSun aria-hidden="true" />}
      </button>
    </header>
  );
}