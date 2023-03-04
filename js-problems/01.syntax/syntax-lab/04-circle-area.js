function solve (input) {
          var checkedValue = typeof input;

          if (checkedValue == 'number') {
                    let result = Math.pow(input, 2) * Math.PI;
                    console.log(result.toFixed(2));
          } else {
                    console.log(`We can not calculate the circle area, because we receive a ${checkedValue}.`);
          }
}

solve(5);
solve('name');