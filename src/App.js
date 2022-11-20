import './App.css';
import { data } from './components/data';
import Card from './components/Card';


function App() {

  return (
    <div className='container'>
      {data.map(item => <Card stylename={item.stylename} styleprice={item.styleprice} name={item.name} price={item.price} speed={item.speed} key={item.id} isSelected={item.isSelected} />
        )}
    </div>
  );
}

export default App;
