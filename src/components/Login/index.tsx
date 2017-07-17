import * as React from 'react';
import { Link } from 'react-router-dom';

// blueprint styles
import '../../styles/normalize.css';
import '../../styles/blueprint.css';

export default function Login() {
  return (
    <div style={{height: '100vh', width: '100vw', backgroundColor: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
      <div className="pt-control-group pt-vertical" style= {{width: '360px'}}>
        <label className="pt-label" style={{ textAlign: 'center' }}>
          <h1>Login</h1>
        </label>
        <div className="pt-input-group pt-large">
          <span className="pt-icon pt-icon-person"></span>
          <input type="text" className="pt-input" placeholder="Username" />
        </div>
        <div className="pt-input-group pt-large">
          <span className="pt-icon pt-icon-lock"></span>
          <input type="password" className="pt-input" placeholder="Password" />
        </div>
        <button className="pt-button pt-large pt-intent-primary"><Link to="/user/dwi" style={{ color: 'white', textDecoration: 'none' }}>Login</Link></button>
      </div>
    </div>
  );
}
