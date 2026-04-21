import { useState } from 'react';
import './App.css';

import SearchBarr from './Componentes/barraPesquisa/SearchBarr';
import Filter from './Componentes/Filter/Filter';
import TeamList from './Componentes/listaTimes/TeamList';

function App() {
  const [search, setSearch] = useState("");
  const [regionFilter, setRegionFilter] = useState([]);
  const [titleFilter, setTitleFilter] = useState("Todos")
  const [stateFilter, setStateFilter] = useState([]);
  const [decadeFilter, setDecadeFilter] = useState([]);
  const [yearFilter, setYearFilter] = useState("");

  return (
    <div className="App">
      <SearchBarr search={search} setSearch={setSearch} />

      <Filter
        regionFilter={regionFilter}
        setRegionFilter={setRegionFilter}

        titleFilter= {titleFilter}
        setTitleFilter= {setTitleFilter}

        stateFilter={stateFilter}
        setStateFilter={setStateFilter}

        decadeFilter={decadeFilter}
        setDecadeFilter={setDecadeFilter}

        yearFilter={yearFilter}
        setYearFilter={setYearFilter}
       />

      <TeamList
      search = {search} 
      regionFilter = {regionFilter} 
      titleFilter = {titleFilter}
      stateFilter={stateFilter}
      decadeFilter={decadeFilter}
      yearFilter={yearFilter}
      
      />
    </div>
  );
}

export default App;