import './App.css';
import 'animate.css';
import { useState } from 'react';


function App() {

  const [animate, setAnimate] = useState(false)

  return (
    <div className="app">
      <div className='block1'>Блок1
        <button onClick={() => { setAnimate(!animate) }}>
          click
        </button>
        {
          animate ? "true" : "false"
        }
      </div>
      <div className='block2'>Блок2</div>
    </div>
  );
}

export default App;
