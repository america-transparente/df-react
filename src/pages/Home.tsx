import { Suspense, lazy, useState } from "react";
import atLogo from "../assets/at_logo.webp";
const Results = lazy(() => import("../components/Results"));
import { SearchBar } from "@america-transparente/ui/search";
import { Header } from "@america-transparente/ui/core";

function Home() {
  const [searchedQuery, setSearchedQuery] = useState("");

  return (
    <>
      <Header
        title="Dueños Directos"
        imagePath={atLogo}
        description="Dueños Directos es un buscador 
    de documentos del Diario Oficial
    de Chile, que permite rápidamente
    buscar entre miles de constituciones
    y otros archivos legales de 
    organizaciones."
      />
      <main className="text-font font mx-auto max-w-6xl space-y-4 px-4 py-4">
        <SearchBar
          placeholder="Buscar"
          captureSearchedQuery={setSearchedQuery}
        />
        {searchedQuery ? (
          <Suspense fallback={<p className="text-center">Cargando...</p>}>
            <Results />
          </Suspense>
        ) : (
          <p className="py-16 text-center text-lg font-bold">
            Para hacer búsquedas exactas, rodea tu consulta en comillas dobles
            (Ej: &quot;Sebastián Piñera&quot;)
          </p>
        )}
      </main>
    </>
  );
}

export default Home;
