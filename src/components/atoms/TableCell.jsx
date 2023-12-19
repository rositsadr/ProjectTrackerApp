import React from 'react';

function TableCell({value, type="cell"}) {
    if(type==="heading") return <th style={{padding:"2px 5px", fontSize:"18px", fontWeight:"bold"}}>{value}</th>;
    return <td style={{padding:"2px"}}>{value}</td>;
}

export default TableCell;