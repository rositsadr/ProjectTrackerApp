import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import SelectInput from '../atoms/Inputs/SelectInput';
import LongestWorkingPairsTable from '../organism/LongestWorkingPairsTable';
import LongestWorkingPeriodTable from '../organism/LongestWorkingPeriodTable';
import MostWorkingEmploeeysTable from '../organism/MostWorkingEmploeeysTable';
import EmploeeyProgressTable from '../organism/EmploeeyProgressTable';

const optionList=[
    {
        value:1,
        label: "Pairs working longest on a project"
    },
    {
        value:2,
        label:"Project longest working period of time"
    },
    {
        value:3,
        label:"Project with most emploeeys worked on it"
    },
    {
        value:4,
        label:"Employee working progress"
    }
]

function Statistics() {
    const location  = useLocation()
    const data=location.state["data"];
    const [optionId,setOptionId] = useState();

    function handleChange(e){
        setOptionId(e.target.value);
    }

    return (
        <div className='container'>
            <h1 className='title'>Statistics</h1>
            <SelectInput lableText={"Select a statistic:"} value={optionId} changeHandler={handleChange} options={optionList}/>
            {optionId==="1" && <LongestWorkingPairsTable data={data}/>}
            {optionId==="2" && <LongestWorkingPeriodTable data={data}/>}
            {optionId==="3" && <MostWorkingEmploeeysTable data={data}/>}
            {optionId==="4" && <EmploeeyProgressTable data={data}/>}
            <NavLink className="homeLink" to="/">Back to Home Page</NavLink>
        </div>
    )
}

export default Statistics;