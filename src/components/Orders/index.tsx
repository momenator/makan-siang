import * as React from 'react';
import { Link } from 'react-router-dom';

class Orders extends React.Component<any, any> {
    render() {
        return (<div style={{ padding: 20 }}>
            <h2> Order makan siang </h2>
            <hr />
            <div className="pt-control-group">
                <div className="pt-input-group pt-fill">
                    <input className="pt-input" placeholder="Order baru" />
                </div>
                <button className="pt-button pt-intent-primary pt-icon-plus" />
            </div>

            <ul>
                <li><Link to="/order/makan siang 13 july 2017">makan siang 13 july 2017</Link></li>
                <li><Link to="/order/makan siang 12 july 2017">makan siang 12 july 2017</Link></li>
                <li><Link to="/order/makan siang 11 july 2017">makan siang 11 july 2017</Link></li>
            </ul>
        </div>);
    }
}

export default Orders;
