import { useState } from 'react';
import './App.css';
// import fobot from './assets/fobot.png';
import code2text from './assets/Code2Text.png';
import StripeContainer from './components/StripeContainer';

function App() {
  const [showItem, setShowItem] = useState(false);
  return (
    <div className='App'>
      <h1>Code2Text</h1>
      {showItem ? (
        <StripeContainer />
      ) : (
        <>
          <h3>$1.00</h3>
          <div style={{ textAlign: 'center' }}>
            <img src={code2text} alt='Logo' />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {/* <button onClick={() => setShowItem(true)}>Purchase Product</button> */}
            <button onClick={() => setShowItem(true)}>Purchase</button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
