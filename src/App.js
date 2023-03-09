
import './App.css';

function App() {
  const img = "https://www.tronalddump.io/img/tronalddump_850x850.png";
  return (
    <div className="App">
      <header className="App-header">
        <img src={img} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
