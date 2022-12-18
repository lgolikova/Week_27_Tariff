import './App.css';
import { data } from './components/data';
import Card from './components/Card';
import React, { useState } from "react";


function App() {
  const [selected, setSelected] = useState(false);
  return (
    <div className='container'>
      {data.map((item, i) => <Card stylename={item.stylename} styleprice={item.styleprice} name={item.name} price={item.price} speed={item.speed} key={item.id} selected={selected === i}
            onClick={() => setSelected(i)} />
        )}
    </div>
  );
}

export default App;
