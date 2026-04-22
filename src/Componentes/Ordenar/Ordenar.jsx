import './Ordenar.css';

const Ordenar = ({ ordenar, setOrdenar }) => {
  const opcoes = [
    { value: "az",           label: "A → Z"        },
    { value: "za",           label: "Z → A"        },
    { value: "recenteMais",  label: "Mais Recente"  },
    { value: "recenteMenos", label: "Menos Recente" },
    { value: "titulosMais",  label: "Mais Titulos"  },
    { value: "titulosMenos", label: "Menos Titulos" },
  ];

  return (
    <div className="ordenar-container">
      <span className="ordenar-label">Ordenar por</span>
      <div className="ordenar-opcoes">
        {opcoes.map((op) => (
          <button
            key={op.value}
            className={`ordenar-btn ${ordenar === op.value ? "ativo" : ""}`}
            onClick={() => setOrdenar(op.value)}
          >
            {op.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Ordenar;