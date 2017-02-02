import {addTodo, findById, toggleTodo, updateTodo} from './todo-helpers';

test('addTodo should add the passed todo to the list', () => {
  const initialTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false}
  ];
  const newTodo = {id: 3, name: 'three', isComplete: false};
  const expected = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false},
    {id: 3, name: 'three', isComplete: false}
  ];

  const result = addTodo(initialTodos, newTodo);
  expect(result).toEqual(expected);
});

test('addTodo should not mutate the existing list', () => {
  const initialTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false}
  ];
  const newTodo = {id: 3, name: 'three', isComplete: false};
  const expected = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false},
    {id: 3, name: 'three', isComplete: false}
  ];

  const result = addTodo(initialTodos, newTodo);
  expect(result).not.toBe(initialTodos);
});

test('findById should return the expected item from an array', () => {
  const initialTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false}
  ];
  const expected = {id: 1, name: 'one', isComplete: false};
  const result = findById(1, initialTodos);
  expect(result).toEqual(expected);
});

test('toggleToDo should toggle the isComplete prop of a todo', () => {
  const initialTodo = {id: 1, name: 'one', isComplete: false};
  const expected = {id: 1, name: 'one', isComplete: true};
  const result = toggleTodo(initialTodo);
  expect(result).toEqual(expected);
});

test('toggleToDo should not mutate the original todo', () => {
  const initialTodo = {id: 1, name: 'one', isComplete: false};
  const result = toggleTodo(initialTodo);
  expect(result).not.toBe(initialTodo);
});

test('updateTodo should update an item by id', () => {
  const initialTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false}
  ];
  const updatedTodo = {id: 2, name: 'two', isComplete: true};
  const expected = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: true}
  ];

  const result = updateTodo(initialTodos, updatedTodo);
  expect(result).toEqual(expected);
});

test('updateTodo should not mutate the original array', () => {
  const initialTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false}
  ];
  const updatedTodo = {id: 2, name: 'two', isComplete: true};
  const expected = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: true}
  ];

  const result = updateTodo(initialTodos, updatedTodo);
  expect(result).not.toBe(initialTodos);
});
