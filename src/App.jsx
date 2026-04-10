import ListaTimes from './Componentes/listaTimes/listaTimes';
import './App.css';
import BarraPesquisa from './Componentes/barraPesquisa/barraPesquisa';
import { useState } from 'react';
import Filter from './Componentes/Filter/Filter';

function App() {
  const [busca, setBusca] = useState("")
  const [filtroRegiao, setFiltroRegiao] = useState("Todas");

  return (
    <div className="App">
      <BarraPesquisa busca = {busca} setBusca = {setBusca}/>

      <Filter
        filtroRegiao={filtroRegiao} 
        setFiltroRegiao={setFiltroRegiao} 
      />

      <ListaTimes busca = {busca} filtroRegiao = {filtroRegiao}/>
    </div>
  );
}

export default App;