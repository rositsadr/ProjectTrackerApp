import React from 'react'
import Table from './Table';
import { extractEmployeeProjects } from '../../utils/extractDataUtils';

function EmploeeyProgressTable({data}) {
    const headData=["EmpID", "Active Projects IDs", "Finished Projects IDs"];
    const processedData= extractEmployeeProjects(data);

    processedData.map((entry)=>{
        entry[1]=entry[1].join(", ")===""?"0":entry[1].join(", ");
        entry[2]=entry[2].join(", ")===""?"0":entry[2].join(", ");
        return entry;
    });
    
    return (
        <div className='container'>
            <h2>Emploeey Working Progress</h2>
            <Table bodyData={processedData} headData={headData}/>
        </div>
    )
}

export default EmploeeyProgressTable