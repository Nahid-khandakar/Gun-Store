
import { useEffect, useState } from 'react';
import './App.css';
import Card from './component/Card/Card';
import Navbar from './component/Navbar/Navbar';

function App() {

  const [guns, setGuns] = useState([])

  //console.log(guns)
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setGuns(data))
  }, [])


  return (
    <div>
      <Navbar></Navbar>

      <div className='card-container'>
        {
          guns.map(gun => <Card
            gun={gun}
            key={gun.id}
          ></Card>)
        }
      </div>

    </div>
  );
}

export default App;
