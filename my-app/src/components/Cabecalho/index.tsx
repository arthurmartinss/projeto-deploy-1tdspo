import { useContext } from "react";
import Menu from "../Menu/Menu";
import { TemaContext } from "../../contexts/TemaContext";
import { FaMoon, FaSun } from "react-icons/fa";


export default function Cabecalho() {
  const { tema, alternarTema } = useContext(TemaContext);

  return (
    <header>
      <h1>mesbla</h1>

      <Menu />

      <button type="button" onClick={alternarTema}>
        {tema === "light " ? <FaMoon/> : <FaSun/>}
      </button>
    </header>
  );
}
