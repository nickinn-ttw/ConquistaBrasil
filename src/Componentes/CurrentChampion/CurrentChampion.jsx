import './CurrentChampion.css';
 
const CurrentChampion = () => {
  return (
    <div className="campeao-section">
      <div className="campeao-bg-text">CAMPEÃO</div>
 
      <div className="campeao-left">
        <p className="campeao-eyebrow">Atual Campeão Brasileiro</p>
        <h2 className="campeao-nome">Flamengo</h2>
        <p className="campeao-ano">Temporada 2025</p>
        <div className="campeao-badges">
          <span className="badge badge-regiao">Sudeste</span>
          <span className="badge badge-estado">Rio de Janeiro</span>
          <span className="badge badge-titulos">4 Títulos no Século</span>
        </div>
      </div>
 
      <div className="campeao-right">
        <div className="campeao-glow-ring" />
        <div className="campeao-glow-ring ring-2" />
        <img
          className="campeao-escudo"
          src="https://logodetimes.com/times/flamengo/logo-flamengo-4096.png"
          alt="Flamengo"
        />
        <div className="campeao-corona">👑</div>
      </div>
    </div>
  );
};
 
export default CurrentChampion;
 