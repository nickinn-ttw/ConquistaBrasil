const Header = ({ busca, setBusca }) => {
  return (
    <header className="header-container">
      <div className="logo-area">
        <h1>🏆 Campeões Brasileiros</h1>
        <span>2000 à 2025</span>
      </div>

      <div className="busca-area">
        <input
          type="text"
          placeholder="Pesquisar clube..."
          value={busca}
          onChange={(event) => setBusca(event.target.value)}
          className="input-busca"
        />
      </div>
    </header>
  );
};

export default Header;