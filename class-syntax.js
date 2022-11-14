// classes are just construable functions

class ClassA {
  constructor() {
    this.A = 42;
    console.log(this);
  }
}

function ConstruableA() {
  console.log(this);
}
ConstruableA.prototype.A = 42;

// these 2 are syntactically equivalent
const instanceA = new ClassA();
console.log(instanceA instanceof ClassA);
const constructedA = new ConstruableA();
console.log(constructedA instanceof ConstruableA);

// class declaration is actually an expression
const create = (ctor) => new ctor();

create(
  class Inline {
    constructor() {
      console.log('sup');
    }
  }
);

new (class Inline {
  constructor() {
    console.log('iice');
  }
})();

// inheritance
class Parent {
  constructor() {
    this.hasParent = true;
  }
}

class Child extends Parent {
  constructor() {
    // super is like calling Construable function over an object, extends only guarantees
    // prototype chaining, not constructor calling
    super();
    this.hasChild = true;
  }
}

console.log('inheritance, yo', new Child().hasParent);

// use super to configure parent
class Base {
  constructor(message) {
    console.log(message);
  }
}

class Specific extends Base {
  constructor() {
    super("I'm just a child");
  }
}

new Specific();

// static
// functions are objects, remember?
Specific.soStatic = 42;

console.log('static is available on the constructor function', Specific.soStatic);
console.log('but not on an instance', new Specific().soStatic);

// this is equivalent
class WithStatic {
  static soStatic = 42;
}

console.log("declared with 'static' keyword", WithStatic.soStatic);

// getters and setters
class Encapsulate {
  get field() {
    console.log('field accessed');
    return 42;
  }
  set field(value) {
    console.log("heeey, I'm immutable", value);
  }
}

const pretendsToHaveFields = new Encapsulate();
console.log(pretendsToHaveFields.field);
pretendsToHaveFields.field = 9001;
