console.log('JS - OK');

console.log('ciclo for inizio');
for (i = 1; i <= 100; i++) {


    if (i % 3 !== 0 && i % 5 !== 0) { console.log(i); }
    else {
        if (i % 3 === 0 && i % 5 === 0) { console.log('FizzBuzz' + i); }
        else {
            if (i % 3 === 0) { console.log('Fizz' + i); }
            if (i % 5 === 0) { console.log('Buzz' + i); }
        }
    }
}
console.log('ciclo for fine');

console.log('JS - END');