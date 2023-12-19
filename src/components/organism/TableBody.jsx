import React from 'react';
import TableRow from '../muleculs/TableRow';

function TableBody({data}) {
    return (
        <tbody>
            {data.map((row, index) => <TableRow data={row} key={index}/>)}
        </tbody>
    );
}

export default TableBody;