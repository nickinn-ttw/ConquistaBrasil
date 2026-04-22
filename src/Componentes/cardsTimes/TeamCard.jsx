import './TeamCard.css';

const TeamCard = (props) => {
  return (
    <div className="card">
      <img src={props.imagem} alt={props.nome} style={{ width: '100px' }} />
      <h3>{props.nome}</h3>
      <p>Região: {props.regiao}</p>
      <p>Estado: {props.estado}</p>
      <p>Títulos: {props.titulos}</p>
    </div>
  );
};

export default TeamCard