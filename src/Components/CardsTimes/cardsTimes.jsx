import './CardsTimes.css';

const CardsTimes = ({ imagem, nome, regiao, estado, titulos }) => {
  return (
    <div className="card">
      <img src={imagem} alt={nome} />
      
      <h3>{nome}</h3>
      
      <div className="card-info">
        <p><strong>Região:</strong> {regiao}</p>
        <p><strong>Estado:</strong> {estado}</p>
        <p><strong>Títulos:</strong> {titulos}</p>
      </div>
    </div>
  );
};

export default CardsTimes;