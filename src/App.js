
import './App.css';
import Card from './Card';

function App() {
  const img = "https://www.tronalddump.io/img/tronalddump_850x850.png";

  return (
    <div className="App">
      <header className="App-header">
        <h1>DAILY DUMPS</h1>
        <img src={img} className="App-logo" alt="logo" />
      </header>

      <main className="App-body">
        <Card />
        <Card />
        <Card />
      </main>

      <footer className="App-footer">
        <a href="https://www.tronalddump.io/" target="_blank">
        powered by tronald dump api
        </a>
      </footer>


    </div>
  );
}

export default App;
