import React from 'react'
import {extractPairMostWorkingTimeByProject } from '../../utils/extractDataUtils'
import Table from './Table';

function LongestWorkingPairsTable({data}) {
    const headData=["Project ID", "First Employee ID","Second Employee ID", "Workig days together"]
    const processedData = extractPairMostWorkingTimeByProject(data).map(entry=>Object.values(entry));

    return (
        <div className='container'>
            <h2>Longest Working on a Project Pairs</h2>
            <Table headData={headData} bodyData={processedData}/>
        </div>
    )
}

export default LongestWorkingPairsTable