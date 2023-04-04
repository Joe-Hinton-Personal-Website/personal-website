/* Create 3 variables, each with 3 arithmetic operators */ 
/* Use alert to display a concatenated print of the 3 variables */

/* First number of the combo */
const firstNumber = 10 * 2/ 4 + 5;

/* Second number of the combo */
const secondNumber = (100 + 20) /3;

/* Third number of the combo using the other two numbers */
const thirdNumber = (secondNumber/firstNumber*9+3)

/* The pop-up alert with message and combo with concatenation and added lines for spacing */
alert ("You have received this message because you have been chosen to open an important vault. Here is the secret combination:" + `\n` + `\n` + firstNumber + "-" + secondNumber + "-" + thirdNumber);


