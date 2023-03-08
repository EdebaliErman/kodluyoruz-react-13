
import { useEffect, useState } from 'react';
import './App.css';
import Palette from './component/Palette';
import { init, subscribe } from './socketApi'

function App() {

  const [activeColor, setActiveColor] = useState('#443c3c')

  useEffect(() => {
    init()
    subscribe(color => {
      setActiveColor(color)
    })
  }, [])

  return (
    <div className="App" style={{ backgroundColor: activeColor }}>
      <h1>{activeColor}</h1>
      <Palette activeColor={activeColor} />
    </div>
  );
}

export default App;
