import { times } from "../../data.jsx";
import TeamCard from "../cardsTimes/TeamCard.jsx";

const TeamList = ({ search, regionFilter, titleFilter }) => {
  const teamsFiltered = times.filter((time) => {
    const searchTeam = time.nome.toLowerCase().includes(search.toLowerCase());
    const searchRegion = regionFilter.length === 0 || regionFilter.includes(time.regiao);
    const searchTitle = titleFilter === "Todos" || time.titulos.toString() === titleFilter;
    
    return searchTeam && searchRegion && searchTitle;
  });

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
