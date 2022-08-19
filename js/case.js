
//Wroking on plus button
document.getElementById('btn-case-plus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(true);
    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();
});
//working on minus button
document.getElementById('btn-case-minus').addEventListener('click', function(){

   const newCaseNumber = updateCaseNumber(false);
   updateCaseTotalPrice(newCaseNumber);
   calculateSubTotal();
});