
document.getElementById('loan-form').addEventListener('submit',calculateResult);

function calculateResult(e){
  console.log('calculate called');

  const amt=document.getElementById('amount');
  const interest=document.getElementById('interest');
  const years=document.getElementById('years');

  const monthlypayment=document.getElementById('monthly-payment');
  const totalpayment=document.getElementById('total-payment');
  const totalint=document.getElementById('total-interest');

  const principal=parseFloat(amt.value);
  const calculatedint=parseFloat(interest.value).toFixed(2);
  const calculatedPayment=parseFloat(years.value)*12;

  const x=Math.pow(1+calculatedint,calculatedPayment);
  const monthly=(principal*x*calculatedint)/(x-1);


  if(isFinite(monthly)){
    monthlypayment.value=monthly.toFixed(2);
    totalpayment.value=(monthly*calculatedPayment).toFixed(2);
    totalint.value=((monthly*calculatedPayment)-principal).toFixed(2);
  }
  else{

    showError('please check your number')
  }

  e.preventDefault();
}


function showError(error){
  const errorDiv=document.createElement('div');

  //get elements
  const card=document.querySelector('.card');
  const heading =document.querySelector('.heading')

  errorDiv.className='alert alert-danger';

  errorDiv.appendChild(document.createTextNode(error)); 

  card.insertBefore(errorDiv,heading);

  setTimeout(clearError,3000);
}

function clearError(){
  document.querySelector('.alert').remove();
}