/**
 * How to get a number from an input field.
 * 1. Create a variable
 * 2. right side document.getElementById('idname')
 * 3. value
 * 4. parseFloat()
 */
console.log('add money loaded');


document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();

    // console.log('add money button clicked');
    // getInputFieldValueById();
    // const addMoney = getInputFieldValueById();
    // console.log('add money value', addMoney);


    const addMoney = getInputFieldValueById('input-add-money');
    const pinNumber = getInputFieldValueById('input-pin-number');
    console.log('add money with parameter', addMoney, pinNumber);
    
})