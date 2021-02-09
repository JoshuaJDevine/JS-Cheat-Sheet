/*--------TOPICS--------*\
|========================|
_Conditionals
    _Or Operator ||
    _And Operator &&
    _Not Operator !
    _Comparison Operators
    _Ternary Operator
    _If Statement
    _Else Statement
    _Else If Statements
    _Switch Statement

_Functions

_Scope

_Arrays

_Loops

_Iterators

_Objects
    _Object

_Classes
    _Class
    _Class with constructor
    _Class with extends
    _Class with methods
    _Class with static methods

_Modules

_Promises

_Async & Await

_Requests

|========================|
\*----------------------*/




/*===================================================================================================================*/
/*===================================================================================================================*/
/*--------_Conditionals--------*\
_Or Operator ||
_And Operator &&
_Not Operator !
_Comparison Operators
_Ternary Operator
_If Statement
_Else Statement
_Else If Statements
_Switch Statement
\*-----------------------------*/

// _Or Operator ||
// A	    B 	    A || B
// false	false	false
// false	true	true
// true	    false	true
// true	    true	true
true || false;        // true
10 > 5 || 10 > 20;    // true
false || false;       // false
10 > 100 || 10 > 20;  // false

// _And Operator &&
true && true;      // true
1 > 2 && 2 > 1;    // false
true && false;     // false
4 === 4 && 3 > 1;  // true

// _Not Operator !
let thisIsTrue = true;
let oppositeValue = !thisIsTrue;
console.log(oppositeValue); // Prints: false

// _Comparison Operators
// === strict equal
// !== strict not equal
// > greater than
// >= greater than or equal
// < less than
// <= less than or equal
1 > 3       // false
3 > 1       // true
250 >= 250  // true
1 === 1     // true
1 === 2     // false
1 === '1'   // false

//_Ternary Operator
function getFee(isMember) {
    return (isMember ? '$2.00' : '$10.00');
}
console.log(getFee(true));  // expected output: "$2.00"
console.log(getFee(false)); // expected output: "$10.00"
console.log(getFee(null));  // expected output: "$10.00"

//If Statement
const isMailSent = true;
if (isMailSent) {
    console.log('Mail sent to recipient');
}

//_Else Statement
const isTaskCompleted = false;
if (isTaskCompleted) {
    console.log('Task completed');
} else {
    console.log('Task incomplete');
}

//Else If Statements
const size = 10;
if (size > 100) {
    console.log('Big');
} else if (size > 50) {
    console.log('Medium');
} else {
    console.log('Small');
}

//_Switch Statement
const myDirection = "N";
switch (myDirection){
    case "N":
        console.log("Heading north");
        break;
    case "S":
        console.log("Heading south");
        break;
    case "E":
        console.log("Heading east");
        break;
    case "W":
        console.log("Heading west");
        break;
    default:
        console.log("Heading nowhere. No direction found");
        break;
}




/*===================================================================================================================*/
/*===================================================================================================================*/
/*--------_Objects--------*\
_Object
\*------------------------*/

// _Object
let president = {
    firstName: "Barack",
    lastName : "Obama",
    number   : 44,
    fullName : function() {
        return this.firstName + " " + this.lastName;
    }
};




/*===================================================================================================================*/
/*===================================================================================================================*/
/*--------_Classes--------*\
_Class syntax
_Class with constructor
_Class with extends
_Class with methods
_Class with static methods
\*-----------------------------*/

//_Class example
class Song {
    constructor() {
        this.title;
        this.author;
    }

    play() {
        console.log('Song playing!');
    }
}
const mySong = new Song();
mySong.play(); //"Song playing!"

//_Class with constructor
class Song {
    constructor(title, artist) {
        this.title = title;
        this.artist = artist;
    }
}
const mySong = new Song('Bohemian Rhapsody', 'Queen');
console.log(mySong.title);

//_Class with extends
// Parent
class Media {
    constructor(info) {
        this.publishDate = info.publishDate;
        this.name = info.name;
    }
}
// Child
class Song extends Media {
    constructor(songData) {
        super(songData);
        this.artist = songData.artist;
    }
}
const mySong = new Song({
    artist: 'Queen',
    name: 'Bohemian Rhapsody',
    publishDate: 1975
});

//_Class with methods

class Song {
    play() {
        console.log('Playing!');
    }

    stop() {
        console.log('Stopping!');
    }
}

//_Class with static methods
class Instructor {
    constructor({ name, role = "assistant" } = {}) {
        this.role = role;
        this.name = name;
    }
    // Instance method
    Profile() {
        console.log(`${this.name} - ${this.role}`);
    }
    // Static method
    static canTeach(instructor) {
        return (instructor.role === 'classroom');
    }
}
let juniorInstructor = new Instructor({ 'name' : 'Brian' });
let seniorInstructor = new Instructor({ 'name' : 'Alice', "role" : "classroom" });
juniorInstructor.Profile(); // "Brian - assistant"
seniorInstructor.Profile(); // "Alice - classroom"
console.log(
    `${juniorInstructor.name} can teach: ${Instructor.canTeach(juniorInstructor)}` // "Brian can teach: false"
);
console.log(
    `${seniorInstructor.name} can teach: ${Instructor.canTeach(seniorInstructor)}` // "Alice can teach: true"
);