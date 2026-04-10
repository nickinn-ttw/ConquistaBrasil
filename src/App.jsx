import { useState } from 'react';
import './App.css';

import BarraPesquisa from './Componentes/barraPesquisa/barraPesquisa';
import Filter from './Componentes/Filter/Filter';
import ListaTimes from './Componentes/listaTimes/listaTimes';

function App() {
  const [busca, setBusca] = useState("");
  const [filtroRegiao, setFiltroRegiao] = useState("Todas");
  const [filtroTitulo, setFiltroTitulo] = useState("Todos")

  return (
    <div className="App">
      <BarraPesquisa busca={busca} setBusca={setBusca} />

      <Filter
        filtroRegiao={filtroRegiao}
        setFiltroRegiao={setFiltroRegiao}

        filtroTitulo = {filtroTitulo}
        setFiltroTitulo= {setFiltroTitulo}

       />

      <ListaTimes 
      busca = {busca} 
      filtroRegiao = {filtroRegiao} 
      filtroTitulo = {filtroTitulo}
      
      />
    </div>
  );
}

export default App;