function sovle(arr) {
          let result = [];

          for (let i = 0; i < arr.length; i++) {
               if (arr[i] < 0) {
                    result.unshift(arr[i]); 
               } else {
                    result.push(arr[i]);
               }
          }

          result.splice()

          result.forEach((element) => {
                    console.log(element);
          })
}

sovle([7, -2, 8, 9]);
sovle([3, -2, 0, -1]);