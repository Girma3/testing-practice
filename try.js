function capitalize(str){
    let arr = [...str];
    let firstLetter = arr[0].toUpperCase();
    let result= firstLetter + arr.slice(1).join("")
    return result
}
capitalize('you')