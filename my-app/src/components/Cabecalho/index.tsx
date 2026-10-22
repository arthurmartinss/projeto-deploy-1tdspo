import { useContext } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { TemaContext } from "../../contexts/TemaContext";
import Menu from "../Menu/Menu";

export default function Cabecalho() {
  const { tema, alternarTema } = useContext(TemaContext);
  const proximoTema = tema === "light" ? "escuro" : "claro";

  return (
    <header className="cabecalho">
      <div className="cabecalho-conteudo">
       <div className="marca">
          <h1>Gerenciador de Produtos</h1>
          <p>Utensílios em geral</p>
        </div>

      <Menu />

      <button
        type="button"
        className="botao-tema"
        onClick={alternarTema}
        aria-label={`Ativar tema ${proximoTema}`}
        title={`Ativar tema ${proximoTema}`}
      >
        {tema === "light" ? <FaMoon aria-hidden="true" /> : <FaSun aria-hidden="true" />}
      </button>
      
      </div>
    </header>
  );
}