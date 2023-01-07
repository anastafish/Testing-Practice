function analyzeArray(arr){
const averageValue = average(arr)
const minValue = min(arr)
const maxValue = max(arr)
const lengthValue = arr.length
console.log({
    average:averageValue,
    min:minValue,
    max:maxValue,
    length:lengthValue 
})

return {
    average:averageValue,
    min:minValue,
    max:maxValue,
    length:lengthValue 
}
}

function average(arr){
    let total = 0;
    for(let i = 0; i < arr.length;i ++){
        total += arr[i]
    }
    return total / arr.length;
}

function min(arr){
    return arr.reduce((a,b) => Math.min(a,b), Infinity)
}

function max(arr){
    return arr.reduce((a,b) => Math.max(a,b), -Infinity)
}

module.exports = analyzeArray;