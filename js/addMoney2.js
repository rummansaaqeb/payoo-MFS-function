document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();

    const addMoney = getInputFieldValueById('input-add-money');
    const pinNumber = getInputFieldValueById('input-pin-number');

    if(isNaN(addMoney)){
        return alert('Failed To Add Money');
    }
    
    // wrong way to verify, dont try this at home 
    if(pinNumber === 1234){
        const balance = getTextFieldValueById('account-balance');
        const newBalance = balance + addMoney;
        document.getElementById('account-balance').innerText = newBalance;
        
        // Add To Transaction History
        const p = document.createElement('p');
        p.innerText = `Added : ${addMoney} Tk. New Balance: ${newBalance}`
        
        // should be a common function
        document.getElementById('transaction-container').appendChild(p);
    }
    else{
        alert('Failed To Add The Money, Please Try Again!')
    }
    
})