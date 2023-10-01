console.log("Beberapa contoh Variabel");

// Var
for (var i = 0; i < 5; i++) {
  console.log(i);
}
console.log(i);

// Var
function perulangan() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
}
perulangan();
console.log(i);

// Let
for (let l = 0; l < 5; l++) {
  console.log(l);
}
if (true) {
  let l = 100;
  console.log("l =", l);
}

// Const
const phi = 3.14;
phi = 3.147;
console.log(phi);
