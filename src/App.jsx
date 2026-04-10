import { useState } from 'react';
import './App.css';

import BarraPesquisa from './Components/BarraPesquisa/BarraPesquisa';
import Filter from './Components/Filter/Filter';
import ListaTimes from './Components/ListaTimes/ListaTimes';

function App() {
  const [busca, setBusca] = useState("");
  const [filtroRegiao, setFiltroRegiao] = useState("Todas");

  return (
    <div className="App">
      <BarraPesquisa busca={busca} setBusca={setBusca} />

      <Filter
        filtroRegiao={filtroRegiao}
        setFiltroRegiao={setFiltroRegiao}
      />

      <ListaTimes busca={busca} filtroRegiao={filtroRegiao} />
    </div>
  );
}

export default App;