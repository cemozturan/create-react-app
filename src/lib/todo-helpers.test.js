import {addTodo} from './todo-helpers';

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
