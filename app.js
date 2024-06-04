let words = document.querySelectorAll('.word');
let wordArray = [];
let currentWord = 0;

words[currentWord].style.opacity = 1;

for (let i = 0; i < words.length; i++) {
    splitLetters(words[i])
}

function splitLetters (word) {
    let content = word.innerHTML;
    word.innerHTML = '';
    let letters = [];
    for (let i = 0; i < content.length; i++) {
        let letter = document.createElement('span' );
        letter.className = 'letter';
        letter.innerHTML = content.charAt(i);
        word.appendChild(letter);
        letters.push(letter);
    }

    wordArray.push(letters);
}

console.log()