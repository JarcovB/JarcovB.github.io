import './App.css';
import Message from './components/Message';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 >My Website</h1>
      <Message />
        <p><button className="btn btn-success">Klik mij</button></p>
      </header>
    </div>
  );
}

export default App;
