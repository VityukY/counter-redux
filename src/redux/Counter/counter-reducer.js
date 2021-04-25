import { combineReducers } from 'redux';
import actionTypes from './couner-types';
const initialState = { counterValue: 0, step: 1 };
const valueReducer = (state = initialState.counterValue, { type, payload }) => {
   switch (type) {
      case actionTypes.INCREMETN:
         return state + payload;
      case actionTypes.DECREMENT:
         return state - payload;
      default:
         return state;
   }
};

const stepReducer = (state = initialState.step, { type, payload }) => {
   switch (type) {
      case actionTypes.SET_STEP:
         return (state = payload);
      case actionTypes.ZERO_STEP:
         return (state = payload);
      default:
         return state;
   }
};

const complexCounetrReducer = combineReducers({
   counterValue: valueReducer,
   step: stepReducer,
});

export default complexCounetrReducer;
