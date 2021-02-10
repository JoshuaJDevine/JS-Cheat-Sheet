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
    _Delete Property
    _For in loop
    _Destructuring Shorthand Syntax
    _Object Creation Shorthand Syntax
    _Getter and Setter
    _Get Key by Value

_Classes
    _Class
    _Class with constructor
    _Class with extends
    _Class with methods
    _Class with static methods

_Modules
    _Import
    _Export

_Promises

_Async & Await

_Requests

_Design Patterns
    _Constructor Pattern
    _Module Pattern
    _Revealing Module Pattern
    _Singleton Pattern
    _Observer Pattern
    _Mediator Pattern
    _Prototype Pattern
    _Command Pattern

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
_Delete Property
_For in loop
_Destructuring Shorthand Syntax
_Object Creation Shorthand Syntax
_Getter and Setter
_Get Key by Value

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

//_Delete Property
const person = {
    firstName: "Matilda",
    age: 27,
    hobby: "knitting",
    goal: "learning JavaScript"
};
delete person.hobby; // or delete person[hobby];
console.log(person);
/*
{
  firstName: "Matilda"
  age: 27
  goal: "learning JavaScript"
}
*/

//_For in loop
let mobile = {
    brand: 'Samsung',
    model: 'Galaxy Note 9'
};
for (let key in mobile) {
    console.log(`${key}: ${mobile[key]}`);
}

//_Destructuring Shorthand Syntax
const rubiksCubeFacts = {
    possiblePermutations: '43,252,003,274,489,856,000',
    invented: '1974',
    largestCube: '17x17x17'
};
const {possiblePermutations, invented, largestCube} = rubiksCubeFacts;
console.log(possiblePermutations); // '43,252,003,274,489,856,000'
console.log(invented); // '1974'
console.log(largestCube); // '17x17x17'

//_Object Creation Shorthand Syntax
//The shorthand property name syntax in JavaScript allows creating objects without explicitly specifying the property names
const activity = 'Surfing';
const beach = { activity };
console.log(beach); // { activity: 'Surfing' }

//Getter and Setter
const myCat = {
    _name: 'Dottie',
    get name() {
        return this._name;
    },
    set name(newName) {
        this._name = newName;
    }
};
// Reference invokes the getter
console.log(myCat.name);
// Assignment invokes the setter
myCat.name = 'Yankee';

//Get Key by Value
function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}




/*===================================================================================================================*/
/*===================================================================================================================*/
/*--------_Classes--------*\
_Class
_Class with constructor
_Class with extends
_Class with methods
_Class with static methods
\*-----------------------------*/

//_Class
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




/*===================================================================================================================*/
/*===================================================================================================================*/
/*--------_Modules--------*\
_Import
_Export
\*-----------------------------*/

//_Import
//Ex 1
const myClass = require("./myClass");
//Ex 2
const { myClass1, myclass2 } = require("./myClasses")

//_Export
//Example 1
module.exports.myModule = myModule;
//Example 2
module.exports = {
    myModule1,
    myModule2
}
//Example 3
exports.myModule = myModule;
//Example 4 (to use node)
let myModule = {};
myModule.name = "Javascript Node.js"
moduel.explorts = myModule;


/*===================================================================================================================*/
/*===================================================================================================================*/
/*--------_Deign Patterns--------*\
_Constructor Pattern
_Module Pattern
_Revealing Module Pattern
_Singleton Pattern
_Observer Pattern
_Prototype Pattern
_Command Pattern
\*-----------------------------*/

//_Constructor Pattern
// define a constructor for Person objects
function Person(name, age, isDeveloper) {
    this.name = name;
    this.age = age;
    this.isDeveloper = isDeveloper || false;
}
// extend the function's prototype
Person.prototype.writesCode = function() {
    console.log(this.isDeveloper? "This person does write code" : "This person does not write code");
}
// creates a Person instance with properties name: Bob, age: 38, isDeveloper: true and a method writesCode
let person1 = new Person("Bob", 38, true);
// creates a Person instance with properties name: Alice, age: 32, isDeveloper: false and a method writesCode
let person2 = new Person("Alice", 32);
// prints out: This person does write code
person1.writesCode();
// prints out: this person does not write code
person2.writesCode();

//_Module Pattern
// through the use of a closure we expose an object
// as a public API which manages the private objects array
let collection = (function() {
    // private members
    let objects = [];

    // public members
    return {
        addObject: function(object) {
            objects.push(object);
        },
        removeObject: function(object) {
            var index = objects.indexOf(object);
            if (index >= 0) {
                objects.splice(index, 1);
            }
        },
        getObjects: function() {
            return JSON.parse(JSON.stringify(objects));
        }
    };
})();
collection.addObject("Bob");
collection.addObject("Alice");
collection.addObject("Franck");
// prints ["Bob", "Alice", "Franck"]
console.log(collection.getObjects());
collection.removeObject("Alice");
// prints ["Bob", "Franck"]
console.log(collection.getObjects());

