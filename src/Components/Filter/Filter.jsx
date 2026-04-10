import './Filter.css';

const Filter = ({ filtroRegiao, setFiltroRegiao }) => {
  return (
    <div className="filtros-container">
      <label htmlFor="regiao">Filtrar por Região: </label>
      
      <select 
        id="regiao"
        value={filtroRegiao} 
        onChange={(e) => setFiltroRegiao(e.target.value)}
      > 
        <option value="Todas">Todas as Regiões</option>
        <option value="Norte">Norte</option>
        <option value="Nordeste">Nordeste</option>
        <option value="Centro-Oeste">Centro-Oeste</option>
        <option value="Sudeste">Sudeste</option>
        <option value="Sul">Sul</option>
      </select>
    </div>
  );
};

export default Filter;