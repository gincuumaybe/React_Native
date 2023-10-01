// Normal Function
function hello() {
  return "hello world";
}

// Normal Function
hello = function () {
  return "hello world";
};

console.log(hello());

// Arrow Function
hello = () => {
  return "hello world this is form arrow function";
};

// Arrow Function
hello = () => "hello world this is form arrow function";

console.log(hello());

// Arrow Function with 1 parameter
hello = (myName) => "hello" + myName + "! this is from arrow function";

// Arrow Function with 1 parameter
hello = (myName) => `hello ${myName}! this is from arrow function`;

console.log(hello("ginza"));
