import { useState } from 'react';
import './App.css';
// import fobot from './assets/fobot.png';
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
          <h2>$5.00</h2>
          <div style={{ textAlign: 'center' }}>
            <img src={code2text} alt='Logo' />
          </div>
          {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button onClick={() => setShowItem(true)}>Purchase</button>
          </div> */}
          <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            <button onClick={() => setShowItem(true)}>Purchase</button>
            <a href="https://www.virustotal.com/gui/file/bdbb6e2e45fe403809ff028af123d2a27564c6c3951930b80b5b756e17df92ff/detection" target="_blank" rel="noopener noreferrer" style={{ marginTop: '20px', textAlign: 'center', color: 'black', fontWeight: 'bold', fontSize: "14px" }}>
              {/* , textDecoration: "none" }}> */}
              Security Report
            </a>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
