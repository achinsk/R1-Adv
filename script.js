'use strict';

let arr = ['453','233','756','5463','4','99','2'];
const result = arr.filter((element) => element.charAt(0) == '2' || element.charAt(0) == '4');
console.log(result);

// Finding A prime number which is a whole number greater than 1 whose only factors are 1 and itself.
let count; 

for (let i = 1; i <= 100; i++) {
    if (i == 1) {continue;}
    count = 1;
    
    do {
        count++;

        if (i % count == 0) {
            if (count !== i) {
                break;
            } else {
                console.log(`${i}: Делители этого числа: 1 и ${i}`);
            }
        }
    } while ( count < i );
}