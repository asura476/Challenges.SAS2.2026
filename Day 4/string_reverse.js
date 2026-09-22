function inverserChaine(tab) {
  let i = tab.length - 1;
  let tab1 = [];
  while (i >= 0) 
  {
    tab1 += tab[i];
    i--;
  }
  return tab1;
}
console.log(inverserChaine("swilm"))