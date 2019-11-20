function zeros(str){
    let countZero = 0;

    let arr1 = arraySplit1(str);
    let arr2 = arraySplit2(arr1);

    let result = factorial(arr1, arr2);

    let result1 = result;

    while(true) {
        if(result % 10 == 0) {
            result /= 10;
            countZero++;
            continue;
        }
        break;
    }

    return `Factorial = ${result1}
The number of zeros in the end of number = ${countZero}`;
}

function arraySplit1(arr) {
    return arr.split('*').join('').split(/!(?=[0-9])|!(?=$)/); 
}

function arraySplit2(arr) {
    let arr1 = [];
    let reg = /[0-9]!/;

    let n = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].match(reg)) {
            arr1[n] = arr.splice(i, 1);
            n++;
            i--;
        }
    }

    return arr1.join('').split('!');
}

function factorial(arr1, arr2) {
    result = 1;

    for (let i = 0; i < arr1.length; i++) {
        let j = arr1[i];
        
        while(j){
            result *= j;
            j--;
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        let j = arr2[i];
        
        while(j > 0){
            result *= j;
            j -= 2;
        }
    }

    return result;
}

zeros('5!');
zeros('10!');
zeros('5!*6!!');
zeros('5!*7!!*6!!*7!');
zeros('9!!*10!!');