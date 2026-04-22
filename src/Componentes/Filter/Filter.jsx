import './Filter.css';

const Filter = (
  { regionFilter, setRegionFilter, titleFilter, setTitleFilter, stateFilter, setStateFilter, decadeFilter,setDecadeFilter, yearFilter, setYearFilter }) => {

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

  const addState = (event) => {
    const chosenState = event.target.value;
    if (chosenState === "Todos") {
      setStateFilter([]);
    } 
    else if (!stateFilter.includes(chosenState)) {
      setStateFilter([...stateFilter, chosenState]);
    }
    event.target.value = "";
  };  

   const removeState = (stateToRemove) => {
    setStateFilter(stateFilter.filter((state) => state !== stateToRemove));
  };

   const addDecade = (event) => {
    const chosenDecade = event.target.value;
    if (chosenDecade === "Todas") {
      setDecadeFilter([]);
    } 
    else if (!decadeFilter.includes(chosenDecade)) {
      setDecadeFilter([...decadeFilter, chosenDecade]);
    }
    event.target.value = "";
  };

   const removeDecade = (decadeToRemove) => {
    setDecadeFilter(decadeFilter.filter((decade) => decade !== decadeToRemove));
  };

   const searchYear = (event) => {
    setYearFilter(event.target.value);
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
      
      <div className="grupo-filtro">
        <label>Estado:</label>
        <select onChange={addState}>
          <option value="" disabled>Estado..</option>
          <option value="Todos">Todos</option>
          <option value="SP">SP</option>
          <option value="RJ">RJ</option>
          <option value="MG">MG</option>
          <option value="PR">PR</option>
        </select>

        <div className="area-tags">
          {stateFilter?.map((state) => (
            <span key={state} className="tag tag-estado">
              {state} <button onClick={() => removeState(state)}>×</button>
            </span>
          ))}
        </div>

      </div>
    
     <div className="grupo-filtro">
        <label>Década:</label>
        <select onChange={addDecade}>
          <option value="" disabled>Década..</option>
          <option value="Todas">Todas</option>
          <option value="2000s">00s</option>
          <option value="2010s">10s</option>
          <option value="2020s">20s</option>
        </select>

        <div className="area-tags">
          {decadeFilter?.map((decade) => (
            <span key={decade} className="tag tag-decada">
              {decade} <button onClick={() => removeDecade(decade)}>×</button>
            </span>
          ))}
        </div>
        
      </div>
    
      <div className="grupo-filtro">
        <label>Ano:</label>
        <select value={yearFilter || ""} onChange={searchYear}>
          <option value="">Todos</option>
          <option value="2000">2000</option>
          <option value="2001">2001</option>
          <option value="2002">2002</option>
          <option value="2003">2003</option>
          <option value="2004">2004</option>
          <option value="2005">2005</option>
          <option value="2006">2006</option>
          <option value="2007">2007</option>
          <option value="2008">2008</option>
          <option value="2009">2009</option>
          <option value="2010">2010</option>
          <option value="2011">2011</option>
          <option value="2012">2012</option>
          <option value="2013">2013</option>
          <option value="2014">2014</option>
          <option value="2015">2015</option>
          <option value="2016">2016</option>
          <option value="2017">2017</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
        </select>
      </div>    

    </div>
  );
};

export default Filter;