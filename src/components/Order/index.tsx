import * as React from 'react';
import { Table, Column, Cell } from '@blueprintjs/table';

// blueprint styles
import '../../styles/normalize.css';
import '../../styles/blueprint.css';
import '../../styles/table.css';

interface OrderEntry {
    id: string;
    name: string;
    foods: string [];
    balance: number;
};

type OrderData = Array<OrderEntry>;

const data = [
    { id: 'MR', name: 'Muhammad Rafdi', foods: ['nasi rendang'], balance: 0 },
    { id: 'AMK', name: 'Ahmad Muhsin Kurnia', foods: ['telor', 'nasi liwet'], balance: -2000 },
    { id: 'KE', name: 'Kurnia Eliazar', foods: ['nasi kuning'], balance: 3000 },
    { id: 'MY', name: 'Muhammad Yusuf', foods: ['nasi ayam chicken'], balance: 1000 },
];

export default class Order extends React.Component<{ match: any }, {}>{
    render() {
        return (<div style={{ padding: 20 }}>
            <h2>{this.props.match.params.orderName}</h2>
            <hr />
            <OrderTable data={data} />
        </div>);
    }
}

function OrderTable({ data } : { data: OrderData }) {

    const ids = data.map(d => d.id);
    const names = data.map(d => d.name);
    const foods = data.map(d => d.foods);
    const balances = data.map(d => d.balance);

    const renderCell = (rowIndex: number, data: any[] ) => <Cell>{data[rowIndex]}</Cell>;

    return (<Table numRows={data.length}>
        <Column name="id" renderCell={(rowIndex) => renderCell(rowIndex, ids)} />
        <Column name="name" renderCell={(rowIndex) => renderCell(rowIndex, names)} />
        <Column name="food" renderCell={(rowIndex) => renderCell(rowIndex, foods)} />
        <Column name="balance" renderCell={(rowIndex) => renderCell(rowIndex, balances)} />
    </Table>);
}
