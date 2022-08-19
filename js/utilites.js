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
function getPhoneTotalValueById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const currentpPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal =  parseInt(currentpPhoneTotalString);
    return currentPhoneTotal;
}
function setTextElementValueById(elementId, newValue){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = newValue;
}
function calculateSubTotal(){
     //calculate Total
    const phoneTotalElement = getPhoneTotalValueById('phone-total');
    const caseTotalElement = getPhoneTotalValueById('case-total');

    const currentSubTotal = phoneTotalElement + caseTotalElement;
    setTextElementValueById('sub-total', currentSubTotal);
    //calcualte tax
    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementValueById('tax-total', taxAmount);

    const finalAmount = currentSubTotal + taxAmount;
    setTextElementValueById('final-total', finalAmount);
}