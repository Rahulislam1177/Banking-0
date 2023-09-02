document.getElementById('deposit-button').addEventListener('click',function(){

  //Get deposit
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmmountText = depositInput.value;
    const newDepositAmmount = parseFloat(newDepositAmmountText)


   //Updet deposit
 const depositTotal = document.getElementById('deposit-total');
  const priviousDepositAmmountText = depositTotal.innerText = depositTotal.innerText
  ;
const priviousDepositAmmount = parseFloat(priviousDepositAmmountText);


  //privious Ammount + new input Ammount Add
  const newDepositTotal = priviousDepositAmmount + newDepositAmmount;
  depositTotal.innerText = newDepositTotal;

  //update belence
  const balaceTotal =document.getElementById('balace-input');
  const balaceTotalText = balaceTotal.innerText;
  const balaceTotalAmmount = parseFloat(balaceTotalText);
  const newBalaceTotal = balaceTotalAmmount + newDepositAmmount;
  balaceTotal.innerText = newBalaceTotal;

  //clear
  depositInput.value = "";


    })

    document.getElementById('withdraw-button').addEventListener('click',function(){ 
      //Get Withdraw Input
   const withdrawInput = document.getElementById('withdraw-input');
   const withdrawInputText = withdrawInput.value;
   const withdrawInputAmmount = parseFloat(withdrawInputText);
  
// update Withdraw
const WithdrawTotal = document.getElementById('withdraw-total');
const priviousWithdrawTotalText = WithdrawTotal.innerText;
const priviousWithdrawTotalAmmount = parseFloat(priviousWithdrawTotalText);
const newWithdrawTotal = priviousWithdrawTotalAmmount + withdrawInputAmmount;
// Sat 
WithdrawTotal.innerText = newWithdrawTotal;


// Update balance 
const balaceTotal =document.getElementById('balace-input');
  const balaceTotalText = balaceTotal.innerText;
  const priviousBalaceTotalAmmount = parseFloat(balaceTotalText);
  
  const newBalaceTotal = priviousBalaceTotalAmmount - withdrawInputAmmount;
  balaceTotal.innerText = newBalaceTotal;


// Clear the value
withdrawInput.value ="";



    })
