function capitalize(word){
    const firstLetter = word[0].toUpperCase()
    let capitalize = firstLetter;
    for (let i = 1; i < word.length; i++){
        capitalize += word[i]
    }
    return capitalize;
}

module.exports = capitalize;