//_Revealing Module Pattern
// we write the entire object logic as private members and
// expose an anonymous object which maps members we wish to reveal
// to their corresponding public members
let namesCollection = (function() {
    // private members
    let objects = [];

    function addObject(object) {
        objects.push(object);
    }

    function removeObject(object) {
        var index = objects.indexOf(object);
        if (index >= 0) {
            objects.splice(index, 1);
        }
    }

    function getObjects() {
        return JSON.parse(JSON.stringify(objects));
    }

    // public members
    return {
        addName: addObject,
        removeName: removeObject,
        getNames: getObjects
    };
})();
namesCollection.addName("Bob");
namesCollection.addName("Alice");
namesCollection.addName("Franck");
// prints ["Bob", "Alice", "Franck"]
console.log(namesCollection.getNames());
namesCollection.removeName("Alice");
// prints ["Bob", "Franck"]
console.log(namesCollection.getNames())

//_Singleton Pattern
let singleton = (function() {
    // private singleton value which gets initialized only once
    let config;
    function initializeConfiguration(values){
        this.randomNumber = Math.random();
        values = values || {};
        this.number = values.number || 5;
        this.size = values.size || 10;
    }
    // we export the centralized method for retrieving the singleton value
    return {
        getConfig: function(values) {
            // we initialize the singleton value only once
            if (config === undefined) {
                config = new initializeConfiguration(values);
            }
            // and return the same config value wherever it is asked for
            return config;
        }
    };
})();
let configObject = singleton.getConfig({ "size": 8 });
// prints number: 5, size: 8, randomNumber: someRandomDecimalValue
console.log(configObject);
let configObject1 = singleton.getConfig({ "number": 8 });
// prints number: 5, size: 8, randomNumber: same randomDecimalValue as in first config
console.log(configObject1);

//_Observer Pattern
let publisherSubscriber = {};
// we send in a container object which will handle the subscriptions and publishings
(function(container) {
    // the id represents a unique subscription id to a topic
    let id = 0;
    // we subscribe to a specific topic by sending in
    // a callback function to be executed on event firing
    container.subscribe = function(topic, f) {
        if (!(topic in container)) {
            container[topic] = [];
        }
        container[topic].push({
            "id": ++id,
            "callback": f
        });
        return id;
    }
    // each subscription has its own unique ID, which we use
    // to remove a subscriber from a certain topic
    container.unsubscribe = function(topic, id) {
        let subscribers = [];
        for (let subscriber of container[topic]) {
            if (subscriber.id !== id) {
                subscribers.push(subscriber);
            }
        }
        container[topic] = subscribers;
    }
    container.publish = function(topic, data) {
        for (let subscriber of container[topic]) {
            // when executing a callback, it is usually helpful to read
            // the documentation to know which arguments will be
            // passed to our callbacks by the object firing the event
            subscriber.callback(data);
        }
    }
})(publisherSubscriber);
let subscriptionID1 = publisherSubscriber.subscribe("mouseClicked", function(data) {
    console.log("I am Bob's callback function for a mouse clicked event and this is my event data: " + JSON.stringify(data));
});
let subscriptionID2 = publisherSubscriber.subscribe("mouseHovered", function(data) {
    console.log("I am Bob's callback function for a hovered mouse event and this is my event data: " + JSON.stringify(data));
});
let subscriptionID3 = publisherSubscriber.subscribe("mouseClicked", function(data) {
    console.log("I am Alice's callback function for a mouse clicked event and this is my event data: " + JSON.stringify(data));
});
// NOTE: after publishing an event with its data, all of the
// subscribed callbacks will execute and will receive
// a data object from the object firing the event
// there are 3 console.logs executed
publisherSubscriber.publish("mouseClicked", {"data": "data1"});
publisherSubscriber.publish("mouseHovered", {"data": "data2"});
// we unsubscribe from an event by removing the subscription ID
publisherSubscriber.unsubscribe("mouseClicked", subscriptionID3);
// there are 2 console.logs executed
publisherSubscriber.publish("mouseClicked", {"data": "data1"});
publisherSubscriber.publish("mouseHovered", {"data": "data2"});

//Prototype Pattern
let personPrototype = {
    sayHi: function() {
        console.log("Hello, my name is " + this.name + ", and I am " + this.age);
    },
    sayBye: function() {
        console.log("Bye Bye!");
    }
};
function Person(name, age) {
    name = name || "John Doe";
    age = age || 26;
    function constructorFunction(name, age) {
        this.name = name;
        this.age = age;
    };
    constructorFunction.prototype = personPrototype;
    let instance = new constructorFunction(name, age);
    return instance;
}
let person1 = Person();
let person2 = Person("Bob", 38);
// prints out Hello, my name is John Doe, and I am 26
person1.sayHi();
// prints out Hello, my name is Bob, and I am 38
person2.sayHi();

//Command Pattern
// the object which knows how to execute the command
let invoker = {
    add: function(x, y) {
        return x + y;
    },
    subtract: function(x, y) {
        return x - y;
    }
}
// the object which is used as an abstraction layer when
// executing commands; it represents an interface
// toward the invoker object
let manager = {
    execute: function(name, args) {
        if (name in invoker) {
            return invoker[name].apply(invoker, [].slice.call(arguments, 1));
        }
        return false;
    }
}
// prints 8
console.log(manager.execute("add", 3, 5));
// prints 2
console.log(manager.execute("subtract", 5, 3))