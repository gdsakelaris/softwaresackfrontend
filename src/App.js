import { useState } from 'react';
import './App.css';
import fobot from './assets/fobot.png';
import StripeContainer from './components/StripeContainer';

function App() {
  const [showItem, setShowItem] = useState(false);
  return (
    <div className='App'>
      <h1>FOBOT</h1>
      {showItem ? (
        <StripeContainer />
      ) : (
        <>
          <h3>$1.00</h3>
          <div style={{ textAlign: 'center' }}>
            <img src={fobot} alt='Fobot' />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button onClick={() => setShowItem(true)}>Purchase Product</button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;