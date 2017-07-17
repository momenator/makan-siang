import * as React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={"http://icon-icons.com/icons2/547/PNG/512/1455554408_line-18_icon-icons.com_53298.png"} 
            className="App-logo" alt="logo" />
          <h2 style={{ color: 'white' }}>makan-siang</h2>
        </div>
        <p className="App-intro">
          login as <Link to="/orders">admin</Link> or as <Link to="/login">user</Link>
        </p>
      </div>
    );
  }
}

export default App;
