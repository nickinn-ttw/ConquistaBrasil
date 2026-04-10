import { times } from '../../data.jsx';
import CardsTimes from '../CardsTimes/CardsTimes.jsx'; 

const ListaTimes = ({ busca, filtroRegiao }) => {
  const timesFiltrados = times.filter((time) => {
    const BuscaTime = time.nome.toLowerCase().includes(busca.toLowerCase());
    const BuscaRegiao = filtroRegiao === "Todas" || time.regiao === filtroRegiao;
    return BuscaTime && BuscaRegiao;
  });

  return (
    <div className="lista-times">
      <div className="times-grid">
        <div>
          <h2>🏆 História em taças 🏆</h2>
          <p>Os Campeões Brasileiros Do Século XXI</p>
        </div>
      </div>

      <div className="times-grid">
        {timesFiltrados.map((time) => (
          <CardsTimes 
            key={time.id}
            nome={time.nome}
            regiao={time.regiao}
            estado={time.estado}
            titulos={time.titulos}
            imagem={time.imagem}
          />
        ))}
      </div>

      {timesFiltrados.length === 0 && (
        <p>Nenhum time encontrado para essa busca.</p>
      )}
    </div>
  );
};

export default ListaTimes;