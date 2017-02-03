export const partial = (fn, ...args) => { // ...args here uses the rest operator
  return fn.bind(null, ...args); // ...args here uses the spread operator, different than the one above!
}
