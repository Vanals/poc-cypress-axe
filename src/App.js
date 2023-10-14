import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <main className="App">
      <header className="App-header">
        <h1>Accessibility</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a 
          data-testid="learn-react-link"
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </main>
  );
}

export default App;
