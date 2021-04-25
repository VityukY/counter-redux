import { createStore } from 'redux';

const initialState = { counterValue: 0 };
const reducer = (state = initialState, { type, payload }) => {
   switch (type) {
      case 'counet/increment':
         return { counterValue: state.counterValue + payload };
      case 'counet/decrement':
         return { counterValue: state.counterValue - payload };
      default:
         return state;
   }
};

const store = createStore(reducer);

export default store;
