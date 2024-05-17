function sum(a, b){
    return a + b
}
function capitalize(str){
    let arr = [...str];
    let firstLetter = arr[0].toUpperCase();
    let result = firstLetter + arr.slice(1).split(",");
    return result
}

export{sum, capitalize}
