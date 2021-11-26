import { useState, useEffect } from 'react';
import './App.css';
import Modal from './components/Modal';

function App() {
  const [modalShown, setModalShown] = useState(false)

  useEffect(() => {
    return () => {
      setModalShown(false)
    }
  }, [])

  const showModal = () => {
    setModalShown(true)
  }

  const hideModal = () => {
    setModalShown(false)
  }

  return (
    <div className="App">
      <p>Modal button</p>
      <Modal show={modalShown} handleClose={hideModal}>
          <p>Modal</p>
        </Modal>
      <button onClick={showModal}>Show</button>
    </div>
  );
}

export default App;
