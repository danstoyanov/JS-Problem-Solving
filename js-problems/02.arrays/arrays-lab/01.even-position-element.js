function solve(arr) {
          var result = [];

          for (let i = 0; i < arr.length; i++) {
                   if (i % 2 == 0) {
                    result.push(arr[i]);
                }
          }

          return result.join(" ");
}

console.log(solve(['20', '30', '40', '50', '60']));
console.log(solve(['5', '10']));