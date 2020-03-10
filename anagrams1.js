// Alphabetize function
function alphabetize(a) {
    return a.toLowerCase().split("").sort().join("").trim();
}

// Anagram function
const button = document.getElementById("findButton");
button.onclick = function () {
    // Finds value of input
    let typedText = document.getElementById("input").value;
    // Alphabetize input
    let alphaText = alphabetize(typedText)
    for (i = 0; i < words.length; i++){
        // If text alphabetized input is equal to alphabetized words
        if(alphaText === alphabetize(words[i])){
            let container = document.createElement('span')
            let text = document.createTextNode(' ' + words[i] + ' ')
            let div = document.querySelector('div')
            container.appendChild(text)
            div.appendChild(container)
        }
    }
}
