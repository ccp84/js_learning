let result=true; //create a variable called result, assign boolean true
let city="Dublin"; // create a variable called city, assign string Dublin
let firstResponse; // create empty variable 
let secondResponse; // create empty variable

// if variable result is true, variable firstResponse becomes string result is true
if(result) {
	firstResponse = 'result is true';
}

//if variable city is not null, variable second response becomes string thankyou for choosing a city ELSE strong you need to fill in the name of a city
if(city) {
	secondResponse = 'Thank you for choosing a city';
} else {
	secondResponse = 'You need to fill in the name of a City';
}

//output first and second response to console
console.log(firstResponse);
console.log(secondResponse);

//for loop to start x at 1, add 1 to x until x = 10, print x to console
for (let x = 0; x <=10; x++) {
    console.log(x)
}

//Create an object 

let details
details = {
    subject: "JavaScript",
    students: ['John', 'Paul', 'Emily', 'Lisa'], //array as value of an object
    teacher: "Chris",
    venue: "online",
    contact: "chris@gmail.com",
}

console.log(details.teacher) //print value of object
console.log(details.contact)

let firstName = "Mike";
let email = "mike@email.com";
//use backticks to write a template where white space is included and $ to reference variables
let message = `Dear ${firstName},
Thank you for subscribing!
Your email: ${email}`

console.log(message)

// These variables will be sliced and concatinated
// to form the emailAddress variable:
let fullName = 'Andrew Martin';
let domainName = 'gmail';
let tld = 'com';
// lower case the full name
fullName = fullName.toLowerCase();
// slice the full name and concatenate 
let emailAddress = fullName.slice(0, 6) + '.' + fullName.slice(7, 13) + '@' + domainName + '.' + tld;

console.log(emailAddress);

//truth logic

let passport = true;
let ticket = true;
let weapons = false;
let a = 10;
let b = 5;

let either = a > 10 || b <= 5
let getOnFlight = passport && ticket && !weapons

// if/else

let a = 10;
let b = 20;
let result;

if (a < b) {
    result = 'a is smaller'
} else {
    result = 'a is not smaller'
}

// or a a ternery expression

result = a < b ? 'a is smaller' : 'a is not smaller'

// switch case
let result = ''; 
let errorType = "page";

switch (errorType) {
    case "username":
        result = "That username is incorrect, please try again.";
        break;
    case "password":
        result = "Incorrect password, please try again.";
        break;
    case "page":
        result = "Sorry this page doesn't exist.";
        break;
    default:
        result = "Error message unknown";
}

for (let i=0; i <= 20; i++) {
    if(i%2 !== 0) { //%2 checks to see if remainder of division by 2 is 0 for even numbers
        continue; //skip this and continue
    }
    if(i===10) {
        break;//stop here and exit loop
    }
    console.log(i);
}

//array functions

let crew = ["Jean-Luc", "Wesley", "Warf", "William", "Data", "Tasha"];
console.log(crew);
let lastCrewMember = crew.pop();
console.log(lastCrewMember);
console.log(crew);
crew.sort();
console.log(crew);
let newCrew = crew.slice(1,4);
console.log(newCrew);
newCrew.push("Guinan");
console.log(newCrew);

//create an object
let spaceship = {
    name: "Red Dwarf",
    type: "Mining vessel",
    owner: "Jupiter Mining Corporation",
    captain: "Frank Hollister",
};

//object with functions
let classroom = {
    numOfStudents: 0,
    schoolHours: false,
    playtime: false,
    openSchool: function() {
        this.schoolHours = true;
        this.numOfStudents = 20;
    },
    breakTime: function() {
        if(this.schoolHours === true) {
            this.playtime = true;
        }
    }
};

// iterate through an object 

let gamerScores = {
    john: 89,
    paul: 725,
    george: 553,
    robert: 9302,
    steve: 733,
};

for (let i in gamerScores) {
    console.log(i, "scored", gamerScores[i]); //i displays name gamerScores[i] displays number
}

