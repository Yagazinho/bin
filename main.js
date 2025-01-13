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
