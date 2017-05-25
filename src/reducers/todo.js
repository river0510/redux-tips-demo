/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
import {ADD_TODO, TOGGLE_TODO} from '../actions/const';

const initialState = [
    // {id: 0, text: null, isCompleted: false}
];

let nextId = 0;
function reducer(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  // const nextState = Object.assign({}, state);
  switch (action.type) {
    
    case ADD_TODO: {
      // Modify next state depending on the action and return it
      console.log(action.text);
      return [...state, {id: nextId++, text: action.text, isCompleted: false}];
    }

    case TOGGLE_TODO: {
      // Modify next state depending on the action and return it
      state.forEach((item, index)=>{
        if(item.id === action.id){
          item.isCompleted = !item.isCompleted;
        }
      })
      let newState = [...state];
      return newState;
    } 

    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}

module.exports = reducer;