//writing a function
function addTwoNumbers (num1, num2) { //function name, (names of parameters)
    return num1 + num2; //returned value to where function was called
}
let result = addTwoNumbers (40, 2); // call function (parameters passed into function)

let randomNumber = Math.floor(Math.random()*10); //random number between 0-10 *100 for 100 etc etc

let paragraphs = document.getElementsByTagName('p');

// All paragraphs
console.log('The HTMLCollection contains:', paragraphs);
console.log(paragraphs.item(4).textContent);
console.log(paragraphs[4].textContent);

//Getting elements from HTML
// Iterate and print all their texts:
for(let i = 0; i < paragraphs.length; i++) {
    console.log('This is the', paragraphs[i].textContent);
}

// Get a specific index:
console.log("Index 2 is:", paragraphs[2].textContent);

// Same as above, but using the .item() method:
console.log("Index 4 is:", paragraphs.item(4).textContent);

// Get the specific paragraph, log its id attribute:
console.log('The specific paragraph has an id of:', paragraphs.namedItem('specific').id);

let mainContent = document.getElementsByClassName("main-content");
console.log(mainContent);
let second = mainContent.item(2);
console.log(second);

let special = document.getElementById("special");
console.log(special);

// navigating DOM
let mainDiv = document.getElementById('main-div');  // First get the div itself

let parent = mainDiv.parentNode;  // the div's parent element
let children = mainDiv.children;  // the div's children
let firstChild = mainDiv.children[0];  // the div's first child
let nextSibling = mainDiv.nextElementSibling;  // the next element at the same nesting level
let prevSibling = mainDiv.previousElementSibling;  // the previous element at the same nesting level

let parentElement = document.getElementsByClassName("section-content")[0].parentNode; //get all of the class and find its parent

let children = document.getElementById("main").children; //get specific ID and find its children

let sibling = document.getElementsByTagName("h1")[0].nextElementSibling; //find first H1 and its sibling

//create a function to write html back to where it was called. will over write the whole document
//    html element     <button onclick="getAnswer();">Get answer</button>
function getAnswer() {
    document.write('<h2>Answer:</h2>');
    document.write('<p>By calling it and passing it the content you would like to write to the document</p>');
}

//events
<button onclick="alert('Hello! You clicked the button!');">
  Click to Trigger Alert!
</button>
<div id="lowly-div" onclick="alert('You clicked the lowly div!');">
    <p>Though I am but a lowly div, you can still click me</p>
  </div>

//onclick
function changeBox() {
    console.log("Changes incoming!");

    // Get the div
    let lowlyDiv = document.getElementById('lowly-div');

    /* We can check the box to determine its width and
    change colors accordingly. 120 = 100px + 10px padding
    on each side. Check style.css */

    if (lowlyDiv.clientWidth === 120) {
        // Change its background color and width
        lowlyDiv.style.backgroundColor = "lightgreen";
        lowlyDiv.style.width = '200px';
    } else {
        // Change it back to normal
        lowlyDiv.style.backgroundColor = "lightyellow";
        lowlyDiv.style.width = '100px';
    }
}

//when the returned item is an array
function changeCards() {
    let allCards = document.getElementsByClassName('card'); //get all elements
    let cardLength = allCards.length; // length of array
    for (i=0; i<cardLength; i++) { //loop all elements
        allCards[i].style.backgroundColor = "red"; //change each one in turn
    }
}

//event handlers via HTML
// div onmouseenter="turnPink();" onmouseleave="turnYellow();"
function turnPink(){
    let getDiv=document.getElementById('box');
    getDiv.style.backgroundColor = 'lightpink';
}

function turnYellow() {
    let getDiv = document.getElementById('box');
    getDiv.style.backgroundColor = 'yellow';
}

// key presses
function keyPressed(event){
    let pressed = document.getElementById('key-info');
    pressed.innerHTML = event.key;// return the key that was pressed to html element
}

