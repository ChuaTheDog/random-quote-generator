// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var quotes = [
  {
    quote: 'Be yourself; everyone else is already taken.', //mandatory
    source: 'Oscar Wilde', //mandatory
    citation: '', //optional
    year: 'unkown', //optional
    tags: ['History']
  }, {
    quote: 'Mission accomplished',
    source: 'George W. Bush',
    citation: 'Mission accomplished speech',
    year: '2003',
    tags: ['History', 'Politics']
  }, {
    quote: 'D oh',
    source: 'Home Simpson',
    citation: '',
    year: '',
    tags: ['Fiction', 'Showbusiness']
  }, {
    quote: 'Sorry, I can’t hear you over the sound of how awesome I am.',
    source: 'Harvey Spector',
    citation: '',
    year: '',
    tags: ['Showbusiness', 'Fiction']
  }, {
    quote: 'One good thing about music, when it hits you, you feel no pain.',
    source: 'Bob Marley',
    citation: '',
    year: '',
    tags: ['Showbusiness', 'Music']
  }
];

function changeBackgroundColor() {
  //the random color in hex
  var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  //apply to body
  document.body.style.backgroundColor = randomColor;
}

var uniqueRandoms = [];
var numRandoms = quotes.length;
function getRandomQuote() {

  if (!uniqueRandoms.length) {
    for (var i = 0; i < numRandoms; i++) {
      uniqueRandoms.push(i);
    }
  }

  var index = Math.floor(Math.random() * uniqueRandoms.length);
  var val = uniqueRandoms[index];

  //  remove value from the array
  uniqueRandoms.splice(index, 1);

  //log the index
  console.log(val);
  return val;
}

function printQuote() {

  var randomNum = getRandomQuote(); //assing the number

  var display = '';
  display = '<p class="quote">' + quotes[randomNum].quote + '</p>';
  display += '<p class="source">' + quotes[randomNum].source;

  //if has attributes
  if (quotes[randomNum].citation) {
    display += '<span class="citation">' + quotes[randomNum].citation + '</span>';
  }

  //if has attributes
  if (quotes[randomNum].year) {
    display += '<span class="year">' + quotes[randomNum].year + '</span>'
  }

  //if has attributes
  if (quotes[randomNum].tags) {
    display += '<span class="tags"><br>#' + quotes[randomNum].tags + '</span>'
  }

  display += '</p>';

  //assign the strings to the display
  document.getElementById('quote-box').innerHTML = display;
  changeBackgroundColor();
};

//change without click
setInterval(function() {
  // the backgroundcolor
  changeBackgroundColor();
  //the qute
  printQuote();
}, 30000);
