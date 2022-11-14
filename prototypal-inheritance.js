// - JavaScript inheritance is prototype based, meaning member lookups are performed against object instance,
// and whatever is set as it's prototype, recursively
// - Prototypes can be modified at runtime
// - objects can have their prototypes added or removed
// - prototypes are accessible via Object.getPrototypeOf, or (unofficially) with __proto__ field
// - changing a prototype of an object is an expesive operation
// - mutating prototype is a very difficukt thing for optimizers to classify and therefore
// a performance red flag

const hasPrototypeChain = typeof window !== 'undefined' ? document.body : {};

// chain, native
console.log(hasPrototypeChain);
console.log(Object.getPrototypeOf(hasPrototypeChain, 0));
console.log(Object.getPrototypeOf(hasPrototypeChain, 1));
console.log(Object.getPrototypeOf(hasPrototypeChain, 2));

// chain, custom
const root = { hasRoot: true };
const parent = { hasParent: true };
const child = { hasChild: true };

//without prototypes
console.log('child:', child);

Object.setPrototypeOf(parent, root);
Object.setPrototypeOf(child, parent);

//with prototypes
console.log('child inherited members: [parent:', child.hasParent, ', root: ', child.hasRoot, ']');
console.log('child direct members', Object.getOwnPropertyNames(child));
for (const key in child) {
  console.log(key);
}
console.log("child native member: 'toString'", 'toString' in child);
