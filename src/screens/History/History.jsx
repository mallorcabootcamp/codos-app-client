import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../../components/Card/Card';

const History = () => {
    return (
        <>
            <Link to='/'>main </Link>
            <Card>
                <h1>Historico</h1>
            </Card>

        </>
    );
}

export default History