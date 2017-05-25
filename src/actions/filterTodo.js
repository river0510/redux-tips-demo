import { FILTER_TODO } from './const';

function action(filter) {
  return { type: FILTER_TODO, filter: filter };
}

module.exports = action;
