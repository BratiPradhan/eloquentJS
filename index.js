// // LOOPING A TRIANGLE
// for(i=0; i <= 7; i++) {
//     console.log('#'.repeat(i))
// }

// // FIZZBUZZ
// let output =''
// for (n=1; n <= 100; n++) {
//     if (n%3 === 0 && n%5 === 0 ) {
//         output = 'FizzBuzz'
//     } else if (n%3 === 0 && n%5 !== 0){
//         output = 'Fizz'
//     } else if (n%3 !== 0 && n%5 === 0) {
//         output = 'Buzz'
//     } else {
//         output = n
//     }
//     console.log(output)
// }




// // ChessBoard
// let n = 8
// for (i = 0; i <= n; i++) {
//     if(i%2 !== 0) {
//         console.log(' #'.repeat(n/2))
//     } else {
//         console.log('# '.repeat(n/2))
//     }
// }

// // power
// const power = function(base, exponent) {
//     let result = 1;
//     for(let count = 0; count < exponent; count++ ){
//         result = result* base;
//     }
//     return result;
// }

// console.log(power(2,20))


// // CLOSURE
// function multiplier(factor) {
//     return number => number * factor
// }

// let twice = multiplier(2);
// let thrice = multiplier(3);
// let numprovided = 6
// console.log('THE NUMBER: ' + numprovided)
// console.log( 'TWICE of the number ' + twice(numprovided));
// console.log( 'THRICE of the number ' + thrice(numprovided));



// function wrapValue(n) {
//     let local = n;
//     return () => local;
// }
// let wrap1 = wrapValue(1);
// let wrap2 = wrapValue(2);
// console.log(wrap1())
// console.log(wrap2())


// RECURSION
function findSolution(target) {
    function find(current, history) {
        if(current == target) {
            return history;
        } else if(current > target) {
            return null;
        } else {
            return find(current + 5, `(${history} + 5 )`) || find(current * 3, `(${history} * 3 )`)
        }
    }

    return find(1, "1")
}

console.log(findSolution(24));