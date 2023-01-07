function caesarCipher(str){
    let result = '';
    let charCode = 0;
    for (let i = 0; i < str.length; i++){
        if (str[i].charCodeAt() == 122){
            charCode = 97;
        }
        else if (str[i].charCodeAt() == 90){
            charCode = 65;
        }
        else{
        charCode = str[i].charCodeAt() + 1;
        }
        result += String.fromCharCode(charCode)
    }
    return result;
}

module.exports = caesarCipher;