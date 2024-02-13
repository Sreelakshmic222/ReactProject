import './App.css';
import SalesDetail from './SalesDetail';
import SalesEntry from './SalesEntry';

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#f0f0f0' }}>
      <h2><SalesEntry/></h2>
      <h2><SalesDetail/></h2>
    </div>
  );
}

export default App;
