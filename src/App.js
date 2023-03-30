import {useRef} from 'react';
import { useEffect, useState } from 'react';
import './App.css';



function App() {
  const windowWidth = useRef(window.innerWidth);
  // const windowHeight = useRef(window.innerHeight);

  console.log('width: ', windowWidth.current);
  // console.log('height: ', windowHeight.current);

  const [width, setWidth] = useState("ok");

  useEffect( ()=> {
    handleSubmit();
  });

  const handleSubmit = () => {
    setWidth(windowWidth.current);
  }
  return (
    <div className="wrapper">
      <form onChange={handleSubmit}>
        <label>
          Window Size:
          <input type="number" value={width} readOnly={true} ></input>
        </label>
      </form>
    </div>
  );
}

export default App;
