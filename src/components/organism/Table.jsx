import React from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';

function Table({bodyData, headData=["EmpID", "ProjectID", "DateFrom", "DateTo"]}) {
    return (
        <table id="table">
            <TableHead data={headData}/>
            <TableBody data={bodyData}/>
        </table>
    );
}

export default Table;