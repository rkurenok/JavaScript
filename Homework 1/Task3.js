let algorithmId  = prompt('Select type of algorithm', '1 or 2');
let loopType = prompt('Select the type of cycles you want to use', '1 or 2 or 3'); 
let n = prompt('Enter the parameter passed to the algorithm', '');

if (algorithmId == '1') {
    if (loopType == '1') {
        alert( fib_While(n) );
    }
    else if (loopType == '2') {
        alert( fib_Do_While(n) );
    }
    else if (loopType == '3') {
        alert( fib_For(n) );
    }
}
else if (algorithmId == '2') {
    if (loopType == '1') {
        alert( factorial_While(n) );
    }
    else if (loopType == '2') {
        alert( factorial_Do_While(n) );
    }
    else if (loopType == '3') {
        alert( factorial_For(n) );
    }
}

function fib_While(num) {
    let a = 1;
    let b = 1;
    let i = 3;
    let result = [a, b];
    while(i <= num) {
        let c = a + b;
        a = b;
        b = c;
        result[i - 1] = c;
        i++;
    }
    return num + ' Fibonacci numbers: ' + result;
}

function fib_Do_While(num) {
    let a = 1;
    let b = 1;
    let i = 3;
    let result = [a, b];
    do {
        let c = a + b;
        a = b;
        b = c;
        result[i - 1] = c;
        i++;
    } while(i <= num);

    return num + ' Fibonacci numbers: ' + result;
  }

function fib_For(num) {
    let a = 1;
    let b = 1;
    let result = [a, b];
    for (let i = 3; i <= num; i++) {
      let c = a + b;
      a = b;
      b = c;
      result[i - 1] = c;
    }
    return num + ' Fibonacci numbers: ' + result;
}

function factorial_While(num){
    let result = 1;
    let i = num;
    while(i){
        result *= i;
        i--;
    }
    return 'Factorial of the number !' + num + ' = ' + result;
}

function factorial_Do_While(num){
    let result = 1;
    let i = num;
    do {
        result *= i;
        i--;
    } while(i);
    return 'Factorial of the number !' + num + ' = ' + result;
}

function factorial_For(num){
    let result = 1;
    for (let i = num; i > 0; i--) {
        result *= i;
    }
    return 'Factorial of the number !' + num + ' = ' + result;
}