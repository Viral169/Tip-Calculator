let btn = document.querySelector(".button");
let perpPrsontip = document.querySelector(".perpersontip");
let totalperperson = document.querySelector(".totalperperson");
let totalamount = document.querySelector(".totalamount");
let inputBill = document.querySelector(".billamount");
let inputPercentage = document.querySelector(".percentage");
let inputNumberOfpeople = document.querySelector(".people");

let tipCounter = () => {
  let bill = parseInt(inputBill.value);
  let percentage = parseInt(inputPercentage.value);
  let numberOfpeople = parseInt(inputNumberOfpeople.value);

  if (
    isNaN(bill) ||
    isNaN(percentage) ||
    isNaN(numberOfpeople) ||
    bill <= 0 ||
    percentage < 0 ||
    numberOfpeople <= 0
  ) {
    alert("Please enter valid values for all fields.");
    return;
  }

  let tip = (bill * percentage) / 100;
  let tipPerperson = tip / numberOfpeople;
  let totalBill = bill + tip;
  let billPerperson = totalBill / numberOfpeople;
  totalamount.innerText = `Rs: ${totalBill}`;
  perpPrsontip.innerText = `Rs: ${tipPerperson}`;
  totalperperson.innerText = `Rs: ${Math.trunc(billPerperson)}`;
};

btn.addEventListener("click", tipCounter);
