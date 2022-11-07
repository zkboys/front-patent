import logo from './logo.svg';
import './App.css';

function App() {
    const active = true;
    return (
        <div className="App">
            <header className="App-header">
                <img r-code="ABC" src={logo} className="App-logo" alt="logo"/>
                <p className={['text', active && 'red']}>
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
