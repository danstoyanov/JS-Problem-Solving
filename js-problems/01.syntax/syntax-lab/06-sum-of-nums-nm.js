function solve(n, m) {
     let startNum = Number(n);
     let endNum = Number(m);
     let result = 0;

     for (let i = startNum; i <= endNum; i++) {
          result += i;
     }

     return result;
}

console.log(solve('1', '5'));
console.log(solve('-8', '20'));