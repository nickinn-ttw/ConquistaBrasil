const SearchBarr = ({ search, setSearch }) => {

  const typeSearch = (event) =>{
    setSearch(event.target.value)
  }
  return (
    <header className="header-container">
      <div className="logo-area">
        <h1>🏆 Campeões Brasileiros</h1>
        <span>2000 à 2025</span>
      </div>
      
      <div className="busca-area">
        <input className="input-busca"
          type="text"
          placeholder="Pesquisar clube..."
          value={search}
          onChange= {typeSearch}
        />
      </div>
    </header>
  );
};

export default SearchBarr;