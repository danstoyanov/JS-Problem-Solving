function solve(x, y, operation) {
          let result = '';

          switch (operation) {
                    case '+':
                    result = x + y;
                    break;
                    case '-':
                    result = x - y;
                    break;
                    case '*':
                    result = x * y;
                    break;
                    case '/':
                    result = x / y;
                    break;
                    case '%':
                    result = x % y;
                    break;
                    case '**':
                    result = x ** y;
                    break;
                    default:
                    console.log(`Sorry, wrong operation symbol ${operation}.`);
          }

          console.log(result);
}

solve(5, 6, '+'); // 11
solve(3, 5.5, '*'); // 16.5