import { Layout } from "./components/Layout";
import type { Tema } from "./types/types";

export default function App() {
  const tema: Tema = "light";

  return <Layout tema={tema} />;
}