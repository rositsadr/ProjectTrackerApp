function turnDataToArray(data){
    return data.split(/(\r\n|\n|\r|\n\r)/g);
}

function formatArrayToMatrix(array){
    return array
        .filter((row)=>row.trim().length!==0)
        .map((row)=>row.split(",")
        .map((cell)=>cell.trim()));

}

function processDateInMatrix(matrix){
    return matrix
        .map((row)=>{
            row[2]=new Date(row[2]).toDateString();
            if(row[3]=== "NULL"){
                row[3]=new Date().toDateString();
            }else{
                row[3]=new Date(row[3]).toDateString();
            }
            return row;
        });
}

function addWorkigDaysToData(data){
    const newData = [];
    data.forEach((entry)=>{
        const newRow= []
        newRow[0] = entry[0];
        newRow[1] = entry[1];
        newRow[2] = entry[2];
        newRow[3] = entry[3];
        const dateTimeFrom=new Date(entry[2]);
        const dateTimeTill = new Date(entry[3]);
        const timeDifinMILSEC= dateTimeTill-dateTimeFrom;
        const timeDifInDays = Math.round(timeDifinMILSEC/ (1000 * 3600 * 24));
        newRow[4] = timeDifInDays; 
        newData.push(newRow);     
    });
    return newData;
}

function sortByWorkingDays(data){
    return addWorkigDaysToData(data).sort((a,b)=>b[4]-a[4]);
}


export {
    turnDataToArray,
    formatArrayToMatrix,
    processDateInMatrix,
    sortByWorkingDays,
};

