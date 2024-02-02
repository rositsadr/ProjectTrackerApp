import { useState } from 'react';
import { formatArrayToMatrix, processDateInMatrix, turnDataToArray } from '../utils/createDataUtils';
import {errors} from '../utils/errorUtils';

function useDataFromFile() {
    const[data, setData] = useState([]);
    const[errorMessages, setErrorMessages] = useState([]);

    function handleFileUpload(e){
        e.preventDefault();

        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsText(file);
    
        reader.onload = function(){
            const dataArr = turnDataToArray(reader.result);
            const dataMatrix = formatArrayToMatrix(dataArr);
            const errorsArr = errors(dataMatrix);
            setErrorMessages(errorsArr);
            const processData = processDateInMatrix(dataMatrix);
            setData(processData);
        };
    }

    function refreshData(){
         setData([])
         setErrorMessages([]);
    }

    return {data, handleFileUpload, refreshData, errorMessages} ;
}

export {useDataFromFile};