const Compresor = (string) => {
  let array = string.split("");

  onlyLettersArray = array.filter((item) => isNaN(item));

  const colapsedValuesArray = [];
  counter = 0;
  newLetter = "";

  for (let i = 0; i < onlyLettersArray.length; i++) {
    if (onlyLettersArray[i] !== newLetter) {
      if (counter > 1) {
        colapsedValuesArray.push(counter);
      }

      counter = 1;

      colapsedValuesArray.push(onlyLettersArray[i]);
      newLetter = onlyLettersArray[i];
    } else {
      counter++;
      if (i === onlyLettersArray.length - 1) {
        colapsedValuesArray.push(counter);
      }
    }
  }

  colapsedValuesString = colapsedValuesArray.toString().replace(/\,/g, "");

  return colapsedValuesString;
};

console.log(Compresor("aaabccccdd"));
console.log(Compresor("aaaaaffffffffffc"));
console.log(Compresor("abcd"));
console.log(Compresor("ccceee12eccceee"));
console.log(Compresor("effeac01cb65c"));
