const words = ['Hecker?', 'click me', 'retarded?', 'robot?', 'dumb?', 'nigerian prince?', 'flag?','something?','useless?','flagg?'];
const urls = [
    'https://example.com', // URL for 'Hecker?'
    'https://binarypiano.com/', // URL for 'click me'
    'https://hooooooooo.com/', // URL for 'retarded?'
    'https://maze.toys/mazes/mini/daily/', // URL for 'robot?'
    'https://thatsthefinger.com/',  // URL for 'dumb?'
    'https://thatsthefinger.com/',  // URL for 'nigerian prince?'
    'pay.html', // URL for 'flag?'
    'https://thatsthefinger.com/',
    'https://thatsthefinger.com/',
    'flagg.html'
];

const linkElement = document.getElementById('dynamic-link');

let index = 0;

function updateLink() {
    linkElement.textContent = words[index];
    linkElement.href = urls[index];
    index = (index + 1) % words.length;
}

setInterval(updateLink, 3000); // Change every 3 seconds

// Initialize with the first word
updateLink();
