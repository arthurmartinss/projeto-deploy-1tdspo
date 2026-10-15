import { useEffect, useState } from "react";
import ProdutoCard from "../../components/ProdutoCard";
import type { TipoProduto } from "../../types/types";

export default function Produtos() {
  const [produtos, setProdutos] = useState<TipoProduto[]>([]);

  useEffect(() => {
    document.title = "Produtos";

    const carregaProdutos = async () => {
      try {
        const resposta = await fetch("http://localhost:3001/produtos");

        if (!resposta.ok) {
          throw new Error(
            `Erro na listagem de produtos: ${resposta.status} - ${resposta.statusText}`,
          );
        }

        const data: TipoProduto[] = await resposta.json();
        setProdutos(data);
      } catch (error) {
        console.error("Não foi possível carregar os produtos:", error);
      }
    };

    carregaProdutos();
  }, []);

  return (
    <main style={{ padding: "20px" }}>
      <h2>Produtos</h2>

      <div className="flex">
        {produtos.map((produto) => (
          <ProdutoCard key={produto.id} produto={produto} />
        ))}
      </div>

      {produtos.length === 0 && <p>Nenhum produto encontrado.</p>}
    </main>
  );
}