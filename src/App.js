
import './App.css';
import Card from './Card';

function App() {
  const img = "https://www.tronalddump.io/img/tronalddump_850x850.png";

  return (
    <div className="App">
      <header className="App-header">
        <span>DAILY </span>
        <img src={img} className="App-logo" alt="logo" />
        <span> DUMPS</span>
      </header>

      <main className="App-body">
        <Card />
        <Card />
        <Card />
      </main>

        <div className="api">
          
        <br/>
        <a href="https://www.tronalddump.io/" target="_blank">
        powered by tronald dump api
        </a>

        <br/>
        <br/>

      </div>

      <footer className="App-footer">
        
        <a href="https://github.com/slothexpress/daily-dumps-api" target="_blank">
        source code
        </a>
      </footer>


    </div>
  );
}

export default App;
