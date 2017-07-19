import * as React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const makanSiangLogo = require('./resources/images/table.png');
const orderLogo = require('./resources/images/order.png');
const manageLogo = require('./resources/images/apron.png');
const linkStyle = { textDecoration: 'none' };

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="App">
        <div className="App-section">
          <div>
            <img src={makanSiangLogo} className="App-logo" alt="logo" />
            <h2 className="App-section-text">Makan Siang</h2>
          </div>
        </div>
        <div className="App-section">
          <Link to="/login" style={linkStyle}>
            <img src={orderLogo} className="App-logo" alt="logo" />
            <h2 className="App-section-text">Pesan Makanan</h2>
          </Link>
        </div>
        <div className="App-section">
          <Link to="/manage" style={linkStyle}>
            <img src={manageLogo} className="App-logo" alt="logo" />
            <h2 className="App-section-text" >Pengaturan</h2>
          </Link>
        </div>
      </div>
    );
  }
}

export default App;