// replace with an event listener - BETTER WAY TO DO THINGS
function myFunction (event) {
    console.log('You clicked the button!');
    console.log(this.id);  // my-button
  }
  
  //listener types
  let myButton = document.getElementById('my-button');
  myButton.addEventListener('click', myFunction);
  magicButton.addEventListener('click', handleBtnClick); // left clicks
  magicButton.addEventListener('contextmenu', handleBtnClick); // right clicks
  magicDiv.addEventListener('mouseover', handleDivMouseOver); // mouseovers
  magicInput.addEventListener('keypress', handleInputKeys); // key presses 
  magicInput.addEventListener('keydown', handleInputKeys); // key down
  magicInput.addEventListener('keyup', handleInputKeys); // key up


  //Change the colour of the box
  let box = document.getElementsByClassName('box'); //fetch boxes into an array

function boxClicked(event) { //feed happening into function
    if (this.style.backgroundColor == 'green') {//check and change colour of 'this' box
        this.style.backgroundColor = 'orange'; //'this' is the box that the event happened on
    } else {
        this.style.backgroundColor = 'green';
    }
}

let boxNum = box.length; // loop through array of boxes and give each an event handler
  for (i=0; i<boxNum; i++) {
      box[i].addEventListener('click', boxClicked);
  }

  //get values submitted via a form
  function getFormDetails(event) {
    event.preventDefault();
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let nameR = document.getElementById('name-result');
    nameR.textContent = name.value;
    let emailR = document.getElementById('email-result');
    emailR.textContent = email.value;
}

let newsletterForm = document.getElementById('newsletter-signup');
newsletterForm.addEventListener('submit', getFormDetails);

//Prepopulated form
/*HTML
<form method="POST" action="/profile/">
<div class="name-box">
    <label for="first-name">First Name:</label>
    <input id="first-name" name="first-name" type="text" required>
</div>
<div class="name-box">
    <label for="last-name">Last Name:</label>
    <input id="last-name" name="last-name" type="text" required>
</div>
<div class="form-box">
    <label for="headline">Headline:</label>
    <input id="headline" name="headline" type="text" required>
</div>
<div class="form-box">
    <label for="position">Current position:</label>
    <input id="position" name="position" type="text" required>
</div>
<input type="submit">
</form>
*/
//JavaScript
let fname = document.getElementById("first-name");
fname.value = "Indiana";
let lname = document.getElementById("last-name");
lname.value = "Jones";
let headline = document.getElementById("headline");
headline.value = "If you want to be a good Archaeologist, you gotta get out of the library.";
let position = document.getElementById("position");
position.value = "Archaeologist at Marshall College";

//bypass defaut submit
function handleSubmit(event) {
    event.preventDefault();
    ... // Everything else you want to do  
    loginForm.submit();
  }
  
  let loginForm = document.getElementById('login-form');
  loginForm.addEventListener('submit', handleSubmit);

  // contact form response event

  let contactForm2 = document.getElementById('contact-form2');
contactForm2.addEventListener('submit', handleSubmit2);

function handleSubmit2(event) {
  // Prevent the form from being submitted
  event.preventDefault();

  // Note the use of .elements (a simpler way to get form field values and using the elements id eg ['username'])
  let userName = contactForm2.elements['username'].value;
  let email = contactForm2.elements['email'].value;
  let message = contactForm2.elements['message'].value;

  // Remember template literals with backticks?
  let html = `
    <p>Hi ${userName}! Thanks for sending us a message! We'll respond to ${email} soon. For reference, the message you submitted is below:</p>
    <p>${message}</p>
  `;

  // Put the above HTML in the response div below the form
  let responseDiv = document.getElementById('response');
  responseDiv.innerHTML = html;
  responseDiv.style.display = 'block';
}

// check an array to see if a username is already in use
if (usernames.includes(name)) { //check array called usernames
    errorMsg.innerHTML = `Sorry, the username ${name} is already in use. Please choose another username.`;
} else {
    usernames.push(name); //add to array
    form.submit();
    console.log(usernames);
}

