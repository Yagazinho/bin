function reverse(n){
    let reversed = [];
    let numArr = n.toString();
    for(let i = 0; i < numArr.length; i++){
        reversed = numArr[i] + reversed;
    }
    return parseInt(reversed) * Math.sign(n);
}

console.log(reverse(-30));
let num = -23;
console.log(Math.sign(num))
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

    let atoz = 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z';
function isPangram(str){
    let strArr = str.toLowerCase().split('');
    let alphabets = atoz.split(',');
    let result = true;
    alphabets.forEach(letter => {
        if(strArr.indexOf(letter) === -1){
            result = false
        }
    })
    return result;
}

const persistence = (num) => {
    let count = 0;
    while(num >= 10){
        num = num.toString().split('').reduce((a,b) => a * b)
        count++;
    }
    return count;
}
console.log(persistence(345));

function isPalindrome(str) {
    let reversed = str.split('').reverse().join('')
    let result = false;
    if (str === reversed) {
        result = true;
    }
    return result;
}


function rev(str){
    let revd = str.split('').reverse().join('');
    return revd;
}

var createCounter = function(n){
console.log(n)
return function(){
    return n++;
}
}

var createCounter = function(n){
    let count = n;
    return () => count++;
}