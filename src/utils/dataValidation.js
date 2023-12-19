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

export {arrayLengthValidation, checkArrayForEmptyStrings,notCorrectDateFormat};