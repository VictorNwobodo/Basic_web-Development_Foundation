/**
 * Here i create a Counter that generates an incremented value and displays its value on the
 * console but before doing that i first initialise my value to a variable called 'counter'
 * what this variable does is when a user clicks on the button the values auto increments
 * by adding a value of +1 to the existing value on the console.
 */

if (localStorage.getItem("counter")) {
  localStorage.setItem("counter", 0);
}
let counter = 0;

// declaring a function that runs this code called counter.
function count() {
  let counter = localStorage.getItem("counter");
  counter++;
  document.querySelector("h1").innerHTML = counter;
  localStorage.getItem("counter", counter);

  /**what happened is that i created a conditional statement
   * that takes an input that if the counting reaches a value of 10
   * then the user should be informed that the value on the console
   * is now 10 which comes inform of an alert message to the console.
   * and after the value is being passed the counting continues.
   */
  //   if (counter % 10 === 0) {
  //     alert(`count is now ${counter}`);
  //   }
}

// We try adding an eventListner to our button tag so that
// when ever a user clicks on it then the above logic will be consoled.
// but if you take a look closer you will observe that not only do we use an eventListener
//  but we also included 'DOMContentLoaded' is because our aim is for the loading to come before
//  before outputing any value on our console.
document.addEventListener("DOMContentLoaded", function () {
  this.documentElement.querySelector("h1").innerHTML =
    localStorage.getItem("counter");
  this.querySelector("button").onclick = count;

  // setInterval(count, 1000);
});

/**
 * Here is a javaScript code that recieves a user input and creates an alert message
 * with an Extenssional value saying ' hello, followed by the users input inform
 * of an alert message on the console.
 */
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("form").onsubmit = function () {
    const name = document.querySelector("#name").value;
    alert(`Hello, ${name}!`);
  };
});


document.addEventListener("DOMContentLoaded", function () {
  // Changes the font color to red
//   also changes its content to Red
  document.querySelector("#red").onclick = function () {
    document.querySelector("#color").style.color = "red";
    document.querySelector("#color").innerHTML = "Red";
  };

  // Changes the font color to blue
//   also changes its content to blue
  document.querySelector("#blue").onclick = function () {
    document.querySelector("#color").style.color = "blue";
    document.querySelector("#color").innerHTML = "Blue";
  };

  // Changes the font color to green
//   also changes its content to green
  document.querySelector("#green").onclick = function () {
    document.querySelector("#color").style.color = "green";
    document.querySelector("#color").innerHTML = "Green";
  };
});

// Second method of looping a value of data by avoiding copy pasting all the time
// here we tried setting up the color changing property with a different function
// method called 'dataset' and we still get same values.

// 2nd method
// document.addEventListener('DOMContentLoaded', function(){

//     document.querySelectorAll('button').forEach(function(button){
//         button.onclick = function() {
//             document.querySelector('#color').style.color = button.dataset.color;
//         }
//     })
// });

// document.addEventListener('DOMContentLoaded',() =>{
//     document.querySelector('select').onchange  = function() {
//         document.querySelector('#drop').style.color = this.value;
//     }
// });

// By default, submit button is disabled.
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#submit").disabled = true;

  document.querySelector("#task").onkeyup = () => {
    if (document.querySelector("#task").value.length > 0) {
      document.querySelector("#submit").disabled = false;
    } else {
      document.querySelector("#submit").disabled = true;
    }
  };

  document.querySelector("form").onsubmit = () => {
    const task = document.querySelector("#task").value;
    const li = document.createElement("li");
    li.innerHTML = task;

    document.querySelector("#tasks").append(li);

    document.querySelector("#task").value = "";
    document.querySelector("#submit").disabled = true;

    // Stop form for submitting
    return false;
  };
});
