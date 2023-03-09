
import './App.css';
import Card from './Card';

function App() {
  const img = "https://www.tronalddump.io/img/tronalddump_850x850.png";

  return (
    <div className="App">
      <header className="App-header">
        <img src={img} className="App-logo" alt="logo" />

        <Card />
        <Card />
        <Card />
        
      </header>



    </div>
  );
}

export default App;
