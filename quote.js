// A simple list of default quotes
var defaultQuotes = [
    { text: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
    { text: "Programs must be written for people to read, and only incidentally for machines to execute.", author: "Harold Abelson" },
    { text: "Any sufficiently advanced technology is indistinguishable from magic.", author: "Arthur C. Clarke" },
    { text: "The computer was born to solve problems that did not exist before.", author: "Bill Gates" },
    { text: "Code is like humor. When you have to explain it, it’s bad.", author: "Cory House" },
    { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
    { text: "Software is a great combination of artistry and engineering.", author: "Bill Gates" },
    { text: "Debugging is like being the detective in a crime movie where you are also the murderer.", author: "Filipe Fortes" },
    { text: "The function of good software is to make the complex appear to be simple.", author: "Grady Booch" },
    { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" }
];


function getQuotes() {
    var quotes = localStorage.getItem('quotes');
    if (quotes) {
        return JSON.parse(quotes);
    } else {
        return defaultQuotes;
    }
}

//  (function jo local storage pe save hotha hain)
function saveQuotes(quotes) {
    localStorage.setItem('quotes', JSON.stringify(quotes));
}

// Function jo random quote show karta hain
function showRandomQuote() {
    var quotes = getQuotes();
    var randomIndex = Math.floor(Math.random() * quotes.length);
    var randomQuote = quotes[randomIndex];

    document.getElementById('text-quote').innerText = '"' + randomQuote.text + '"';
    document.getElementById('author-quote').innerText = '- ' + randomQuote.author;
}

// Function jo new Quote add karte
function addQuote() {
    var text = document.getElementById('new-quote').value.trim();
    var author = document.getElementById('author-name').value.trim();

    if (text === '' || author === '') {
        alert('Please enter both a quote and an author.');
        return;
    }

    var quotes = getQuotes();
    quotes.push({ text: text, author: author });
    saveQuotes(quotes);

    document.getElementById('new-quote').value = '';
    document.getElementById('author-name').value = '';
    alert('Quote added!');
}

// Attach simple event listeners to buttons
document.getElementById('generate').onclick = showRandomQuote;
document.getElementById('add').onclick = addQuote;

// Show a random quote when the page loads
showRandomQuote();
