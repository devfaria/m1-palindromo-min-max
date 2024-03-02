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
  /* Seu código aqui */
}
