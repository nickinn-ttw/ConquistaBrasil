import { times } from "../../data.jsx";
import TeamCard from "../cardsTimes/TeamCard.jsx";

const TeamList = ({ search, regionFilter, titleFilter, stateFilter, decadeFilter, yearFilter }) => {
  const teamsFiltered = times.filter((time) => {
    const searchTeam = time.nome.toLowerCase().includes(search.toLowerCase());
    const searchRegion = regionFilter.length === 0 || regionFilter.includes(time.regiao);
    const searchTitle = titleFilter === "Todos" || time.titulos.toString() === titleFilter;
    const searchState = stateFilter.length === 0 || stateFilter.includes(time.estado);
    const searchDecade = decadeFilter.length === 0 || decadeFilter.some((chosenDecade) => time.decadas.includes(chosenDecade));
    const searchYear = yearFilter === "" || !yearFilter || time.anoConquista.includes(yearFilter);
  
  return searchTeam && searchRegion && searchTitle && searchState && searchDecade && searchYear;
});
  
const getDecade = (ano) => {
  return `${Math.floor(ano / 10)}0s`;
};

  return (
    <div className="lista-times">
      <h2>🏆 História em taças 🏆</h2>
      <p>Os Campeões Brasileiros Do Século XXI </p>

      <div className="times-grid">
        {teamsFiltered.map((time) => (
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
      {teamsFiltered.length === 0 && (
        <p>Nenhum time encontrado para essa busca.</p>
      )}
    </div>
  );
};

export default TeamList
