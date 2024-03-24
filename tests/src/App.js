import logo from './logo.svg';
import './App.css';
import useCheatCode from 'react-cheat-codes';

function App() {
  useCheatCode('test', () => {
    console.log('test');
  });

  useCheatCode('dev', () => {
    console.log('dev');
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
