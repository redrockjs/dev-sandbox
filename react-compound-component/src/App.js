import './App.css';
import Toggle from './toggle'

function App() {
  return (
    <div className="App">
      <Toggle onToggle={on => console.log(on)}>
        <Toggle.On>The button is on</Toggle.On>
        <Toggle.Off>The button is off</Toggle.Off>
        <Toggle.Button />
      </Toggle>
    </div>
  );
}

export default App;
