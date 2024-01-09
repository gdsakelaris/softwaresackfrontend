import { useState } from 'react';
import './App.css';
import code2text from './assets/Code2Text.png';
import StripeContainer from './components/StripeContainer';

function App() {
  const [showItem, setShowItem] = useState(false);
  return (
    <div className='App'>
      <h1 style={{ color: "#1a669a" }}>Code2Text.exe</h1>
      {showItem ? (
        <StripeContainer />
      ) : (
        <>
          <h2>$1.00</h2>
          <div style={{ textAlign: 'center' }}>
            <img src={code2text} alt='Logo' />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            <button onClick={() => setShowItem(true)}>Purchase</button>
          </div>
        </>
      )}
      <div className="App-footer">
        <p>© 2023 Telescode LLC. All rights reserved.</p>
      </div>
    </div>
  );
}

export default App;
