import { useState } from 'react';
import './App.css';
import ListaTimes from './Components/ListaTimes/ListaTimes';
import BarraPesquisa from './Components/BarraPesquisa/BarraPesquisa';
import Filter from './Components/Filter/Filter';

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