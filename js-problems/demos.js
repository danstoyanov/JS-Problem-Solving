const arr = ["apple", "banana", "orange", "peach", "grape"];
const letters = ["ch"];

const filteredArr = arr.filter(word => {
     return letters.every(letter => {
          return word.includes(letter);
     });
});

console.log(filteredArr); // ["apple", "peach"]
