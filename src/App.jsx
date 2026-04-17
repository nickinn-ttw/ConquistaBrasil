import { useState } from 'react';
import './App.css';

import SearchBarr from './Componentes/barraPesquisa/SearchBarr';
import Filter from './Componentes/Filter/Filter';
import TeamList from './Componentes/listaTimes/TeamList';

function App() {
  const [search, setSearch] = useState("");
  const [regionFilter, setRegionFilter] = useState([]);
  const [titleFilter, setTitleFilter] = useState("Todos")

  return (
    <div className="App">
      <SearchBarr search={search} setSearch={setSearch} />

      <Filter
        regionFilter={regionFilter}
        setRegionFilter={setRegionFilter}

        titleFilter= {titleFilter}
        setTitleFilter= {setTitleFilter}

       />

      <TeamList
      search = {search} 
      regionFilter = {regionFilter} 
      titleFilter = {titleFilter}
      
      />
    </div>
  );
}

export default App;