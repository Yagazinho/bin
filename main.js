function reverse(n){
    let reversed = [];
    let numArr = n.toString();
    for(let i = 0; i < numArr.length; i++){
        reversed = numArr[i] + reversed;
    }
    return reversed;
}

console.log(reverse(-49495));
let num = -23;
console.log(num.Math.sign())
// function reverse(str){
//     let reversed = '';
//     let strArr = str.split('');
//     for(let i = 0; i < strArr.length; i++){
//         reversed = strArr[i] + reversed;
//     }
//     return reversed;
// }

// console.log("Hello World");

// console.log(reverse('yams'));