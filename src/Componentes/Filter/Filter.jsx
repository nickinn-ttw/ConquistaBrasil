const Filter = ({ regionFilter, setRegionFilter, titleFilter, setTitleFilter }) => {

  const addRegion = (event) => {
    const chosenRegion = event.target.value;

    if (chosenRegion === "Todas") {
      setRegionFilter([]); 
    } 
    else if (!regionFilter.includes(chosenRegion)) {
      setRegionFilter([...regionFilter, chosenRegion]); 
    }
  };

  const removeRegion = (regionToRemove) => {
    setRegionFilter(regionFilter.filter((region) => region !== regionToRemove));
  };

  const searchTitle = (event) => {
    setTitleFilter(event.target.value);
  };

  return (
    <div className="filtros-container">
      
       <div className="grupo-select-tags">
        <label>Filtrar por Região: </label>
        <select value="" onChange={addRegion}>
          <option value="" disabled>Selecione para adicionar..</option>
          <option value="Todas">Todas as Regiões</option>
          <option value="Sudeste">Sudeste</option>
          <option value="Sul">Sul</option>
          <option value="Nordeste">Nordeste</option>
          <option value="Centro-Oeste">Centro-Oeste</option>
        </select>
      </div>

      <div className="area-tags">
          {regionFilter.map((selectRegion, index) => (
            <span key={index} className="tag-regiao">
              {selectRegion} 
                <button onClick={() => removeRegion(selectRegion)}>X</button>
            </span>
          ))}
        </div>

       <div className="grupo-select-tags">
        <label>Quantidade de vezes Campeão:</label>
        <select value={titleFilter} onChange={searchTitle}>
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