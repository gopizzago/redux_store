import logo from './logo.png';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import {inc, dec} from './reducers/counterReducer';

function App() {
  const countNumber = useSelector(state=>state.counter.value);
  console.log(countNumber);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span>{countNumber}</span>
          <button className='app-btn' onClick={()=>dispatch(inc())}>+</button>
          <button className='app-btn' onClick={()=>dispatch(dec())}>-</button>
        <p>
          Sometimes removing negative people of your life makes room for better people.
        </p>
       </header>
      
    </div>
  );
}

export default App;
