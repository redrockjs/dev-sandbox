import React, { useState } from "react";
import { getEnvironmentData } from "worker_threads";
import "./App.css";

const handleInput = (e: any) => {
  console.log(e.target.value);
};

type CheckboxProps = {
  label: string;
  getData: (data: boolean) => void;
};

const Checkbox = ({ label, getData }: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      <div className="checkbox-wrapper">
        <label>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => {
              setIsChecked((prev) => !prev);
              getData(isChecked);
            }}
          />
          {label}
        </label>
        <p>{isChecked ? "Selected" : "Unchecked"}</p>
      </div>
    </>
  );
};

function App() {
  const [state, setState] = useState<boolean>();

  const getData = (data: boolean) => {
    setState(data);
    console.log(state);
  };

  return (
    <div className="App">
      <main className="main">
        <Checkbox label="checkbox" getData={getData} />
      </main>
    </div>
  );
}

export default App;
