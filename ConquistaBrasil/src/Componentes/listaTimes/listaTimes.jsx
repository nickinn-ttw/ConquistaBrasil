import React from 'react';
import TimeCard from './TimeCard';
import { times } from './dados';

const ListaTimes = () => {
  return (
    <div className="lista-times">
      <div className="lista-times__header">
        <h2>🏆 Campeões Libertadores</h2>
        <p>Os maiores vencedores da América do Sul</p>
      </div>
      
      <div className="times-grid">
        {times.map((time) => (  
          <TimeCard
            key={time.id}
            id={time.id}
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