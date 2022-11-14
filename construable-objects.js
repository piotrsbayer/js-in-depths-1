// - functions are objects
// - every function is both "callable", and "construable"
// - objects created (constructed) with the "new" operator have an additional "constructor" property,
// which refers to the function used to create them
// - constructor field has an additional "prototype" field, which refers to its prototype
// - if a function object has a static "prototype" field, object constructed using it expose it
// with "prototype", "constructor.prototype", and __proto__

function Construable() {
  console.log(this);
}

// called
Construable();

// constructed
const constructed = new Construable();

console.log("__proto__", Object.getProtypeOf(constructed));
console.log("constructor", constructed.constructor.prototype);
console.log("prototype empty yet", constructed.prototype);

console.log(
  "are they the same thing?",
  Object.getProtypeOf(constructed) === constructed.constructor.prototype
);

console.log(
  "is 'constructor' just a reference to my function?",
  constructed.constructor == Constru=able
);

// dynamic, extendable prototype (which becomes __proto__ on after construction)
Construable.prototype.A = 42;
Construable.prototype.showA = function () {
  console.log(this.A);
};

console.log("prototype no longer empty ->", constructed.prototype);
constructed.showA();

const anotherConstructed = new Construable();
console.log("newly created instances are prototype aware too -> ");
anotherConstructed.showA();

//prototype chain
function ParentConstruable() {}
ParentConstruable.prototype.B = 9001;
Object.setPrototypeOf(Construable.prototype, ParentConstruable.prototype);
console.log("B", anotherConstructed.B);

anotherConstructed.prototype = ParentConstruable.prototype;
console.log(
  "are they still the same thing?",
  anotherConstructed.prototype === Object.getProtypeOf(anotherConstructed)
);

console.log(
  "'instanceof' operator lets you perfom recursive prototype check",
  constructed instanceof Construable,
  anotherConstructed instanceof Construable,
  anotherConstructedinstanceof ParentConst ruable
);

// constructing an object with "new" is equivalent to:
// setting a prototype manually...
const o1 = {};
const prototype = {
  A: 42,
  showA() {
    console.log(this.A);
  }
};
Object.setPrototypeOf(o1, prototype);
o1.showA();

// or creating an object with explicit prototype...
const o2 = Object.create(prototype);
o2.showA();

//except that they do not have a constructor...
console.log("o1.constructor", o1.constructor);
console.log("o2.constructor", o2.constructor);

//or constructor.prototype reference...
console.log("o1.constructor", o1.constructor?.prototype);
console.log("o2.constructor", o2.constructor?.prototype);

//and therefore no construction routine called on creation
// to simulate the behavior of "new", one would need to
// - create an object
// - set __proto__
// - set constructor
// - set constructor.prototype and prototype
// - run Construable function on the object

