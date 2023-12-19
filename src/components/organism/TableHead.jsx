import React from 'react';
import TableRow from '../muleculs/TableRow';

function TableHead({data}) {
    return (
        <thead>
            <TableRow data={data} cellType="heading"/>
        </thead>
    );
}

export default TableHead;