import TableCell from "../atoms/TableCell";

function TableRow({data,cellType}){
    return (
        <tr>
            {data.map((cell) => <TableCell key={cell} value={cell} type={cellType}/> )}
        </tr>
    );
}

export default TableRow;