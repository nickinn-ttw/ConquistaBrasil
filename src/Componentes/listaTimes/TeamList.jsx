import { times } from "../../data.jsx";
import TeamCard from "../cardsTimes/TeamCard.jsx";
import './TeamList.css';
 
const TeamList = ({ search, regionFilter, titleFilter, stateFilter, decadeFilter, yearFilter, ordenar }) => {
 
  const teamsFiltered = times.filter((time) => {
    const searchTeam   = time.nome.toLowerCase().includes(search.toLowerCase());
    const searchRegion = regionFilter.length === 0 || regionFilter.includes(time.regiao);
    const searchTitle  = titleFilter === "Todos" || time.titulos.toString() === titleFilter;
    const searchState  = stateFilter.length === 0 || stateFilter.includes(time.estado);
    const searchDecade = decadeFilter.length === 0 || decadeFilter.some((d) => time.decadas.includes(d));
    const searchYear   = yearFilter === "" || !yearFilter || time.anoConquista.includes(yearFilter);
    return searchTeam && searchRegion && searchTitle && searchState && searchDecade && searchYear;
  });
 
  const teamsOrdenados = [...teamsFiltered].sort((a, b) => {
    switch (ordenar) {
      case "az":
        return a.nome.localeCompare(b.nome);
      case "za":
        return b.nome.localeCompare(a.nome);
      case "recenteMais":
        return Math.max(...b.anoConquista.map(Number)) - Math.max(...a.anoConquista.map(Number));
      case "recenteMenos":
        return Math.min(...a.anoConquista.map(Number)) - Math.min(...b.anoConquista.map(Number));
      case "titulosMais":
        return b.titulos - a.titulos;
      case "titulosMenos":
        return a.titulos - b.titulos;
      default:
        return b.titulos - a.titulos;
      case "favoritador":
        return a.favorite - b.favorite;
    
    }
  });
 
  return (
    <div className="lista-times">
      <h2>Historia em tacas</h2>
      <p>Os Campeoes Brasileiros Do Seculo XXI</p>
 
      <div className="times-grid">
        {teamsOrdenados.map((time) => (
          <TeamCard
            key={time.id}
            nome={time.nome}
            regiao={time.regiao}
            estado={time.estado}
            titulos={time.titulos}
            imagem={time.imagem}
          />
        ))}
      </div>
 
      {teamsOrdenados.length === 0 && (
        <p>Nenhum time encontrado para essa busca.</p>
      )}
    </div>
  );
};
 
export default TeamList;