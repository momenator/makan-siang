import * as React from 'react';
import { Collapse } from '@blueprintjs/core';

// blueprint styles
import '../../styles/normalize.css';
import '../../styles/blueprint.css';

type Order = { name: string, foods: string[], isOpen: boolean };
type Orders = Order[];

const menu = ['nasi rendang', 'telor', 'nasi liwet', 'ayam chicken', 'soto ayam', 'tahu', 'tempe', 'telor'];

export default class User extends React.Component<{ match: { params: { user: string } } }, { orders: Orders }> {
  constructor() {
    super();
    this.state = {
      orders: [
        { name: 'makan siang 17th juli 2017', foods: [], isOpen: false },
        { name: 'makan siang 13th juli 2017', foods: ['nasi rendang'], isOpen: false },
        { name: 'makan siang 12 juli 2017', foods: ['nasi goreng', 'telor', 'whatever'], isOpen: false }
      ],
    };
  }

  handleToggleUserOrder = (name: string) => {
    this.setState(prevState => {
      const newOrders = prevState.orders.map(o => {
        if (o.name === name) return { ...o, isOpen: !o.isOpen };
        return o;
      });
      return { orders: newOrders };
    })
  }

  handleAddFood = (name: string, food: string) => {
    this.setState(prevState => {
      const newOrders = prevState.orders.map(o => {
        if (o.name === name) {
          const newFoods = o.foods.concat([food]);
          return { ...o, foods: newFoods };
        }
        return o;
      });
      return { orders: newOrders };
    });
  } 
    
  render() {
    const { user } = this.props.match.params;
    const { orders } = this.state;
    return (
      <div style={{ padding: 20 }}>
        <h2>Hello {user}!</h2>
        <hr/>
        {orders.map(o => <UserOrder key={o.name} name={o.name} foods={o.foods} isOpen={o.isOpen} handleToggleUserOrder={this.handleToggleUserOrder} />)}
      </div>
    );
  }
}

function UserOrder ({ name, foods, isOpen, handleToggleUserOrder }: 
  { name: string, foods: string[], isOpen: boolean, handleToggleUserOrder: (name: string) => void }) {
  return (
    <div style={{ margin: 10 }}>
      <button className="pt-button" onClick={() => handleToggleUserOrder(name)}>{name}</button>
      <Collapse isOpen={isOpen}>
        <div style={{ marginTop: 5, padding: 10, backgroundColor: '#ccc' }}>
          <form onSubmit={e => { e.preventDefault(); console.log(e.target) }}>
            <div className="pt-select" style={{ paddingRight: 5 }}>
              <select>
                {menu.map((m, i) => <option key={i} value={m}>{m}</option>)}
              </select>
            </div>
            <button type="submit" className="pt-button pt-intent-primary pt-icon-plus" />
          </form>
          <ul>
            {foods.map(f => <li key={f}>{f}</li>)}
          </ul>
        </div>
      </Collapse>
    </div>
  );
}
