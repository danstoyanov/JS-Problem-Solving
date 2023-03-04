function extract(content) {
     let text = document.getElementById(content);
     let regex = /\(([^)]+)\)/g;
     let matches = text.innerText.match(regex);
     let names = [];

     for (let i = 0; i < matches.length; i++) {

          names.push(matches[i].replace("(", "").replace(")", "") + ";");
     }

     return names.join();
}

//             const regex = /\(([^)]+)\)/g;
//             const text = "This (text) has (multiple) sets of (parentheses).";
//             const matches = text.match(regex);
//             console.log(matches); // ["(text)", "(multiple)", "(parentheses)"]
