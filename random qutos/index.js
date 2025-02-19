let quotes = [
    "Success is the sum of small efforts, repeated day in and day out.",
    "Success doesn't come to you, you've got to go to it.",
    "There's no substitute for hard work.",
    "You have to believe in yourself when no one else does.",
    "The expert in anything was once a beginner."
];


function displayQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[randomIndex];
}


let crrdate;
let time;
let date;
setInterval(() => {
    crrdate = new Date();
    // date = a.toLocaleTimeString();
    date = crrdate.toDateString();
    time = crrdate.toLocaleTimeString();
    // time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
    const show = document.getElementById("time1");
    show.innerText = time + " to " + date;
    displayQuote();
}, 1000)