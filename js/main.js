var num = parseInt(prompt("Enter Given Fibonacci Number"));
var n1 = 0;
var n2 = 1;
var sum = 0;
console.log("Initial", n1,n2);
for(i=0; i<num; i++){
    sum = n1 + n2;
    n1 = n2;
    n2 = sum;
    console.log("Values", sum);
}