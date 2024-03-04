function isPalindrome(str) {
  const cleanStr = str.toLowerCase().replace(/[^a-z]/g, "");
  let right = cleanStr.length - 1;

  for (let i = 0; i < cleanStr.length / 2; i++) {
    if (cleanStr[i] !== cleanStr[right - i]) {
      return false;
    }
  }

  return true;
}

function arrayMaxMin(arr) {
  let maiorValor = arr[0];
  let menorValor = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maiorValor) {
      maiorValor = arr[i];
    }

    if (arr[i] < menorValor) {
      menorValor = arr[i];
    }
  }

  return [menorValor, maiorValor];
}
