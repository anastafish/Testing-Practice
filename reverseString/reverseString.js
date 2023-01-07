function reverseString(word){
    let reversed = "";
    const length = word.length;
    for (let i = length - 1; i >= 0 ; i--){
        reversed += word[i]
    }
    return reversed
}

module.exports = reverseString;