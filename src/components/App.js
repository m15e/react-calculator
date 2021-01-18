import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
// Line below is commented out as it is a project requirement that throws a linter error
// import calculate from '../logic/calculate';

function App() {
  return (
    <>
      <Display result="12" />
      <ButtonPanel />
    </>
  );
}

export default App;
