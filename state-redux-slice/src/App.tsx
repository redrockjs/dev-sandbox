import React from 'react';
import s from './App.module.css';
import {useDispatch, useSelector} from "react-redux";
import {CounterType, increment, decrement, clear} from "./store/toolkitSlice";

function App() {

  const count = useSelector(state => state)
  const dispatch = useDispatch()

  console.log(count)

  const handlePlus = () => {
    dispatch(increment())
  }
  const handleMinus = () => {
    dispatch(decrement())
  }
  const handleClear = () => {
    dispatch(clear())
  }

  return (
    <div className="App">
      <main className={s.main}>
        <div className={s.mainHeader}>
          <h1>REDUX ToolkitSlice</h1>
        </div>
        <div className={s.mainControls}>
          <button onClick={handlePlus}>+</button>
          <button onClick={handleMinus}>-</button>
          <button onClick={handleClear}>Clear</button>
        </div>
        <div className={s.mainValue}>
          Value <>{count}</>
        </div>
      </main>
    </div>
  );
}

export default App;
