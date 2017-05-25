import { TOGGLE_TODO } from './const';

function action(id) {
  return { type: TOGGLE_TODO, id: id };
}

module.exports = action;
