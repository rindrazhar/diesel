let string = "";

function show(n) {
  if (n < 1 || n === string) {
  } else {
    for (let i = 1; i <= n; i++) {
      for (let j = n; j > i; j--) {
        string += " ";
      }
      for (let k = 0; k < i * 2 - 1; k++) {
        string += "x";
      }
      string += "\n";
    }
    for (let i = 1; i <= n - 1; i++) {
      for (let j = 0; j < i; j++) {
        string += " ";
      }
      for (let k = (n - i) * 2 - 1; k > 0; k--) {
        string += "x";
      }
      string += "\n";
    }
    console.log(string);
  }
}
show(5);
