// Create a bank account object that can perform actions like a real bank account. 
// This is a great way to practice writing object methods and using the this keyword.

const bankAccount = {
    ownerName: 'John',
    balance: 0,

    // This is the deposit method. It takes an 'amount' as a parameter.
    deposit: function (amount) {
        // We use 'this.balance' to access the balance property of the current object.
        this.balance += amount;
        console.log(`Deposited ${amount}. New balance is ${this.balance}.`);
    },

    // This is the withdraw method. It also takes an 'amount' parameter.
    withdraw: function (amount) {
        // We use 'this.balance' again to subtract from the balance.
        this.balance -= amount;
        console.log(`Withdrew ${amount}. New balance is ${this.balance}.`);
    }
};

// Calling the methods to change the object's state
bankAccount.deposit(100); // Deposited 100. New balance is 100.
bankAccount.withdraw(20); // Withdrew 20. New balance is 80.

// Print the final balance to the console
console.log(`Final balance: ${bankAccount.balance}`); // Final balance: 80