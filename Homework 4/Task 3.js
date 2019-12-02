function reverseArray(array) {
    let arrayTemp = [];

    for (let i = array.length; i > 0; i--){
      arrayTemp.push(array.pop());
    }

    return arrayTemp;
}

function reverseArrayInPlace(array) {
    let arrayTemp = [];
    
    for (let i = array.length; i > 0; i--){
      arrayTemp.push(array.pop()); 
    }

    for (let i = arrayTemp.length; i > 0; i--){
      array.unshift(arrayTemp.pop());  
    }

    return array;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
