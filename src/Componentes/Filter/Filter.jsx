const Filter = ({ filtroRegiao, setFiltroRegiao, filtroTitulo,  setFiltroTitulo}) => {

const AddRegion = (event) =>{
  const ChosenRegion = event.target.value

  if (ChosenRegion === "Todas") {
      setFiltroRegiao([]);
    } 
    else if (!filtroRegiao.includes(ChosenRegion)) {
      setFiltroRegiao([...filtroRegiao, ChosenRegion]);
    }
}

const RemoveRegion = (RegionToRemove) => {
    setFiltroRegiao(filtroRegiao.filter((regiao) => regiao !== RegionToRemove));
  };

  const SearchTitle = (event) => {
    setFiltroTitulo(event.target.value);
  };

  return (
    <div className="filtros-container">
       <div className="grupo-select-tags">
      <label>Filtrar por Região: </label>
      <select value = "" onChange={AddRegion}>
        <option value="" disabled>Selecione para adicionar..</option>
        <option value="Todas">Todas as Regiões</option>
        <option value="Sudeste">Sudeste</option>
        <option value="Sul">Sul</option>
        <option value="Nordeste">Nordeste</option>
        <option value="Centro-Oeste">Centro-Oeste</option>
      </select>
      </div>

      <div className="area-tags">
          {filtroRegiao.map((regiaoSelecionada, index) => (
            <span key={index} className="tag-regiao">
              {regiaoSelecionada} 
                <button onClick={() => RemoveRegion(regiaoSelecionada)}>X</button>
            </span>
          ))}
        </div>

       <div className="grupo-select-tags">
      <label>Quantidade de vezes Campeão:</label>
      <select value={filtroTitulo} onChange={SearchTitle}>
        <option value="Todos">Todos</option>
        <option value="1">Único</option>
        <option value="2">Bi-Campeão</option>
        <option value="3">Tri-Campeão</option>
        <option value="4">Tetra-Campeão</option>
        <option value="5">Penta-Campeão</option>
      </select>
      </div>
      
    </div>
  );
};

export default Filter;