// DOM Navigation
// Get the <html> element
let html = document.getElementsByTagName('html')[0];

// head and body
let head = html.children[0];
let body = html.children[1];
console.log('The first child of the HTML element is:', head);
console.log('The second child of the HTML element is:', body);

// find the URL of this script file (defined in the src attribute):
let scriptUrl = body.getElementsByTagName('script')[0].src;
console.log('URL for script.js is:', scriptUrl);

// That gave us the whole URL. What if we just want the filename? How about using window.location.href which will give us the whole URL leading up to script.js?
let baseUrl = window.location.href;
console.log('baseUrl is:', baseUrl);

// Split the full url using the baseUrl and get index 1
// Remember you don't have to split a string using a single character.
// You can split it using a whole string, like a URL!
splitUrl = scriptUrl.split(baseUrl);
console.log('Splitting using the baseUrl gives an array:', splitUrl);
scriptName = splitUrl[1];
console.log('Script filename is:', scriptName);

// Maybe we need to know all the stylesheets in use. First get all the links in the <head> element:
let links = head.getElementsByTagName('link');
console.log('Links in the head:', links);

// It's just an HTMLCollection...like an array! Iterate it!
for (let link of links) {
    // If the rel attribute is 'stylesheet', you've found one! Split it w/ the baseUrl like above to get its filename
    if (link.rel === 'stylesheet') {
        console.log('Found a stylesheet:', link.href.split(baseUrl)[1]);
    }
}


// CREATE A NEW HTML TABLE FROM AN ARRAY
// Create an empty array:
let numbers = [];

// Put 1000 random numbers in it, between 0 and 1000 (exclusive of 1000, and duplicates are fine...it's random)
let i = 0;
while (i < 1000) {
    numbers.push(Math.floor(Math.random() * 1000));
    i++;
};

// create a table element. Give it an ID so we can identify it
let table = document.createElement('table');
table.id = 'random-numbers';

// Create some basic HTML markup for the table structure:
let tableHtml = `
<thead>
    <tr>
        <td>Item #</td>
        <td>Value</td>
    </tr>
</thead>
<tbody>
</tbody>
`;

// Set the table's inner html
table.innerHTML= tableHtml;

// Now it's an HTMLElement object, we can get its body!
let tbody = table.getElementsByTagName('tbody')[0];

// Iterate the array and append a row to the table body's html for each number. This is using template literals again
let tbodyHtml = '';
for (let i = 0; i < numbers.length; i++) {
    tbodyHtml += `
        <tr>
            <td>${i}</td>
            <td>${numbers[i]}</td>
        </tr>
    `
}

// With iteration complete, we now have a long string of HTML w/ all the rows for the table body...just set it!
tbody.innerHTML = tbodyHtml;

// Append the whole table to the document's body...voila! 1000 rows!
document.body.appendChild(table);

//grab table and build array of objects
function buildTableData() {
    let reviews = [];
    let tBody = document.getElementsByTagName('tbody')[0];
    let rows = document.getElementsByTagName('tbody')[0].children;
    
    for (let row of rows) {
        let review = {};
        let cells = row.children;
        review.name = cells[0].textContent;
        review.rating = cells[1].textContent;
        review.review = cells[2].textContent;
        reviews.push(review);
    }
    
    return reviews;
}

let data = buildTableData();
console.log(data);

// BUILD HTML AS YOU GO
function buildTable() {
    let html = `
    <table> 
      <thead> 
        <th> Title </th>
        <th> Author </th>
        <th> Published </th>
        </thead>
      <tbody>`;
      
      for (book of books) {
          let row = `
            <tr>
              <td> ${book.title} </td>
              <td> ${book.author} </td>
              <td> ${book.published} </td>
            </tr>`;
            
            html += row;
      }
      
      html += `
        </tbody>
        </table>
        `;
      
      return(html);
}

let table = buildTable();
document.getElementById('books-table').innerHTML = table;