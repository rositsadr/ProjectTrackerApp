import React from 'react';

function TableCell({value, type="cell"}) {
    if(type==="heading") return <th style={{border:"2px solid #000",background:"#efdc0f", padding:"2px 5px", fontSize:"18px", fontWeight:"bold"}}>{value}</th>;
    return <td style={{border:"2px solid #000",padding:"2px"}}>{value}</td>;
}

export default TableCell;