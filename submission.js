function printAgeIn2026(birthYear){

    //as a person will have a age that is the different of this current year - their birth year
    let age = 2026 - birthYear;

    console.log("This person will turn " + age + " in 2026.")
    return age;
}


function printAgeIn10Years(age){
    // having - 0, make the program create automatic typr conversion and convert "19" to 19 and proceed the opertaion
    let newAge = age - 0 + 10;


    console.log("This person will be " + newAge + " in 10 years.")
    return newAge;
}

    // Change the function so adultBool contains True is age is at least 18.
    function checkIfAdult(age){

        // for checking if age is atleast 18
        let (isAdult >= 18)
            isAdult = true

        // this statement will print "The person is not an adult." if isAdult is False,
        // and "The person is an Adult" if isAdult is true.
        console.log("The person is " + (isAdult ? "" : "not")  + " adult.")
        return isAdult;
    }

// Check if the input is of Number type with value 0. 
function checkIfZero(number){

    // inserting === to check if both vaule AND equal to zero
    let isZero = number === 0;

    // this statement will print "The input is not zero." if isZero is False,
    // and "The input is zero" if isZero is true.
    console.log("The input is " + (isZero ? "" : "not")  + " 0.")
    return isZero;
}

// Check whether the first input is a digit string equivalent in value to the second input
function checkIfEquivalent(string, number){
    let isEquivalen = (String == number );
        isEquivalen = true

    // this statement will print "The string is not equivalent to the number." if isEquivalent is False,
    // "The string is equivalent to the number." if isEquivalent is True,
    console.log("The string is " + (isEquivalent ? "" : "not")  + " equivalent to the number.")
    return isEquivalent;
}

//===========================================================================================================================

function unreadAlert(unreadCount){
    
    //so for AND, null considered false, so unreadCount is false, the print statement won't run
    unreadCount && console.log("You have " + unreadCount + " messages.")
}


function unreadAlertValidated(unreadCount){

     //this line mean as if, unreadCount equal to number AND unreadCount is greater than 0, then rum console.log() 
    typeof unreadCount === 'number' && unreadCount > 0 && console.log("You have " + unreadCount + " messages.")
}


function unreadAlertStringInput(unreadCount){

    //To convert unreadCount to a Number, and if it greater then 0 themn print the message
    Number(unreadCount) > 0 && console.log("You have " + unreadCount + " messages.")
}


function showScore(score){
    
    //To make correctedScore equal to score first, unless it is null or undefined
    let correctedScore = score ?? "N/A";

    //Leave the print statement for debugging and
    //the return line for the autograder.
    console.log("The score is:" + score)
    return correctedScore;
}


function printWelcomeMessage(username){
    
    //to test that if user put the username, then the whole statement is true. Otherwise, replace by Mustang
    let userOrPlaceholder = username || "Mustang";

    //Leave the print statement for debugging and
    //the return line for the autograder.
    console.log("Welcome, " + userOrPlaceholder + "!")
    return userOrPlaceholder;







