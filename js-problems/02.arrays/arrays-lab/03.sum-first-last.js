function solve(arr) {
          let sum = Number(arr.shift()) + Number(arr.pop());
          return sum;
}

console.log(solve(['20', '30', '40'])); // 60
console.log(solve(['5', '10'])); // 15