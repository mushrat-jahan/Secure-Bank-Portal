document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositFild = document.getElementById('deposit-box');
    const newdepositAmountstring = depositFild.value;
    const newdepositAmount = parseFloat(newdepositAmountstring);
    // console.log(depositAmount);
    const totalDepositElement = document.getElementById('total-deposit');
    const previousDepositstring = totalDepositElement.innerText;
    const previousDeposit = parseFloat(previousDepositstring);
    // add number to set total deposit
    const currentDeposit = previousDeposit + newdepositAmount;
    totalDepositElement.innerText = currentDeposit;
    // get current ballance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalancestring = balanceTotal.innerText;
    const previousBalance = parseFloat(previousBalancestring);

    // calculate current total balance
    const currentBalance = previousBalance + newdepositAmount;
     balanceTotal.innerText = currentBalance;

    depositFild.value = '';
})




