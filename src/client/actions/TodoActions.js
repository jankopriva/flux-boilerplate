import { TODO_ADDED, TODO_REMOVED } from '../constants/Actions.js'
import buildAction from './ActionBuilder.js'

export function addTodoAsync(todo) {
  return new Promise((resolve) => {
    resolve(buildAction(TODO_ADDED, todo));
  });
}

export function addTodo(todo) {
  return buildAction(TODO_ADDED, todo);
}

export function removeTodo(index) {
  return buildAction(TODO_REMOVED, index);
}
