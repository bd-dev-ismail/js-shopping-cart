function updatePhoneNumber(isIncrease){
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumer = parseInt(phoneNumberString);
    let newPhoneNumber;
    if(isIncrease){
        newPhoneNumber = previousPhoneNumer + 1;
    }
    else{
        newPhoneNumber = previousPhoneNumer - 1;
    }
    phoneNumberField.value = newPhoneNumber;
    return newPhoneNumber;
}
function updatePhoneTotalPrice(newPhoneNumber){
    const phoneTotal = newPhoneNumber * 1219;
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = phoneTotal;
}
document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber(true);
    updatePhoneTotalPrice(newPhoneNumber);
});
document.getElementById('btn-phone-minus').addEventListener('click', function(){
     const newPhoneNumber = updatePhoneNumber(false);
     updatePhoneTotalPrice(newPhoneNumber);

});