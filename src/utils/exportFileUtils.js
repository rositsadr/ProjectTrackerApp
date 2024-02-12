function extractDataInJson(data,headBody){
    const processedData=[]
    const propsCount=headBody.length;

    data.forEach((row,index)=>{
        processedData[index] ={};
        for(let i=0; i<propsCount; i++){
            const keyName =headBody[i];
            processedData[index][keyName] = row[i];
        };
    });
        
    return processedData;
}

function extractColumns(headBody){
    const columns=[];
    headBody.forEach((col)=>
        columns.push({id:col})
    );

    return columns;
}

export {extractDataInJson,extractColumns};