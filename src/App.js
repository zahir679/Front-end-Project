import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [modalShown, setModalShown] = useState(null)

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
      <button onClick={showModal}>Show</button>
    </div>
  );
}

export default App;
