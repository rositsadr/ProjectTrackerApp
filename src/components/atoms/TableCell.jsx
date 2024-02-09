import React from 'react';

function TableCell({value, type="cell"}) {
    if(type==="heading") return <th id="head-row">{value}</th>;
    return <td id="body-row">{value}</td>;
}

export default TableCell;