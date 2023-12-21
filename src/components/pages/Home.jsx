import React from 'react';
import FileInput from '../atoms/Inputs/FileInput';
import { useData } from '../../hooks/useData';
import { NavLink } from 'react-router-dom';
import GeneralTable from '../organism/GeneralTable/GeneralTable';
import teamWork from '../../assets/images/TeamWork.png';


function Home() {
    const {data,handleFileUpload, refreshData} = useData();
    
    return (
            <div>
                <h1 className="title">Poject Tracker</h1>
                <div className="container">
                    {
                    !data.length && 
                    <div className='container'>
                        <FileInput handleChange={handleFileUpload}/>
                        <img src={teamWork} style={{paddingTop:"40px"}} alt='Team is creating car from gears'/>
                    </div>
                    }
                    {
                        !!data.length && 
                        <div className="container">
                            <div className="navStat">
                                <NavLink to={"/statistics"} state={{data:data}}>Statistics</NavLink>
                            </div>
                            <GeneralTable className="table" data={data}/> 
                            <button className="refreshBtn" onClick={refreshData}>Refresh Data</button>
                        </div>
                    }
                </div>
            </div>
    );
}

export default Home;