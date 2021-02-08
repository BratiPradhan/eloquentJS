// LOOPING A TRIANGLE
for(i=0; i <= 7; i++) {
    console.log('#'.repeat(i))
}

// FIZZBUZZ
let output =''
for (n=1; n <= 100; n++) {
    if (n%3 === 0 && n%5 === 0 ) {
        output = 'FizzBuzz'
    } else if (n%3 === 0 && n%5 !== 0){
        output = 'Fizz'
    } else if (n%3 !== 0 && n%5 === 0) {
        output = 'Buzz'
    } else {
        output = n
    }
    console.log(output)
}




// ChessBoard
let n = 8
for (i = 0; i <= n; i++) {
    if(i%2 !== 0) {
        console.log(' #'.repeat(n/2))
    } else {
        console.log('# '.repeat(n/2))
    }
}