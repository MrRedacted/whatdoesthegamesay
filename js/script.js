const projectName = "game-quote-machine";

//The array of quotes lies below. Yes, it is long, scroll past it for the rest of the code :)
const QUOTES = [
    {quote:'War. War never changes', 
    origin:'Fallout'},
    {quote:'You have died of dysentery', 
    origin:'Oregon Trail'},
    {quote:'You require more vespene gas', 
    origin:'StarCraft'},
    {quote:'A man chooses, a slave obeys', 
    origin:'Andrew Ryan, BioShock'},
    {quote:'YOU DIED', 
    origin:'Dark Souls'},
    {quote:'The right man in the wrong place can make all the difference in the world', 
    origin:'G-Man, Half-Life 2'},
    {quote:'We all make choices in life, but in the end our choices make us', 
    origin:'Andrew Ryan, Bioshock'},
    {quote:'Even in dark times, we cannot relinquish the things that make us human', 
    origin:'Khan, Metro 2033'},
    {quote:'A hero need not speak. When he is gone, the world will speak for him',
    origin:'Halo'},
    {quote:'It\'s time to kick a** and chew bubblegum... and I\'m all outta gum',
    origin:'Duke Nukem, Duke Nukem 3D'},
    {quote:'It\'s easy to forget what a sin is in the middle of a battlefield', 
    origin:'Solid Snake, Metal Gear Solid'},
    {quote:'You were almost a Jill sandwich!', 
    origin:'Barry Burton, Resident Evil'},
    {quote:'Who are you, that do not know your history?', 
    origin:'Ulysses, Fallout New Vegas'},
    {quote:'Don\'t wish it were easier, wish you were better', 
    origin:'Chief, Animal Crossing'},
    {quote:'Nothing is true, everything is permitted', 
    origin:'Ezio Auditore, Assassin\'s Creed 2'},
    {quote:'Good men mean well. We just don\'t always end up doing well', 
    origin:'Isaac Clarke, Dead Space 3'},
    {quote:'It\'s dangerous to go alone, take this!', 
    origin:'Old Man, The Legend of Zelda'},
    {quote:'Often when we guess at others\' motives, we reveal only our own', 
    origin:'Mara Sov, Destiny'},
    {quote:'Thank you Mario! But our Princess is in another castle!', 
    origin:'Toad, Super Mario Bros.'},
    {quote:'*cocks shotgun*', 
    origin:'Doomguy, DOOM'},
    {quote:'Finish him!', 
    origin:'Announcer, Mortal Kombat'},
    {quote:'Snake? Snake? SNAAAAAAAAAAAAAKE!!!', 
    origin:'The Colonel, Metal Gear Solid'},
    {quote:'Grass grows, birds fly, sun shines, and brother, I hurt people', 
    origin:'The Scout, Team Fortress 2'},
    {quote:'I used to be an adventurer like you, until I took an arrow to the knee', 
    origin:'Town Guard, Elder Scrolls V: Skyrim'},
    {quote:'Do a barrel roll!',
    origin:'Star Fox 64'},
    {quote:'Science isn\'t about why! It\'s about why not!',
    origin:'Cave Johnson, Portal 2'},
    {quote:'Stop right there, criminal scum!',
    origin:'Town Guard, Elder Scrolls IV: Oblivion'},
    {quote:'War is where the young and stupid are tricked by the old and bitter into killing each other',
    origin:'Niko Bellic, GTA IV'},
];

//Easter egg quote, color scheme, and icon when the user presses f to pay respects
const secretQuote = {quote:'War. War never changes. But men do, through the roads they walk', origin:'Fallout: New Vegas'};

const secretIcon = 'fas fa-flag-usa';

function showSecret(event) {
    if (event.key == 'f') {
        currentQuote = secretQuote.quote;
        currentOrigin = secretQuote.origin;
        $('#text').text(currentQuote);
        $('#author').text(currentOrigin);
        $('body').animate(
            {
                color: '#996633',
                backgroundColor: '#996633'
            },
            1000
        );
        $('.button-box .button').animate(
            {backgroundColor: '#996633'},
            1000
        );
        $('.text-box i').attr('class', secretIcon);
    }
}

//An array of colors for the quote machine to randomly pick through
const COLORS = [
    '#ffc34d', 
    '#4da6ff', 
    '#ff8533', 
    '#ff3333', 
    '#3333ff', 
    '#33cccc', 
    '#00cc66', 
    '#ff9933', 
    '#669999', 
    '#737373', 
    '#004de6', 
    '#339966', 
    '#339933', 
    '#009900', 
    '#6600ff', 
    '#33ccff', 
    '#ffcc00', 
    '#ff6600',
];

//Array of icons for the generator to randomly choose from
const ICONS = [
    'fas fa-gamepad', 
    'fas fa-trophy', 
    'fab fa-xbox', 
    'fab fa-twitch', 
    'fab fa-steam-symbol', 
    'fab fa-steam-square', 
    'fab fa-steam', 
    'fab fa-playstation', 
    'fas fa-ghost', 
    'fas fa-dungeon', 
    'fas fa-scroll', 
    'fas fa-book-dead',
];

//These will be used as values to call on when displaying the quote data for the user
let currentQuote = '';
let currentOrigin = '';

//All functions related to randomly generating quotes, colors, and icons; all are run separate from each other so that different combinations can be achieved
function getRandomQuote() {
  return QUOTES[Math.floor(Math.random() * QUOTES.length)];
}

function getRandomColor() {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
}

function getRandomIcon() {
  return ICONS[Math.floor(Math.random() * ICONS.length)];
}

//This is the main function that generates a new quote, color, and icon
function getQuote() {
    
    let randomQuote = getRandomQuote();
    currentQuote = randomQuote.quote;
    currentOrigin = randomQuote.origin;
    let randomColor = getRandomColor();
  
    $('.text-box').animate(
        {opacity: 0},
        500,
        function() {
            $(this).animate(
                {opacity: 1},
                500
            );
            $('#text').text(currentQuote);
            $('.text-box i').attr('class', getRandomIcon);
        }
    );
  
    $('.author-box').animate(
        {opacity: 0},
        500,
        function() {
            $(this).animate(
                {opacity: 1},
                500
            );
        $('#author').text(currentOrigin);
        }
    );
  
    $('body').animate(
        {color: randomColor, backgroundColor: randomColor},
        1000
    );
  
    $('.button-box .button').animate(
        {backgroundColor: randomColor},
        1000
    );
}

$(document).ready(getQuote);

$(document).keyup(showSecret);

$('#new-quote').click(getQuote);

$('#tweet-quote').click(function() {
    window.open(
        "https://twitter.com/intent/tweet?text=" + currentQuote + ' -' + currentOrigin
    );
    return null;
});