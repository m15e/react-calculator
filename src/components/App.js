import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

function App() {
  return (
    <div className="App">
      <Display result="12" />
      <ButtonPanel />
    </div>
  );
}

export default App;
