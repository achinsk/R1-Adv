let num = 266219;
let splitArrayNumber = [...num + ''].map(n => + n);
let product = 1;
for (var i = 0; i < splitArrayNumber.length; i++) {
    product *= splitArrayNumber[i];
}

console.log(product); 
console.log((product ** 3).toString().slice(0,2));
