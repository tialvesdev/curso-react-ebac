import './App.css';
import Calculator from './component/calculator/Calculator';

function App() {
  
  const op = ["+", "-", "*", "x", "X", "/"];

  return (
    <div className='wrapper'>
      <Calculator op={op}/>
    </div>
  );
}

export default App;
