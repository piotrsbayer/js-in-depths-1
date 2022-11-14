// - JavaScript inheritance is prototype based, meaning member lookups are performed against object instance,
// and whatever is set as it's prototype, recursively

// - Prototypes can be modified at runtime
// - objects can have their prototypes added or removed
// - prototypes are accessible via Object.getPrototypeOf, or (unofficially) with __proto__ field
// - changing a prototype of an object is an expressive operation
// - mutating prototype is a very difficult thing for optimizers to classify and therefore
// a performance red flag

const hasPrototypeChain = document.body;

// chain, native
console.log(hasPrototypeChain);
console.log(Object.getPrototypeOf(hasPrototypeChain));
console.log(Object.getPrototypeOf(Object.getPrototypeOf(hasPrototypeChain)));
console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(hasPrototypeChain))));

// chain, custom
const grandParent = { hasGrandparent: true };
const parent = { hasParent: true };
const child = { hasChild: true };

//without prototypes
console.log("child:", child);

Object.setPrototypeOf(parent, grandParent);
Object.setPrototypeOf(child, parent);

//with prototypes
console.log(
  "child inherited members: [parent:",
  child.hasParent,
  ", grandparent: ",
  child.hasGrandparent,
  "]"
);
console.log("child direct members", Object.getOwnPropertyNames(child));
for (const key in child) {
  console.log(key);
}
console.log("child native member: 'toString'", "toString" in child);

