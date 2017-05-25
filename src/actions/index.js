/* eslint-disable import/newline-after-import */
/* Exports all the actions from a single point.

Allows to import actions like so:

import {action1, action2} from '../actions/'
*/
/* Populated by react-webpack-redux:action */
import filterTodo from '../actions/filterTodo.js';
import toggleTodo from '../actions/toggleTodo.js';
import addTodo from '../actions/addTodo.js';
const actions = {
  addTodo,
  toggleTodo,
  filterTodo
};
module.exports = actions;
