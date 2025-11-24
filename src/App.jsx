import { useState } from 'react';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';

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
