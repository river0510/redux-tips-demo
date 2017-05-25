import { ADD_TODO } from './const';

function action(text) {
  return { type: ADD_TODO, text: text};
}

module.exports = action;
