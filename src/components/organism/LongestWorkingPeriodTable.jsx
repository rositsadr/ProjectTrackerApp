import React from 'react'
import Table from './Table'
import { sortByWorkingDays } from '../../utils/createDataUtils'
import ExportFile from './ExportFile';

function LongestWorkingPeriodTable({data}) {
    const processedData=sortByWorkingDays(data);
    const headData=["EmpID", "ProjectID", "DateFrom", "DateTo", "Working Days on Project"];

    return (
        <div className='container'>
            <h2>The Longest Worked on Projects</h2>
            <Table bodyData={processedData} headData={headData}/>
            <ExportFile data={processedData} headData={headData}/>
        </div>
    );
}

export default LongestWorkingPeriodTable