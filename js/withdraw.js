document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawFild = document.getElementById('withdraw-box');
    const newwithdrawAmountstring = withdrawFild.value;
    const newwithdrawAmmount = parseFloat(newwithdrawAmountstring);

     // clear input field
     withdrawFild.value = '';

    if(isNaN(newwithdrawAmmount)){
        alert('please provide a valid number');
    }

    const withdrawTotal = document.getElementById('total-withdraw');
    const previousWithdarwstring = withdrawTotal.innerText;
    const previousWithdarw = parseFloat(previousWithdarwstring);

    // get previous balance total
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceString = balanceTotal.innerText;
    const previousBalance = parseFloat(previousBalanceString);

   

    if (newwithdrawAmmount > previousBalance) {
        alert('insuficiant money');
        return;
    }

    // console.log(previousWithdarw)
    const currentWithdraw = previousWithdarw + newwithdrawAmmount;
    withdrawTotal.innerText = currentWithdraw;

    const newBalance = previousBalance - newwithdrawAmmount;
    balanceTotal.innerText = newBalance;


})

// document.getElementById('btn-withdraw').addEventListener('click',function(){
//     const withdrawFild = document.getElementById('withdraw-box');
//     const withdrawAmmountString = withdrawFild.value;
//     const withdrawAmmount = parseFloat(withdrawAmmountString);

// })