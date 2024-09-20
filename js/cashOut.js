document.getElementById('btn-cash-out-money').addEventListener('click', function (event){
    event.preventDefault();
    
    const cashOut = getInputFieldValueById('input-cash-out-money');
    const cashOutPin = getInputFieldValueById('input-cash-out-pin');
    if(isNaN(cashOut)){
        return alert('Failed To Cash Out Money');
    }
    if(cashOutPin === 1234){
        const balance = getTextFieldValueById('account-balance');

        if(cashOut > balance){
            return alert('You Do Not Have Enough Money!')
        }

        const newBalance = balance - cashOut;

        document.getElementById('account-balance').innerText = newBalance;

        // add to transaction history
        const div = document.createElement('div');
        div.classList.add('bg-gray-500');
        div.innerHTML = `
        <h4 class = 'text-2xl font-bold text-black rounded-lg'>Cash Out</h4>
        <p class = 'text-black'>${cashOut} withdraw. New Balance ${newBalance}</p>
        `
        document.getElementById('transaction-container').appendChild(div);
    }   
    else{
        alert('No Money For You. DGM');
    } 
})