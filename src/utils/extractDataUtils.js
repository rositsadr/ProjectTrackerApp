function extractEmployeeProjects(data){
    const newData=[];

    data.forEach((row)=>{
        const employeeId=row[0];
        const projectId=row[1];
        const dateTill=row[3];
        let index=-1;

        if(newData.find((employee)=>employee.id === employeeId)){
            index= newData.findIndex((employee)=> employee.id === employeeId);
        }else{
            newData.push({id:employeeId, active:[], finished:[]});
            index=newData.length-1;
        } 
        
        if(dateTill === new Date().toDateString()){
            newData[index].active.push(projectId);
        }else{
            newData[index].finished.push(projectId);
        }
    });

    return newData.map((employee)=>Object.values(employee));;
}

function extractProjectsWithEmployeeData(data){
    /**projectData is an array that holds objects with 3 params: projectId, Employees data and status */
    const projectData=[];

    data.forEach((row)=>{
        const employeeId=row[0];
        const projectId=row[1];
        const finishedDate=row[3];
        const startDate=row[2];
        let isActive=false;

        if(finishedDate === new Date().toDateString()){
            isActive = true;
        }

        if(projectData.find((project)=>project.id === projectId)){
            const index=projectData.findIndex((project)=> project.id === projectId);
            projectData[index].employees.push({empId:employeeId, from:startDate, till:finishedDate});
            if(isActive){projectData[index].status = isActive;}
        }else{
            projectData.push({id:projectId, employees:[{empId:employeeId, from:startDate, till:finishedDate}], status: isActive});
        } 
    });

    return projectData.map((employee)=>Object.values(employee));
}

export {
    extractEmployeeProjects,
    extractProjectsWithEmployeeData,
};