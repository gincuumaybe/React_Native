class Gadget {
  constructor(name) {
    this.name = name;
  }
  present() {
    return "I Have an " + this.name;
  }
}

class Handphone extends Gadget {
  constructor(name, mod) {
    super(name);
    this.model = mod;
  }

  show() {
    return this.present() + ", it is " + this.model;
  }
}

let handphone = new Handphone("iphone", "14 Pro Max");

console.log(handphone.show());
