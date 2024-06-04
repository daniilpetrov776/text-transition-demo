let words = document.querySelectorAll('.word');
let wordArray = [];
let currentWord = 0;

words[currentWord].style.opacity = 1;

for (let i = 0; i < words.length; i++) {
    splitLetters(words[i])
}

function changeWord() { // замена букв в словах
    let cw = wordArray[currentWord];
    let nw = currentWord == words.length-1 ? 
    wordArray[0] : wordArray[currentWord+1];
    for (let i = 0; i < cw.length; i++) {  // Удаление старых букв
        animateLetterOut(cw,i); 
    }
    for (let i = 0; i < nw.length; i++) { // Добавление новых
        nw[i].className = 'letter behind';
        nw[0].parentElement.style.opacity = 1;
        animateLetterIn(nw,i)
    }

    currentWord = (currentWord == wordArray.length-1) ?
    0 : currentWord+1;
}

function animateLetterOut (cw,i) {
    setTimeout(function() {
        cw[i].className = 'letter out';
    }, i*80);
}

function animateLetterIn (nw,i) {
    setTimeout(function() {
        nw[i].className = 'letter in';
    }, 340+(i*80));
}

function splitLetters (word) { // берет слово и разбивает на буквы
    let content = word.innerHTML;
    word.innerHTML = '';
    let letters = [];
    for (let i = 0; i < content.length; i++) {
        let letter = document.createElement('span' );// Создает элемент для букв
        letter.className = 'letter'; // накидывает класс
        letter.innerHTML = content.charAt(i); // задает содержимое для буквы как индекс букв слова
        word.appendChild(letter); // записывает буквы в слово с конца
        letters.push(letter); // записывает буквы в массив с кконца 
    }

    wordArray.push(letters); // записывает буквы в слова 
}

changeWord();
setInterval(changeWord, 2000);