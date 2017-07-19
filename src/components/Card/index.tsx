import * as React from 'react';

export default function Card(props: { title: string, description: string }) {
    const { title, description } = props;
    return (
        <div className="pt-card pt-elevation-2 pt-interactive" style={{ borderRadius: 5, margin: 10 }}>
            <h5>{title}</h5>
            <p>{description}</p>
        </div>
    );
}
