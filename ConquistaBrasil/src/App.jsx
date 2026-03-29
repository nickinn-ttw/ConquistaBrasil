import { useState } from 'react';
import Header from './Componentes/Header/Header.jsx';
import './App.css'; 

function App() {
  const [busca, setBusca] = useState('');

  return (
    <div className="app-dark-mode">
      <Header busca={busca} setBusca={setBusca} />

      {/* Abaixo do Header, depois vamos colocar a parte dos Filtros 
        e a Listagem (Galeria) dos times!
      */}
      <main className="conteudo-principal">
        <p>Você está pesquisando por: <strong>{busca || "Todos os times"}</strong></p>
      </main>
    </div>
  );
}

export default App;