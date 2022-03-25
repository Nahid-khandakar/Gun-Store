
import { useEffect, useState } from 'react';
import './App.css';
import Card from './component/Card/Card';
import Navbar from './component/Navbar/Navbar';
import Modal from 'react-modal';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


Modal.setAppElement('#root');

function App() {

  const [guns, setGuns] = useState([])
  const [cart, setCart] = useState([])
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  //console.log(guns)
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setGuns(data))
  }, [])


  const handelAddToCart = (gun) => {
    //console.log('clicked', gun)
    const newCart = [...cart, gun]
    setCart(newCart)
  }


  return (
    <div>
      <Navbar openModal={openModal} cart={cart} ></Navbar>

      {/* card .js data come from handelAddToCart and map it again */}

      {/* <div>
        {
          cart.map(item => <h1 key={item.id}>{item.name}</h1>)
        }
      </div> */}

      <div className='card-container'>
        {
          guns.map(gun => <Card
            gun={gun}
            handelAddToCart={handelAddToCart}
            key={gun.id}
          ></Card>)
        }
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>Close</button>

        <div>
          {
            cart.map(item =>
              <div item={item}>
                <h1 >{item.name}</h1>
                <p>{item.category}</p>
                <p>{item.price}</p>
              </div>
            )
          }
        </div>

      </Modal>

    </div>
  );
}

export default App;
