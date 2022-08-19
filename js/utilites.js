/* 
1. add event listener
2.get the input field 
3.convert the number to int
4. update the new case number by +;
5.set the value;
*/
function updateCaseNumber(isIncrease){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);
    let newCaseNumber;
    if(isIncrease){
        newCaseNumber = previousCaseNumber + 1;
    }
    else{
        newCaseNumber = previousCaseNumber - 1;
    }
    caseNumberField.value = newCaseNumber;
   return newCaseNumber;
}
function updateCaseTotalPrice(newCaseNumber){

    const totalPrice = newCaseNumber  * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = totalPrice;
}