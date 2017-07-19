import * as React from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card';
// blueprint styles
import '../../styles/normalize.css';
import '../../styles/blueprint.css';

const orders = [
    'makan siang 17 july 2017',
    'makan siang 13 july 2017',
    'makan siang 12 july 2017',
    'makan siang 11 july 2017',
    'makan siang 11 july 2017',
    'makan siang 10 july 2017',
    'makan siang 9 july 2017',
    'makan siang 8 july 2017',
    'makan siang 7 july 2017'
]

export default class Orders extends React.Component<{}, {}> {
    render() {
        return (
            <div style={{ padding: 20, display: 'flex', flexDirection: 'column', height: '100vh' }}>
                <h2> Order makan siang </h2>
                <hr />
                <div className="pt-control-group">
                    <div className="pt-input-group pt-fill">
                        <input className="pt-input" placeholder="Order baru" />
                    </div>
                    <button className="pt-button pt-intent-primary pt-icon-plus" />
                </div>
                <div style={{ flex: 1, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-around', overflowY: 'scroll' }}>
                    { orders.map(o => (
                        <Link to={`/order/${o}`} style={{ textDecoration: 'none' }}>
                            <div style={{ flex: 1 }}>
                                <Card title={o} description={o}/>
                            </div>
                        </Link>
                    )) }
                </div>
            </div>
        );
    }
}

