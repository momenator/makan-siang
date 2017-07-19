import * as React from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card';
// blueprint styles
import '../../styles/normalize.css';
import '../../styles/blueprint.css';

export default function Manage() {
    return (
        <div style={{ height: '100vh', display: 'flex', alignContent: 'center', justifyContent: 'space-around', flexDirection: 'column' }}>
            <div>
                <div style={{ margin: 30 }}>
                    <Link to="/orders" style={{ textDecoration: 'none' }}>
                        <Card title={'Manage Order'} description={'manage order disini'}/>
                    </Link>
                </div>
                <div style={{ margin: 30 }}>
                    <Link to="/menu" style={{ textDecoration: 'none' }}>
                        <Card title={'Manage Menu'} description={'ubah/atur menu disini'}/>
                    </Link>
                </div>
            </div>
        </div>
    );
}
