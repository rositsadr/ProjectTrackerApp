import { useState } from 'react';
import { formatArrayToMatrix, processDateInMatrix, turnDataToArray } from '../utils/createDataUtils';
import { arrayLengthValidation,checkArrayForEmptyStrings,notCorrectDateFormat} from '../utils/dataValidation';

function useData() {
    const[data, setData] = useState([]);

    function handleFileUpload(e){
        e.preventDefault();

        const errors=[];
        const file = e.target.files[0];
        const reader = new FileReader();
        // const errors = [];
        reader.readAsText(file);
    
        reader.onload = function(){
            const dataArr = turnDataToArray(reader.result);
            const dataMatrix = formatArrayToMatrix(dataArr);
            const processData = processDateInMatrix(dataMatrix);

            dataMatrix.forEach((row,index) => {
                if (!arrayLengthValidation(row) 
                    || checkArrayForEmptyStrings(row)
                    || notCorrectDateFormat(row[2])
                    || notCorrectDateFormat(row[3]) ){
                  errors.push(index+1);
                }
            });
        
            if(!!errors.length){
                errors.forEach((error)=>{
                    console.log(`Data on row ${error} is invalid!`);
                    alert(`Data on row ${error} is invalid!`);
                });
                return;
            }

            setData(processData);
        };
    }

    function refreshData(){
        return setData([]);
    }

    return {data, handleFileUpload, refreshData} ;
}

export  {useData};