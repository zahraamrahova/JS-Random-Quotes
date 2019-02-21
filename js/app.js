(function(){
const quotes = [
    {
        quote: "Don't cry because it's over, smile because it happened.",
        author: "Dr. Seuss"
    },
    {
        quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
        author: "Marilyn Monroe"
    },
    {
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author: "Albert Einstein"
    },
    {
        quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        author: "Dr. Seuss"
    },
    {
        quote: "Friendship ... is born at the moment when one man says to another What! You too? I thought that no one but myself ",
        author: "C.S. Lewis, The Four Loves"
    },
    {
        quote: "I am so clever that sometimes I don't understand a single word of what I am saying",
        author: "Oscar Wilde, The Happy Prince and Other Stories"
    }
];

const btn = document.getElementById('generate-btn');
btn.addEventListener('click', function(){
    let random = Math.floor(Math.random()*quotes.length);
    // console.log(random);

    document.getElementById('quote').textContent = quotes[random].quote;
    document.querySelector('.author').textContent = quotes[random].author;
})
})();