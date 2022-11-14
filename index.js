// - OO concept
// - an ability of an object to expose members not explicitlly defined on it;

// * let o1 and o2 be objects;
// * let o2 have a field 'A' set to '42';
// * let o1 _inherit_ from o2
//   now o1.A eq 42

// import "./prototype-inheritance";
// import "./this-binding";
// import "./construable-objects";
//import "./class-syntax";

// final thouhghts

// classes and constructors bring 2 things to the table:
// - nominal typing (ability to recognize object type using instanceof operator)
// - ability for the VM to optimize member lookups because of contigous memory allocations

// callables (aka functions) are better because:
// - more granular, and require less ceremony
// - compose MUCH better
// - easier to execute symbolically (especially arrows) bringing another class of optimizations to the table
// - do not encourage state mutations

// my approach: only use constructors for nominal typing
