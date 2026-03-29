const TimeCard = (props) => {
  return (
    <div>
        <h3>{props.nome}</h3>
        <span>{props.ano}</span>
        <p>{props.regiao}</p>
        <p>{props.estado}</p>
        <p>{props.titulo}</p>
        <p>{props.imagem}</p>
    </div>
  



  );
};
export default TimeCard;