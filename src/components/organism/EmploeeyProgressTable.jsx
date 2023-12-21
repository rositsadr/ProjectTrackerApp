import React from 'react'
import Table from './Table';
import { extractEmployeeProjects } from '../../utils/extractDataUtils';
import ExportData from './ExportData';

function EmploeeyProgressTable({data}) {
    const headData=["EmpID", "Active Projects IDs", "Finished Projects IDs"];
    const processedData= extractEmployeeProjects(data).sort((a,b)=>a[0]-b[0]);

    processedData.map((entry)=>{
        entry[1]=entry[1].join(", ")===""?"0":entry[1].join(", ");
        entry[2]=entry[2].join(", ")===""?"0":entry[2].join(", ");
        return entry;
    });
    
    return (
        <div className='container'>
            <h2>Emploeey Working Progress by ID</h2>
            <Table bodyData={processedData} headData={headData}/>
            <ExportData data={processedData} headData={headData}/>
        </div>
    )
}

export default EmploeeyProgressTable