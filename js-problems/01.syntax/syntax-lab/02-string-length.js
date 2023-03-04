
function solve(str1, str2, str3) {
     let first = str1.length;
     let second = str2.length;
     let third = str3.length;

     let sum = first + second + third;
     let avg = Math.floor(sum / 3);

     console.log(sum);
     console.log(avg);
}

solve('chocolate', 'ice cream', 'cake');
solve('pasta', '5', '22.3');