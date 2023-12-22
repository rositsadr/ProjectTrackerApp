import { extractProjectsWithEmployeeData } from "./extractDataUtils";

function pairEmployeesInProjectByID(data){
    const processedData= extractProjectsWithEmployeeData(data);

    processedData.map((row)=>{
        const pairs=[];
        const employeeCount=row[1].length;

        for(let i=0;i<employeeCount-1;i++){
            for(let j=i+1;j<employeeCount;j++){
                    pairs.push([row[1][i],row[1][j]]);
            }
        }

        row[1]= pairs;
        return row;
    });


    return processedData;
}


function calculatePairWorkingTime(firstStartTime, secondStartTime, firstEndTime, secondEndTime){
    let workingDaysTogether=0;
    const firstStart=new Date(firstStartTime);
    const secondStart=new Date(secondStartTime);
    const firstEnd=new Date(firstEndTime);
    const secondEnd=new Date(secondEndTime); 
    if(firstStart <= secondEnd
        && secondStart <= firstEnd){
            const startDate = firstStart > secondStart ? firstStart : secondStart;
            const endDate = firstEnd < secondEnd ? firstEnd : secondEnd;
            const workingInMiliseconds=endDate-startDate;
            workingDaysTogether=Math.round(workingInMiliseconds/((1000 * 3600 * 24)))
    }
    return workingDaysTogether;
}

function extractPairMostWorkingTimeByProject(data){
    const pairedData= pairEmployeesInProjectByID(data);
    const processedData=[];

    pairedData.forEach((entry)=>{
        const projectId=entry[0];
        // console.log(entry);
        entry[1].forEach((pair)=>{
            /**pair is array of 2 objects that holds employee {empId,from,till} info */
            // console.log(pair[0]);
            const workingDaysTogether=calculatePairWorkingTime(pair[0].from,pair[1].from,pair[0].till,pair[1].till);
            if(workingDaysTogether>0){
                if(processedData.filter((pr)=>pr.projectId === projectId).length===0){
                    processedData.push({projectId: projectId, firstEmpId: pair[0].empId, secondEmpId: pair[1].empId, workingDays: workingDaysTogether});
                }else{                      
                    const index=processedData.findIndex((pr)=>pr.projectId === projectId);
                    if(processedData[index].workingDays < workingDaysTogether){
                        processedData[index].firstEmpId = pair[0].empId;
                        processedData[index].secondEmpId = pair[1].empId;
                        processedData[index].workingDays = workingDaysTogether;
                    }
                }
            }
        })
    });
    return processedData;
}

export {extractPairMostWorkingTimeByProject};