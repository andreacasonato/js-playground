// Ask the user to enter a name, using the switch statement to return a confirmation that the user is a friend if the name selected is known in the case statements. 
// You can add a default response that you don't know the person if it's an unknown name. Output the result into the console.

let firstName = prompt("What's your name?");

let message = '';

switch (firstName) {
    case 'Daniel':
        message = 'Hi Daniel, you\'re my friend!';
        break;
    case 'Thomas':
        message = 'Hi Thomas, you\'re my friend!';
        break;
    case 'Sarah':
        message = 'Hi Sarah, you\'re my friend!';
        break;
    case 'Paul':
        message = 'Hi Paul, you\'re my friend!';
        break;
    default:
        message = 'Sorry, you are not in the friend\'s list!';
}

console.log(message);