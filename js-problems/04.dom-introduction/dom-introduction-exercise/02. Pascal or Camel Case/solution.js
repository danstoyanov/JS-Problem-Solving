function solve() {
  let inputText = document.getElementById('text').value;
  let inputParams = document.getElementById('naming-convention').value;
  let result = document.getElementById('result');

  let wordsArr = inputText.split(' ');
  let textArr = wordsArr.map((word) => word.toLowerCase());

  let error = 'Error!';

  if (inputParams.length !== 0 && inputText.length !== 0) {
    if (inputParams.toLowerCase() === 'camel case') {
      result.innerText = camelCaseFunc(textArr);
    } else if (inputParams.toLowerCase() === 'pascal case') {
      result.innerText = pascalCaseFunc(textArr);
    } else {
      result.innerText = error;
    }
  } else {
    result.innerText = error;
  }

  function camelCaseFunc(textArr) {
    let outputText = '';

    for (let [index, element] of textArr.entries()) {
      if (index === 0) {
        outputText += element;
      } else {
        outputText += element.charAt(0).toUpperCase() + element.slice(1);
      }
    }

    return outputText;
  }

  function pascalCaseFunc(textArr) {
    let outputText = '';

    for (let element of textArr) {
      outputText += element.charAt(0).toUpperCase() + element.slice(1);
    }

    return outputText;
  }
}

// you will have only two inputs !
//    => "Camel Case" or "Pascal Case".
//    => Inpuuts always will be separated by space !

// INPUTS:
// "this is an example", "Camel Case" => thisIsAnExample
// "secOND eXamPLE", "Pascal Case" => SecondExample
// "Invalid Input", "Another Case" => Error!