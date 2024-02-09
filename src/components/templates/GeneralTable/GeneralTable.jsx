import React, {useState} from 'react';
import Table from '../../organism/Table';
import SelectInput from '../../atoms/Inputs/SelectInput';
import SearchInput from '../../atoms/Inputs/SearchInput';
import './GeneralTable.css';

const filterOptions=[
    {
        value: "empId",
        label: "Search Employee Id"
    },
    {
        value: "projectId",
        label: "Search Project Id"
    },
]

function GeneralTable({data}) {
    const [filter,setFilter] = useState("");
    const [search,setSearch] = useState("");
    const [dataToShow,setDataToShow] = useState(data);
    let processedData=[];

    function handleFilter(e){
        setFilter(e.target.value);
    }

    function handleSearch(e){
        const searchTarget = e.target.value;
        setSearch(searchTarget);

        if(filter){
            if(filter === "empId"){
                processedData=data.filter((entry)=>{
                    return entry[0].includes(searchTarget);
                } )
            } else if(filter === "projectId"){
                processedData=data.filter((entry)=>{
                    return entry[1].includes(searchTarget);
                })
            } else {
                setDataToShow(data);
                return;
            }

            setDataToShow(processedData);
        } else{
            alert("Choose a filter to search from!");
        }
    }

    return (
        <div className="container">
            <div className='search-container'>
                <SelectInput lableText={"Search from:"} value={filter} changeHandler={handleFilter} options={filterOptions}/>
                <SearchInput value={search} changeHandler={handleSearch}/>
            </div>
            <h2>Uploaded Data</h2>
            <Table bodyData={dataToShow}/>
        </div>
    );
}

export default GeneralTable;