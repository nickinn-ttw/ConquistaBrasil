import './BarraPesquisa.css';

const BarraPesquisa = ({ busca, setBusca }) => {
  
  // Função que captura o valor digitado e atualiza o estado global
  const aoDigitar = (event) => {
    setBusca(event.target.value);
  };

  return (
    <div className="search-header">
      

      <div className="logo-area">
        <h1>
          <span className="emoji">🏆</span> 
          História em taças 
          <span className="emoji">🏆</span>
        </h1>
        <p className="subtitle">Os Campeões Brasileiros Do Século XXI (2000 à 2025)</p>
      </div>
      
      <div className="busca-area">
        <input
          type="text"
          placeholder="Pesquisar clube..."
          value={busca}
          onChange={aoDigitar}
        />
      </div>
    </div>
  );
};

export default BarraPesquisa;