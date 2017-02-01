export const addTodo = (list, item) => [...list, item];


// [...list, item] is basically what list.concat(item) would do.
// This adds the item to a new list and returns it

// list.push(item) would mutate the existing list
