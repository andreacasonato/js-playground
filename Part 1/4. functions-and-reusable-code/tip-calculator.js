// Create a function that calculates the total bill after adding a tip.

const calculateTip = (billAmount, tipPercentage) => {
    let tipAmount = (billAmount * (tipPercentage / 100));
    let totalBill = billAmount + tipAmount;
    return totalBill;
}

let billAmount = 182;
let tipPercentage = 15;

console.log(calculateTip(billAmount, tipPercentage));