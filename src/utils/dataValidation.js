function arrayLengthValidation(array){
    return array.length === 4;
}

function isEmptyString(string){
    return string.trim().length===0;
}

function checkArrayForEmptyStrings(array){
    return array.filter((string)=>isEmptyString(string)).length > 0;
}

function notCorrectDateFormat(date){
    return isNaN(new Date(date));
}

function checkIfStartDateIsBeforeEndDate(startDate,endDate){
    return (new Date(startDate).getTime() < new Date(endDate).getTime());
}

export {arrayLengthValidation,
        checkArrayForEmptyStrings,
        notCorrectDateFormat,
        isEmptyString,
        checkIfStartDateIsBeforeEndDate
    };