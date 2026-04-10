const Filter = ({ filtroRegiao, setFiltroRegiao }) => {
  
  return (
    <div className="filtros-container">
      <label>Filtrar por Região: </label>
      <select> 
        value={filtroRegiao} 
        onChange={(e) => setFiltroRegiao(e.target.value)}
      
        <option value="Todas">Todas as Regiões</option>
        <option value="Sudeste">Sudeste</option>
        <option value="Sul">Sul</option>
        <option value="Nordeste">Nordeste</option>
        <option value="Centro-Oeste">Centro-Oeste</option>
      </select>
    </div>
  );
};

export default Filter;