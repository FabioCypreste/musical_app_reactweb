import { useState } from 'react';
import HomeScreen from './telas/paginaInicial';
import DetailScreen from './screens/musicaisDetalhes';

export default function App() {
  const [musicalSelecionado, setMusicalSelecionado] = useState(null);

  return (
    <>
      {musicalSelecionado ? (
        <DetailScreen 
          musical={musicalSelecionado} 
          onBack={() => setMusicalSelecionado(null)} 
        />
      ) : (
        <HomeScreen 
          onSelectMusical={setMusicalSelecionado} 
        />
      )}
    </>
  );
}
