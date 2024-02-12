import { extractProjectsWithEmployeeData } from "./extractDataUtils";

function pairEmployeesInProjectByID(data){
    const processedData= extractProjectsWithEmployeeData(data);

    processedData.map((row)=>{
        const pairs=[];
        const employeeCount=row[1].length;

        for(let i=0;i<employeeCount-1;i++){
            for(let j=i+1;j<employeeCount;j++){
                const empId1=row[1][i].empId;
                const empId2=row[1][j].empId
                if(empId1!==empId2){
                    pairs.push([row[1][i],row[1][j]]);
                }
            }
        }
        row[1]=pairs;
        return row;
    });

    return processedData;
}


function calculateDays(firstStartTime, secondStartTime, firstEndTime, secondEndTime){
    let days=0;
    const firstStart=new Date(firstStartTime);
    const secondStart=new Date(secondStartTime);
    const firstEnd=new Date(firstEndTime);
    const secondEnd=new Date(secondEndTime); 
    if(firstStart <= secondEnd
        && secondStart <= firstEnd){
            const startDate = firstStart > secondStart ? firstStart : secondStart;
            const endDate = firstEnd < secondEnd ? firstEnd : secondEnd;
            const workingInMiliseconds=endDate-startDate;
            days=Math.round(workingInMiliseconds/((1000 * 3600 * 24)))
    }
    return days;
}

function calculatePairsWorkingTime(data){
    const pairedData = pairEmployeesInProjectByID(data);
    let calculatedData = pairedData.map((row)=>{
        const pairs=[];
        row[1].forEach((pair)=>{
            const empId1 = pair[0].empId;
            const empId2 = pair[1].empId;
            const workingDaysTogether = calculateDays(pair[0].from,pair[1].from,pair[0].till,pair[1].till)
            
            if(pairs.filter((pair)=>
                (pair.empId1 === empId1 && pair.empId2 === empId2)
                ||(pair.empId1 === empId2 && pair.empId2 === empId1)).length === 0){
                    pairs.push({
                        empId1: empId1,
                        empId2: empId2,
                        workingDaysTogether: workingDaysTogether
                    })
            } else {
                const index = pairs.findIndex((pair)=>
                ((pair.empId1 === empId1 && pair.empId2 === empId2)
                ||(pair.empId1 === empId2 && pair.empId2 === empId1)));
                pairs[index].workingDaysTogether+=workingDaysTogether;
            }
        });

        return{
            projectId: row[0],
            pairs: pairs.sort((a,b)=>b.workingDaysTogether-a.workingDaysTogether)
        };
    });

    return calculatedData;
}

function extractPairMostWorkingTimeByProject(data){
    const pairsWithWorkingTime = calculatePairsWorkingTime(data).map((field)=>
    ({
        projectId: field.projectId,
        empId1: field.pairs[0].empId1,
        empId2: field.pairs[0].empId2,
        workingDaysTogether: field.pairs[0].workingDaysTogether
    }))

    return pairsWithWorkingTime.filter((project)=>project.workingDaysTogether>0);
}

export {extractPairMostWorkingTimeByProject};