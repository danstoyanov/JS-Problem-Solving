function sumTable() {
     let nums = Array.from(document.querySelectorAll('td:nth-child(2)'));
     nums.pop();
     let result = document.querySelector('#sum');

     let sum = 0;
     for (const num of nums) {
          sum += Number(num.textContent);
     }

     result.textContent = sum;
}