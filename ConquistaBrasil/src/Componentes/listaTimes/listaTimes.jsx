import TimeCard from '../cardsTimes/cardsTimes.jsx'; 
import  { times }  from '../../data.jsx';

const ListaTimes = () => {
  return (
    <div className="lista-times">
      <div className="lista-times__header">
        <h2>🏆 História em taças 🏆</h2>
        <p>Os Campeões Brasileiros Do Século XXI </p>
      </div>
      
      <div className="times-grid">
        {times.map((time) => (  
          <TimeCard
            key={time.id}
            nome={time.nome}
            regiao={time.regiao}
            estado={time.estado}
            titulos={time.titulos}
            imagem={time.imagem}
          />
        ))}
      </div>
    </div>
  );
};

export default ListaTimes;