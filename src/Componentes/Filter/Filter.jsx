const Filter = ({ filtroRegiao, setFiltroRegiao, filtroTitulo,  setFiltroTitulo}) => {

  const SearchRegion = (event) => {
    setFiltroRegiao(event.target.value);
  };

  const SearchTitle = (event) => {
    setFiltroTitulo(event.target.value);
  };

  return (
    <div className="filtros-container">
      <label>Filtrar por Região: </label>
      <select value={filtroRegiao} onChange={SearchRegion}>
        <option value="Todas">Todas as Regiões</option>
        <option value="Sudeste">Sudeste</option>
        <option value="Sul">Sul</option>
        <option value="Nordeste">Nordeste</option>
        <option value="Centro-Oeste">Centro-Oeste</option>
      </select>

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
  );
};

export default Filter;
