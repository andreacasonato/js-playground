let totalBill = Number(prompt('What\'s the total bill?'));
let tip = Number(prompt('Please enter desired tip %'));

let finalBill = (((totalBill * tip) / 100) + totalBill);

console.log(`Your final bill is ${finalBill}, thank you!`);