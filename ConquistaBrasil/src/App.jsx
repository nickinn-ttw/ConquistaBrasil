import { times } from './data'; 
import { Card } from './Componentes/cardsTimes/cardsTimes.jsx';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>História em Taças</h1>
      
      <div className="lista-times">
        {times.map((time) => (
          <Card key={time.id} item={time} />
        ))}
      </div>
    </div>
  );
}

export default App;