//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer
    In JavaScript, we use the 'this' keyword to reference/shortcut to an object

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?
      //Answer
    The four rules that govern what the 'this keyword' is bound to are:
    1. 'this' is an object with properties and takes on the value of the object that is invoking it. Example:
          var thing = {
            name: "Bubba",
            color: "green",
            whatIsColor: function () {
              return this.name + " is " + this.color + "!"; // <-------- When invoked, like so: thing.whatIsColor(); - the 'this' keyword refers to the thing object which invokes it!!! YAY!!!
            }
          }

    2. 'this' is not assigned a value until the object hat houses it invokes the function where this is sitting in. At that point 'this' knows to refere to the object that houses it('this') and  the function it('this') is sitting in.

    3.





  // 3) What is the difference between call and apply?

      //Answer
        They both allow us to borrow functions and set the 'this' this value in a function invocation. The difference is that with ".apply()" you pass in the arguments as an array. With ".call()" you can pass the arguments in seperately.

  // 4) What does .bind do?
      //Answer
        Allows us to set the 'this' value on Methods and to Borrow methods

//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    //Code Here
var user = {
  username: "Mig Mac",
  email: "eggncheese@mcds.com",

  getUsername: function () {
    return this.username;
  }
};

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.
user.getUsername();

//Next Problem


// Write the function definitions which will make the following function invocations function properly.

  //Function Invocations Here

var prius = Car('Toyota', 'Prius', 2011);
var mustang = Car('Ford', 'Mustang', 2013);


function Car (make, model, year) {
  var x = {
    make: make,
    model: model,
    year: year
  }
  return x;
}






prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments prius' move property by 10. Returns the new move property.

//Hint, you'll need to write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the write object (prius vs mustang).


function Car (make, model, year) {
  var x = {
    make: make,
    model: model,
    year: year
  }
  return x;
}

prius.move = 0;

prius.moveCar = function () {
  this["move"] += 10;
  return this["move"];
}

var priusMove = prius.moveCar();





//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

  //Code Here
prius.call(getYear()); // WRONG!!!
getYear.call(prius); // <---- YEEEEAAAAAHHHH!!!!
getYear.apply(prius); // <---- YEEEEAAAAAHHHH!!!!

//New Problem



var user = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};

var getUsername = function(){
  console.log(this.username);
};

setTimeout(getUsername.call(user), 5000); // returns "iliketurtles" right away
setTimeout((getUsername.call(user)), 5000);  // returns "iliketurtles" right away
setTimeout((getUsername.call(user()), 5000);  // error
window.setTimeout((getUsername.call(user)), 5000);
getUsername.call(setTimeout(user, 5000)); // undefined
getUsername.call(setTimeout(user, 5000));

//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will the getUsername function return?

  //Answer Here
  undefined // <---- correct
//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //Answer Here
  getUsername or setTimeout // not sure which
//Fix the setTimeout invocation so that the user object will be the focal object when getUsername is ran.
