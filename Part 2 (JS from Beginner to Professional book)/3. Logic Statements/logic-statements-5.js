// Create a variable called prize and use a prompt to ask the user to set the value by selecting a number between 0 and 10.
// Convert the prompt response to a number data type.
// Create a variable to use for the output message containing the value "My Selection: ".
// Using the switch statement (and creativity), provide a response back regarding a prize that is awarded depending on what number is selected.
// Use the switch break to add combined results for prizes.
// Output the message back to the user by concatenating your prize variable strings and the output message string.

let prize = prompt('Select a number between 0 and 10:');

let number = Number(prize);

let outputMessage = 'My selection: ';

switch (number) {
    case 0:
        outputMessage += 'A basket of chocolates';
        break;
    case 1:
        outputMessage += 'Wireless earbuds';
        break
    case 2:
        outputMessage += 'A small potted plant';
        break;
    case 3:
        outputMessage += 'A board game';
        break
    case 4:
        outputMessage += 'A ticket for a local experience';
        break;
    case 5:
        outputMessage += '$200';
        break
    case 6:
        outputMessage += 'A spa gift set';
        break
    case 7:
        outputMessage += 'A Macbook pro';
        break;
    case 8:
        outputMessage += 'A yoga mat';
        break
    case 9:
        outputMessage += 'A bottle of wine with a set of nice glasses';
        break;
    case 10:
        outputMessage += 'A Lego set';
        break
    default:
        outputMessage += 'Sorry, no prize for that number!';
}

console.log(`You selected number: ${number}`);
console.log(outputMessage);