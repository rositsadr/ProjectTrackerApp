import React from 'react';
import FileInput from '../atoms/Inputs/FileInput';
import { useDataFromFile } from '../../hooks/useDataFromFile';
import { NavLink } from 'react-router-dom';
import GeneralTable from '../organism/GeneralTable/GeneralTable';
import ErrorPage from './ErrorPage';


function Home() {
    const {data,handleFileUpload, refreshData, errorMessages} = useDataFromFile();
    
    return (
            <div>
                <div className="container">
                    {
                        !data.length && 
                        <FileInput handleChange={handleFileUpload}/>
                    }
                    {
                        errorMessages.length>0 &&
                        <ErrorPage errorMessages={errorMessages}/>
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