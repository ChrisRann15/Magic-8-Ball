// Enter your username in between the quotations
const username = "";
// Enter your Question in between the quotations
const userQuestion = "";

const randomNumber = Math.floor(Math.random() * 8);

var eightBall = " "

if(username === "") {
    console.log(`Hello!`);
} else {
    console.log(`Hello ${username}!`);
}

if(userQuestion === ""){
    console.log('Sorry, try entering a question first')
    randomNumber = 8;
} else{
    console.log(userQuestion);
}

if(randomNumber === 0) {
    eightBall = 'It is certain';
} else if(randomNumber === 1) {
    eightBall = 'The vibes are giving';
} else if(randomNumber === 2) {
    eightBall = 'Nah, I aint feelin it';
} else if(randomNumber === 3) {
    eightBall = 'Cannot predict now ...';
} else if(randomNumber === 4) {
    eightBall = 'Do not count on it';
} else if(randomNumber === 5) {
    eightBall = 'My sources say no';
} else if(randomNumber === 6) {
    eightBall = 'Outlook not so good';
} else if(randomNumber === 7) {
    eightBall = 'Signs point to yes';
} else{
    eightBall = undefined;
}

if(userQuestion === "") {
    
} else {
    console.log(`${eightBall}.`);
}
