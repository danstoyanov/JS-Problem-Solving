function takeDaysInYear (month, year) {
          return new Date(year, month, 0).getDate();
}

console.log(takeDaysInYear(1, 2012));
console.log(takeDaysInYear(2, 2021));