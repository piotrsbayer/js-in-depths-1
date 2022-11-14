//an implicitly available object that may refer to different things
//depending on a context, namely:
// - global context
//    - script global context
//    - module global context
// - (ordinary) function context
// - (ordinary) function context in strict mode
// - object context
// - class context
// - explicit binding
// - the case of (arrow) functions

//global context (not available from module, run in console)
console.log('module global context', this);
function ordinary() {
  console.log('ordinary function context in strict mode', this);
}
ordinary();
const o1 = {
  A: 42,
  showA() {
    console.log('ordinary function as object member (method)', this?.A);
  },
  showA2: function () {
    console.log('ordinary function expression as object member', this.A);
  },
  showA3: () => {
    console.log('arrow function expression as object member', this);
  },
};
o1.showA();
o1.showA2();

const showA = o1.showA;
console.log('member function dereferenced ->');
showA();

// constructor scope
class This {
  constructor() {
    this.A = 42;
  }
  showA() {
    console.log(this.A);
  }
}
console.log('constructed scope', new This().A);

ordinary.call({ A: 42 });
