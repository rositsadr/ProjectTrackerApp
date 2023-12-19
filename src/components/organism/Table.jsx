import React from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';

function Table({bodyData, headData=["EmpID", "ProjectID", "DateFrom", "DateTo"]}) {
    return (
        <table style={{textAlign:"center"}}>
            <TableHead data={headData}/>
            <TableBody data={bodyData}/>
        </table>
    );
}

export default Table;