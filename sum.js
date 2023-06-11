function sumToN(n) {
    let sum=0
for(let i=1; i<= n; i++) {
    if(n% 3 ===0|| n%5 ===0) {
        sum= sum + i;
    }
   console.log(sum);
}
sumToN(9);
}