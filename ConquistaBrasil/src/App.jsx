import ListaTimes from './Componentes/listaTimes/listaTimes';
import './App.css';
import BarraPesquisa from './Componentes/barraPesquisa/barraPesquisa';
import { useState } from 'react';

function App() {
  const [busca, setBusca] = useState("")

  return (
    <div className="App">
      <BarraPesquisa busca = {busca} setBusca = {setBusca}/>
      <ListaTimes />
    </div>
  );
}

export default App;