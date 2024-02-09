import React from 'react'
import Table from '../organism/Table'
import { extractProjectsWithEmployeeData } from '../../utils/extractDataUtils';
import ExportFile from '../atoms/ExportFile';

function MostWorkingEmploeeysTable({data}) {
    const headData=["ProjectID","Employees count", "Status"];
    const processedData=extractProjectsWithEmployeeData(data)
        .map((row)=>{
            row[1]=row[1].length;
            row[2]===true?row[2]="Is Active":row[2]="Not Active";
            return row;
        }).sort((a,b)=>b[1]-a[1]);

    return (
        <div className='container'>
            <h2>Projects With Most Working Emploeeys</h2>
            <Table headData={headData} bodyData={processedData}/>
            <ExportFile data={processedData} headData={headData}/>
        </div>
    )
}

export default MostWorkingEmploeeysTable