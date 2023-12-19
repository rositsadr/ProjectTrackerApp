import React from 'react'
import Table from './Table'
import { extractProjectsWithEmployeeId } from '../../utils/extractDataUtils';

function MostWorkingEmploeeysTable({data}) {
    const headData=["ProjectID","Employees count", "Status"];
    const processedData=extractProjectsWithEmployeeId(data)
        .map((row)=>{
            row[1]=row[1].length;
            row[2]===true?row[2]="Is Active":row[2]="Not Active";
            return row;
        }).sort((a,b)=>b[1]-a[1]);

    return (
        <div className='container'>
            <h2>Most Working Emploeeys Table</h2>
            <Table headData={headData} bodyData={processedData}/>
        </div>
    )
}

export default MostWorkingEmploeeysTable