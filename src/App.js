import { useState } from 'react';
import ItemList from './components/itemList';
import Hamburger from './components/hamburger';
import { mockData } from './mock';

function App() {
  const [hamburger, setHambuger] = useState([]);
  console.log(hamburger);
  return (
    <div className="App">
      <h1>Burger Build</h1>
      <Hamburger hamburger={hamburger}/>
      <ItemList mockData={mockData} hamburger={hamburger} setHambuger={setHambuger}/>
    </div>
  );
}

export default App;
