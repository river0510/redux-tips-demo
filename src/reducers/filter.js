/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
import {FILTER_TODO} from '../actions/const';

const initialState = {filter: "all"};

function reducer(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  // const nextState = Object.assign({}, state);

  switch (action.type) {
    
    case FILTER_TODO: {
      // Modify next state depending on the action and return it
      let nextState = {}
      if(action.filter === "all"){
        nextState = {filter: "all"}
      }else if(action.filter === "active"){
        nextState = {filter: "active"}
      }else{
        nextState = {filter: "completed"}
      }
      return nextState;
    }
    
    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}

module.exports = reducer;
