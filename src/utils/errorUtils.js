import { arrayLengthValidation,checkArrayForEmptyStrings,notCorrectDateFormat, isEmptyString, checkIfStartDateIsBeforeEndDate} from '../utils/dataValidation';

function errors(dataMatrix){
    const errorMessages = [];

    dataMatrix.forEach((row,index) => {
        if (!arrayLengthValidation(row) 
            || checkArrayForEmptyStrings(row)){
          errorMessages.push(`Missisng data at ${index+1} row!`);
        }

        if((!isEmptyString(row[2])&& row[2] !== "NULL" && notCorrectDateFormat(row[2]))
            || (!isEmptyString(row[3])&& row[3] !== "NULL" && notCorrectDateFormat(row[3]))){
            errorMessages.push(`Not correct date format at ${index+1} row!`);
        }

        if(checkIfStartDateIsBeforeEndDate(row[3],row[4])){
            errorMessages.push(`Finished date is before start date at ${index+1} row!`);
        }
    });

    return errorMessages;
}

export {errors};