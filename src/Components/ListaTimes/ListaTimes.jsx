import './ListaTimes.css';
import { times } from '../../data.jsx';
import CardsTimes from '../CardsTimes/CardsTimes.jsx';

const ListaTimes = ({ busca, filtroRegiao }) => {
  
  const timesFiltrados = times.filter((time) => {
    const buscaNome = time.nome.toLowerCase().includes(busca.toLowerCase());
    const buscaRegiao = filtroRegiao === "Todas" || time.regiao === filtroRegiao;
    return buscaNome && buscaRegiao;
  });

  const timesOrdenados = [...timesFiltrados].sort((a, b) => {
    return a.nome.localeCompare(b.nome);
  });

  return (
    <div className="lista-times">
      <div className="times-grid">
        {timesOrdenados.map((time) => (
          <CardsTimes 
            key={time.id}
            {...time}
          />
        ))}
      </div>

      {timesOrdenados.length === 0 && (
        <div className="erro-busca">
          <p>Nenhum time encontrado para essa busca.</p>
        </div>
      )}
    </div>
  );
};

export default ListaTimes;