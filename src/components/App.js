import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

function App() {
  return (
    <>
      <Display result="12" />
      <ButtonPanel />
    </>
  );
}

export default App;
