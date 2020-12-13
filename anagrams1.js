function alphabetize(a) {
    return a.toLowerCase().split("").sort().join("").trim();
}

const button = document.getElementById("findButton");
// Finds anagrams of input word
button.onclick = function () {
    let typedText = document.getElementById("input").value;
    let alphaText = alphabetize(typedText)
    for (i = 0; i < words.length; i++) {
        if (alphaText === alphabetize(words[i])) {
            let container = document.createElement('span')
            let text = document.createTextNode(' ' + words[i] + ' ')
            let div = document.querySelector('div')
            container.appendChild(text)
            div.appendChild(container)
        }
    }
}
